import React from "react";
import {
  Button,
  useColorMode,
  Menu,
  MenuButton,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  Icon,
} from "@chakra-ui/core";
import gql from "graphql-tag";
import { useSubscription, useMutation } from "urql";
import xor from "lodash/xor";
import Loader from "components/loader";

interface user {
  id: number;
  email: string;
}

const FETCH_USERS_SUBSCRIPTION = gql`
  subscription fetchUsers {
    users {
      id
      email
      name
    }
  }
`;

const ADD_USER_MUTATION = gql`
  mutation addUser($board_id: uuid!, $user_id: uuid!) {
    insert_boards_users(objects: { user_id: $user_id, board_id: $board_id }) {
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
  boardId: string | string[] | undefined;
  users: string[];
}) => {
  const { colorMode } = useColorMode();
  const color = { light: "gray.900", dark: "gray.100" };
  const borderColor = { light: "gray.300", dark: "gray.700" };
  const [{ data }] = useSubscription({
    query: FETCH_USERS_SUBSCRIPTION,
  });
  const [{ fetching: mutationFetching }, addUserMutation] = useMutation(
    ADD_USER_MUTATION
  );

  if (!data) {
    return <Loader />;
  }

  const handleSubmit = (values: any) => {
    const usersToBeInvited: any[] = xor(values, selectedUserIds);

    usersToBeInvited.map(async (id: number) => {
      await addUserMutation({
        user_id: id,
        board_id: boardId,
      });
    });
  };

  if (mutationFetching) {
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
          Invite <Icon name="chevron-down" />
        </MenuButton>
        <MenuList
          maxW="200px"
          maxH="200px"
          overflowY="scroll"
          overflowX="hidden"
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
            {data.users.map((user: user) => {
              return (
                <MenuItemOption
                  key={user.id}
                  value={user.id}
                  isDisabled={mutationFetching}
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
