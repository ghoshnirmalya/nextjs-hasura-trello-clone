import React, { FC } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  FormControl,
  Alert,
  AlertIcon,
  useColorMode,
  CheckboxGroup,
  Checkbox,
  DrawerFooter,
  Box,
} from "@chakra-ui/core";
import gql from "graphql-tag";
import { useMutation, useSubscription } from "react-apollo";

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

interface Props {
  boardId: string | string[];
  users: string[];
}

const InviteUsersButton: FC<Props> = ({ boardId, users }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const color = { light: "gray.900", dark: "gray.100" };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, loading } = useSubscription(FETCH_USERS_SUBSCRIPTION, {
    fetchPolicy: "network-only",
  });
  const [
    addUserMutation,
    { error: mutationError, loading: mutationLoading },
  ] = useMutation(ADD_USER_MUTATION);

  const handleSubmit = async (users: any) => {
    users.map(async (id: number) => {
      await addUserMutation({
        variables: {
          user_id: id,
          board_id: boardId,
        },
      });
    });

    if (!mutationError) {
      onClose();
    }
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
      <Button variantColor="cyan" onClick={onOpen}>
        Invite
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent bg={bgColor[colorMode]} color={color[colorMode]}>
          <DrawerCloseButton />
          <DrawerHeader>Invite new user</DrawerHeader>

          <DrawerBody>
            {mutationError ? (
              <Alert status="error" variant="left-accent">
                <AlertIcon />
                There was an error processing your request. Please try again!
              </Alert>
            ) : null}
            <FormControl isRequired>
              <CheckboxGroup
                spacing={4}
                variantColor="teal"
                onChange={(values) => handleSubmit(values)}
                defaultValue={selectedUserIds}
              >
                {data.user.map((user: user) => {
                  return (
                    <Checkbox key={user.id} value={user.id}>
                      {user.email}
                    </Checkbox>
                  );
                })}
              </CheckboxGroup>
            </FormControl>
          </DrawerBody>
          <DrawerFooter>
            <Box w="full">
              <Button
                type="submit"
                variantColor="cyan"
                mr={4}
                loadingText="Saving..."
                onClick={handleSubmit}
                isLoading={mutationLoading}
              >
                Save
              </Button>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default InviteUsersButton;
