import React, { useState, FormEvent, KeyboardEvent } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Scrollbar from "react-scrollbars-custom";
import find from "lodash/find";
import {
  Box,
  Stack,
  Heading,
  Badge,
  useDisclosure,
  Button,
  Link as _Link,
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
  useColorMode,
  Textarea,
} from "@chakra-ui/react";
import Card from "components/Pages/Boards/Show/Card";
import gql from "graphql-tag";
import { useMutation } from "urql";

const CREATE_CARD_MUTATION = gql`
  mutation createCard(
    $listId: uuid!
    $position: numeric
    $title: String
    $description: String
    $boardId: uuid!
  ) {
    insert_cards(
      objects: {
        list_id: $listId
        position: $position
        title: $title
        description: $description
        board_id: $boardId
      }
    ) {
      returning {
        id
        title
        description
        position
      }
    }
  }
`;

const CREATE_LIST_MUTATION = gql`
  mutation createList($boardId: uuid!, $position: numeric, $name: String) {
    insert_lists(
      objects: { board_id: $boardId, position: $position, name: $name }
    ) {
      returning {
        id
        name
        position
      }
    }
  }
`;

const List = ({
  lists,
  boardId,
}: {
  lists: any;
  boardId: string | string[] | undefined;
}) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const borderColor = { light: "gray.300", dark: "gray.700" };
  const color = { light: "gray.900", dark: "gray.100" };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [listId, setListId] = useState("");
  const [
    { fetching: createCardMutationFetching, error: createCardMutationError },
    createCard,
  ] = useMutation(CREATE_CARD_MUTATION);
  const [
    { fetching: createListMutationFetching, error: createListMutationError },
    createList,
  ] = useMutation(CREATE_LIST_MUTATION);

  const getPositionOfNewCard = () => {
    const bufferForEachPosition = 1024;
    const list = find(lists, (l) => l.id === listId);
    const positionOfLastCard = list.cards.length
      ? list.cards[list.cards.length - 1].position
      : 0;

    return positionOfLastCard + bufferForEachPosition;
  };

  const handleSubmit = async (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    await createCard({
      listId,
      position: getPositionOfNewCard(),
      title,
      description,
      boardId,
    });

    if (!createCardMutationError) {
      onClose();
      setTitle("");
      setDescription("");
      setListId("");
    }
  };

  const handleAddNewList = async (e: KeyboardEvent) => {
    const getPositionOfNewList = () => {
      const bufferForEachPosition = 1024;
      let positionOfLastList = lists[lists.length - 1]
        ? lists[lists.length - 1].position
        : 1;

      return positionOfLastList + bufferForEachPosition;
    };

    if (e.key == "Enter") {
      e.preventDefault();

      await createList({
        boardId,
        position: getPositionOfNewList(),
        name,
      });

      if (!createListMutationError) {
        setName("");
      }
    }
  };

  const drawerNode = () => {
    return (
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
        <DrawerOverlay />
        <DrawerContent bg={bgColor[colorMode]} color={color[colorMode]}>
          <DrawerCloseButton />
          <DrawerHeader>Create card</DrawerHeader>
          <DrawerBody>
            {createCardMutationError ? (
              <Alert status="error" variant="left-accent">
                <AlertIcon />
                There was an error processing your request. Please try again!
              </Alert>
            ) : null}
            <Stack spacing={8}>
              <FormControl isRequired>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                  type="title"
                  id="title"
                  aria-describedby="title"
                  placeholder="Card One"
                  value={title}
                  onChange={(e: FormEvent<HTMLInputElement>) =>
                    setTitle(e.currentTarget.value)
                  }
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel htmlFor="description">Description</FormLabel>
                <Textarea
                  type="description"
                  id="description"
                  aria-describedby="description"
                  placeholder="Card One"
                  value={description}
                  onChange={(e: FormEvent<HTMLInputElement>) =>
                    setDescription(e.currentTarget.value)
                  }
                />
              </FormControl>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Box w="full">
              <Button
                type="submit"
                variantColor="cyan"
                mr={4}
                loadingText="Saving..."
                onClick={handleSubmit}
                isLoading={createCardMutationFetching}
                isDisabled={!description.trim()}
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
    <Stack spacing={8} isInline d="inline-flex">
      {lists.map((list: any, index: number) => (
        <Box key={index} w="300px">
          <Draggable key={list.id} draggableId={list.id} index={index}>
            {(provided) => (
              <Box
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
              >
                <Box
                  py={4}
                  borderWidth={1}
                  borderBottomWidth={0}
                  borderColor={borderColor[colorMode]}
                  bg={bgColor[colorMode]}
                  color={color[colorMode]}
                >
                  <Stack
                    spacing={8}
                    isInline
                    align="center"
                    justifyContent="space-between"
                    px={4}
                  >
                    <Heading as="h4" size="sm">
                      {list.name}
                    </Heading>
                    <Badge>{list.cards.length}</Badge>
                  </Stack>
                </Box>
                <Droppable droppableId={list.id} type="card">
                  {(provided, snapshot) => (
                    <Box
                      ref={provided.innerRef}
                      bg={
                        snapshot.isDraggingOver
                          ? colorMode === "light"
                            ? "cyan.100"
                            : "gray.700"
                          : "transparent"
                      }
                      {...provided.droppableProps}
                    >
                      <Scrollbar
                        style={{
                          minHeight: "calc(100vh - 300px)",
                        }}
                      >
                        <Box
                          p={4}
                          bg={bgColor[colorMode]}
                          color={color[colorMode]}
                          borderWidth={1}
                          borderColor={borderColor[colorMode]}
                        >
                          <Stack spacing={4}>
                            <Box>
                              <Card cards={list.cards} />
                            </Box>
                            <Box>
                              <Button
                                variant="ghost"
                                onClick={() => {
                                  onOpen();
                                  setListId(list.id);
                                }}
                                py={2}
                                w="full"
                              >
                                Add a new Card
                              </Button>
                            </Box>
                          </Stack>
                        </Box>
                      </Scrollbar>
                      {provided.placeholder}
                    </Box>
                  )}
                </Droppable>
              </Box>
            )}
          </Draggable>
        </Box>
      ))}
      {drawerNode()}
      <Box w="300px">
        <Box
          bg={bgColor[colorMode]}
          color={color[colorMode]}
          p={4}
          rounded="md"
        >
          <Input
            placeholder="Add a new List"
            value={name}
            onChange={(e: FormEvent<HTMLInputElement>) => {
              setName(e.currentTarget.value);
            }}
            onKeyDown={handleAddNewList}
            isDisabled={createListMutationFetching}
          />
        </Box>
      </Box>
    </Stack>
  );
};

export default List;
