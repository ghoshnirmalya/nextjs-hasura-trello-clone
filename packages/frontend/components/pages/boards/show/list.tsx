import React, { useState, FormEvent } from "react";
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
} from "@chakra-ui/core";
import Card from "components/pages/boards/show/card";
import gql from "graphql-tag";
import { useMutation } from "react-apollo";

const CREATE_CARD_MUTATION = gql`
  mutation createCard(
    $listId: uuid!
    $position: numeric
    $description: String
    $boardId: uuid!
  ) {
    insert_card(
      objects: {
        list_id: $listId
        position: $position
        description: $description
        board_id: $boardId
      }
    ) {
      returning {
        id
        description
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
  boardId: string | string[];
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [description, setDescription] = useState("");
  const [listId, setListId] = useState("");
  const [
    createCard,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(CREATE_CARD_MUTATION);

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
      variables: {
        listId,
        position: getPositionOfNewCard(),
        description,
        boardId,
      },
    });

    if (!mutationError) {
      onClose();
      setDescription("");
      setListId("");
    }
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
              <FormLabel htmlFor="description">Description</FormLabel>
              <Input
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

  const getStyle = (isDragging: any, draggableStyle: any) => ({
    color: isDragging && "#ccc",
    ...draggableStyle,
  });

  return (
    <Stack spacing={8} isInline d="inline-flex">
      {lists.map((list: any, index: any) => (
        <Box w="300px" bg="gray.100" py={4} rounded="md">
          <Draggable key={list.id} draggableId={list.id} index={index}>
            {(provided, snapshot) => (
              <Box
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                style={getStyle(
                  snapshot.isDragging,
                  provided.draggableProps.style
                )}
              >
                <Stack
                  spacing={8}
                  isInline
                  align="center"
                  justifyContent="space-between"
                  mb={4}
                  px={4}
                >
                  <Heading as="h4" size="sm">
                    {list.name}
                  </Heading>
                  <Badge>{list.cards.length}</Badge>
                </Stack>
                <Droppable droppableId={list.id} type="card">
                  {(provided) => (
                    <Box ref={provided.innerRef}>
                      <Scrollbar
                        style={{
                          minHeight: "calc(100vh - 300px)",
                        }}
                      >
                        <Box px={4}>
                          <Stack spacing={4}>
                            <Box>
                              <Card cards={list.cards} />
                            </Box>
                            <Box>
                              <Button
                                variant="link"
                                onClick={() => {
                                  onOpen();
                                  setListId(list.id);
                                }}
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
    </Stack>
  );
};

export default List;
