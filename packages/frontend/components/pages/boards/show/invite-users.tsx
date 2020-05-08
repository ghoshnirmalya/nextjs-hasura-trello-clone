import React, { FC, useState, MouseEvent, FormEvent } from "react";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Select,
  FormControl,
  FormLabel,
  Alert,
  AlertIcon,
  useColorMode,
} from "@chakra-ui/core";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo";

interface user {
  id: number;
  email: string;
}

const FETCH_USERS_QUERY = gql`
  query fetchUsers {
    user {
      id
      email
      first_name
      last_name
    }
  }
`;

const ADD_USER_MUTATION = gql`
  mutation addUser($name: bpchar!, $user_id: uuid!) {
    insert_board(objects: { name: $name, user_id: $user_id }) {
      returning {
        id
        name
      }
    }
  }
`;

const InviteUsersButton: FC = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const color = { light: "gray.900", dark: "gray.100" };
  const [userId, setUserId] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, loading } = useQuery(FETCH_USERS_QUERY, {
    fetchPolicy: "network-only",
  });
  const [
    addUserMutation,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(ADD_USER_MUTATION);

  const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    await addUserMutation({
      variables: {
        user_id: userId,
      },
    });

    if (!mutationError) {
      onClose();
      setUserId("");
    }
  };

  if (loading) {
    return (
      <Button variantColor="cyan" isDisabled>
        Invite
      </Button>
    );
  }

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
              <FormLabel htmlFor="name">User</FormLabel>
              <Select
                placeholder="Select option"
                isDisabled={loading}
                onClick={(e: MouseEvent<HTMLSelectElement>) =>
                  setUserId(e.currentTarget.value)
                }
              >
                {data.user.map((user: user) => {
                  return (
                    <option key={user.id} value={user.id}>
                      {user.email}
                    </option>
                  );
                })}
              </Select>
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
