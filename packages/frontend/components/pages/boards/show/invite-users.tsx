import React from "react";
import {
  Button,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
} from "@chakra-ui/core";
import gql from "graphql-tag";
import { useMutation, useSubscription } from "react-apollo";
import xor from "lodash/xor";
interface user {
  id: number;
  email: string;
}

const FETCH_USERS_SUBSCRIPTION = gql`
  subscription fetchUsers {
    user {
      id
      email
      first_name
      last_name
    }
  }
`;

const ADD_USER_MUTATION = gql`
  mutation addUser($board_id: uuid!, $user_id: uuid!) {
    insert_board_user(objects: { user_id: $user_id, board_id: $board_id }) {
      returning {
        board_id
        user_id
      }
    }
  }
`;

const InviteUsersButton = ({
  boardId,
  users,
}: {
  boardId: string | string[];
  users: string[];
}) => {
  const { colorMode } = useColorMode();
  const color = { light: "gray.900", dark: "gray.100" };
  const borderColor = { light: "gray.300", dark: "gray.700" };
  const { data, loading } = useSubscription(FETCH_USERS_SUBSCRIPTION, {
    fetchPolicy: "network-only",
  });
  const [addUserMutation, { loading: mutationLoading }] = useMutation(
    ADD_USER_MUTATION
  );

  const handleSubmit = (values: any) => {
    const usersToBeInvited: any[] = xor(values, selectedUserIds);

    usersToBeInvited.map(async (id: number) => {
      await addUserMutation({
        variables: {
          user_id: id,
          board_id: boardId,
        },
      });
    });
  };

  if (loading) {
    return (
      <Button variantColor="cyan" isDisabled>
        Invite
      </Button>
    );
  }

  const selectedUserIds = users.map((user: any) => user.user_id);

  return (
    <>
      <Menu closeOnSelect={false}>
        <MenuButton
          as={Button}
          color={color[colorMode]}
          borderColor={borderColor[colorMode]}
        >
          Invite
        </MenuButton>
        <MenuList
          minWidth="240px"
          color={color[colorMode]}
          borderColor={borderColor[colorMode]}
          placement="bottom-end"
        >
          <MenuOptionGroup
            type="checkbox"
            defaultValue={selectedUserIds}
            onChange={(value: any) => {
              handleSubmit(value);
            }}
          >
            {data.user.map((user: user) => {
              return (
                <MenuItemOption
                  key={user.id}
                  value={user.id}
                  isDisabled={mutationLoading}
                >
                  {user.email}
                </MenuItemOption>
              );
            })}
          </MenuOptionGroup>
        </MenuList>
      </Menu>
    </>
  );
};

export default InviteUsersButton;
