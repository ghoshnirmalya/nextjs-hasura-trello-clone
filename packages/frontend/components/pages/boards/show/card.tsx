import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Link from "next/link";
import { Box, Heading, Stack } from "@chakra-ui/core";

const _Card = ({ cards }: { cards: any }) => {
  const getStyle = (isDragging: any, draggableStyle: any) => ({
    userSelect: "none",
    background: isDragging && "#002140",
    color: isDragging && "#ccc",
    boxShadow:
      isDragging &&
      "0 10px 15px -3px rgba(0, 0, 0, .1), 0 4px 6px -2px rgba(0, 0, 0, .05)",
    borderRadius: "2px",
    ...draggableStyle,
  });

  return (
    <Stack spacing={4}>
      {cards.map((card: any, index: any) => {
        return (
          <Box>
            <Link
              key={card.id}
              href={`/cards/[cardId]?cardId=${card.id}`}
              as={`/cards/${card.id}`}
            >
              <a>
                <Draggable draggableId={card.id} index={index}>
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
                      <Box
                        borderWidth="1px"
                        rounded="md"
                        bg="white"
                        p={4}
                        boxShadow="sm"
                      >
                        <Heading as="h4" size="xs">
                          {card.description}
                        </Heading>
                      </Box>
                    </Box>
                  )}
                </Draggable>
              </a>
            </Link>
          </Box>
        );
      })}
    </Stack>
  );
};

export default _Card;
