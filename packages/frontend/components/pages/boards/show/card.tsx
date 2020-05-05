import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Link from "next/link";
import { Box, Heading, Stack } from "@chakra-ui/core";

const _Card = ({ cards }: { cards: any }) => {
  return (
    <Stack spacing={4}>
      {cards.map((card: any, index: number) => {
        return (
          <Box key={index}>
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
                      bg={snapshot.isDragging ? "grey.400" : "transparent"}
                      color={snapshot.isDragging ? "grey.400" : "black"}
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
