import {
  Alert,
  AlertIcon,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import Loader from "components/Loader";
import {
  useCreateBoardMutation,
  useFetchBoardsSubscription,
} from "generated-graphql";
import { NextPage } from "next";
import Link from "next/link";
import React, { FormEvent, useState } from "react";

const Boards: NextPage = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const borderColor = { light: "gray.300", dark: "gray.700" };
  const color = { light: "gray.900", dark: "gray.100" };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const currentUserId = "40989e49-4857-4429-80ad-839633adbe55";
  const [
    createBoardMutation,
    { loading: mutationFetching, error: mutationError },
  ] = useCreateBoardMutation();
  const { data } = useFetchBoardsSubscription();

  if (!data) {
    return <Loader />;
  }

  const handleSubmit = async () => {
    await createBoardMutation({
      variables: {
        user_id: currentUserId,
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
          <Heading as="h2" size="lg" fontWeight="bold" color={color[colorMode]}>
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
            <Button variantColor="cyan" onClick={onOpen}>
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
        <DrawerContent bg={bgColor[colorMode]} color={color[colorMode]}>
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
                variantColor="cyan"
                mr={4}
                loadingText="Saving..."
                onClick={handleSubmit}
                isLoading={mutationFetching}
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
        {data.boards.map((board: { id: number; name: string }) => {
          return (
            <Box key={board.id}>
              <Link
                href={`/boards/[boardId]?boardId=${board.id}`}
                as={`/boards/${board.id}`}
              >
                <a>
                  <Box
                    p={8}
                    rounded="md"
                    _hover={{ shadow: "md" }}
                    borderWidth={1}
                    bg={bgColor[colorMode]}
                    borderColor={borderColor[colorMode]}
                    color={color[colorMode]}
                  >
                    <Heading as="h4" size="md">
                      {board.name}
                    </Heading>
                    <Text fontSize="sm">{board.id}</Text>
                  </Box>
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
