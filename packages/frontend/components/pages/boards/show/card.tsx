import React from "react";
import { Draggable } from "react-beautiful-dnd";
import Link from "next/link";
import { PseudoBox, useColorMode, Box, Heading, Stack } from "@chakra-ui/core";

const _Card = ({ cards }: { cards: any }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.100", dark: "gray.900" };
  const borderColor = { light: "gray.300", dark: "gray.700" };
  const color = { light: "gray.900", dark: "gray.100" };

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
                      <PseudoBox
                        rounded="md"
                        p={4}
                        _hover={{ shadow: "md" }}
                        borderWidth={1}
                        bg={bgColor[colorMode]}
                        borderColor={borderColor[colorMode]}
                        color={color[colorMode]}
                      >
                        <Heading as="h4" size="xs">
                          {card.description}
                        </Heading>
                      </PseudoBox>
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
