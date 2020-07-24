import React, { FC } from "react";
import {
  Box,
  Link as _Link,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorMode,
  Grid,
} from "@chakra-ui/core";
import gql from "graphql-tag";
import { useSubscription } from "urql";
import Loader from "components/loader";
import { useRouter } from "next/router";
import Board from "components/pages/boards/show";
import DetailsForm from "components/pages/cards/show/details-form";
import Settings from "components/pages/cards/show/settings";

const FETCH_CARD_SUBSCRIPTION = gql`
  subscription fetchCard($id: uuid!) {
    cards_by_pk(id: $id) {
      id
      title
      description
      board_id
    }
  }
`;

const Card: FC = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const color = { light: "gray.900", dark: "gray.100" };
  const router = useRouter();
  const currentCardId = router.query.cardId;

  const [{ data: fetchCardData, error: fetchCardError }] = useSubscription({
    query: FETCH_CARD_SUBSCRIPTION,
    variables: { id: currentCardId },
  });

  if (!fetchCardData) {
    return <Loader />;
  }

  if (fetchCardError) {
    return <p>Error: {fetchCardError.message}</p>;
  }

  const { board_id } = fetchCardData.cards_by_pk;

  return (
    <>
      <Drawer
        isOpen
        placement="right"
        size="xl"
        onClose={() =>
          router.push(
            `/boards/[boardId]?boardId=${board_id}`,
            `/boards/${board_id}`
          )
        }
      >
        <DrawerOverlay />
        <DrawerContent
          bg={bgColor[colorMode]}
          color={color[colorMode]}
          overflowY="scroll"
        >
          <DrawerCloseButton />
          <DrawerHeader>Update Card</DrawerHeader>
          <DrawerBody>
            <Grid templateColumns="3fr 1fr" gap={8}>
              <Box>
                <DetailsForm />
              </Box>
              <Box position="sticky" top={0} alignSelf="flex-start">
                <Settings />
              </Box>
            </Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <Board boardId={board_id} />
    </>
  );
};

export default Card;
