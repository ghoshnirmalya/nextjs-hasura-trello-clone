import React, { useState, FormEvent } from "react";
import {
  Box,
  PseudoBox,
  Link as _Link,
  Heading,
  Text,
  Stack,
  Button,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
} from "@chakra-ui/core";
import { NextPage } from "next";
import gql from "graphql-tag";
import { useSubscription, useMutation } from "react-apollo";
import Loader from "components/loader";
import Link from "next/link";
import { cookieParser } from "lib/cookie";

const FETCH_BOARDS_SUBSCRIPTION = gql`
  subscription fetchBoards {
    board(order_by: { created_at: asc }) {
      id
      name
    }
  }
`;

const CREATE_BOARD_MUTATION = gql`
  mutation createBoard($name: bpchar!, $admin_id: uuid!) {
    insert_board(objects: { name: $name, admin_id: $admin_id }) {
      returning {
        id
        name
      }
    }
  }
`;

const Boards: NextPage = () => {
  const { data, loading, error } = useSubscription(FETCH_BOARDS_SUBSCRIPTION);
  const [
    updateUserMutation,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_BOARD_MUTATION);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const currentUserId = cookieParser("user-id");

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    await updateUserMutation({
      variables: {
        admin_id: currentUserId,
        name,
      },
    });

    if (!mutationError) {
      onClose();
      setName("");
    }
  };

  const headingNode = () => {
    return (
      <Box d="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Heading as="h2" size="lg" fontWeight="bold">
            Boards
          </Heading>
        </Box>
        <Stack spacing={4} isInline>
          <Box>
            <Input
              type="name"
              id="name"
              aria-describedby="name"
              placeholder="Search for a card"
              value={name}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                console.log(e.currentTarget.value)
              }
            />
          </Box>
          <Box>
            <Button variantColor="purple" onClick={onOpen}>
              Add new board
            </Button>
          </Box>
        </Stack>
      </Box>
    );
  };

  const drawerNode = () => {
    return (
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create Board</DrawerHeader>
          <DrawerBody>
            {mutationError ? (
              <Alert status="error" variant="left-accent">
                <AlertIcon />
                There was an error processing your request. Please try again!
              </Alert>
            ) : null}
            <FormControl isRequired>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                type="name"
                id="name"
                aria-describedby="name"
                placeholder="TODO"
                value={name}
                onChange={(e: FormEvent<HTMLInputElement>) =>
                  setName(e.currentTarget.value)
                }
              />
            </FormControl>
          </DrawerBody>
          <DrawerFooter>
            <Box w="full">
              <Button
                type="submit"
                variantColor="purple"
                mr={4}
                loadingText="Saving..."
                onClick={handleSubmit}
                isLoading={mutationLoading}
                isDisabled={!name.trim()}
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
    );
  };

  return (
    <Stack spacing={8}>
      {headingNode()}
      {drawerNode()}
      <Stack spacing={8}>
        {data.board.map((board: { id: number; name: string }) => {
          return (
            <Box>
              <Link
                key={board.id}
                href={`/boards/[boardId]?boardId=${board.id}`}
                as={`/boards/${board.id}`}
              >
                <a>
                  <PseudoBox
                    p={8}
                    bg="white"
                    rounded="md"
                    borderWidth={1}
                    _hover={{ shadow: "md" }}
                  >
                    <Heading as="h4" size="md">
                      {board.name}
                    </Heading>
                    <Text fontSize="sm" color="gray.700">
                      {board.id}
                    </Text>
                  </PseudoBox>
                </a>
              </Link>
            </Box>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default Boards;
