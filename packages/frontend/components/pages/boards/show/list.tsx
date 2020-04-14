import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Scrollbar from "react-scrollbars-custom";
import { Box, Stack, Heading, Badge } from "@chakra-ui/core";
import Card from "components/pages/boards/show/card";

const List = ({ lists }: { lists: any }) => {
  const getStyle = (isDragging: any, draggableStyle: any) => ({
    color: isDragging && "#ccc",
    ...draggableStyle,
  });

  return (
    <Stack spacing={16} isInline d="inline-flex">
      {lists.map((list: any, index: any) => (
        <Box w="300px">
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
                  mb={8}
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
                        <Card cards={list.cards} />
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
    </Stack>
  );
};

export default List;
