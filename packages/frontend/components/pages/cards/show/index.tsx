import React, { FC } from "react";
import {
  Box,
  Link as _Link,
  Stack,
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
import { useQuery } from "react-apollo";
import Loader from "components/loader";
import { useRouter } from "next/router";
import Board from "components/pages/boards/show";
import DetailsForm from "components/pages/cards/show/details-form";
import Activities from "components/pages/cards/show/activities";
import Actions from "components/pages/cards/show/actions";
import Settings from "components/pages/cards/show/settings";
import Labels from "components/pages/cards/show/labels";

const FETCH_CARD_QUERY = gql`
  query fetchCard($id: uuid!) {
    card_by_pk(id: $id) {
      id
      title
      description
      board_id
      labels {
        id
        name
        color
      }
    }
  }
`;

const Card: FC = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const color = { light: "gray.900", dark: "gray.100" };
  const router = useRouter();
  const currentCardId = router.query.cardId;

  const {
    data: fetchCardData,
    loading: fetchCardLoading,
    error: fetchCardError,
  } = useQuery(FETCH_CARD_QUERY, {
    variables: { id: currentCardId },
  });

  if (fetchCardLoading) {
    return <Loader />;
  }

  if (fetchCardError) {
    return <p>Error: {fetchCardError.message}</p>;
  }

  const { board_id, labels } = fetchCardData.card_by_pk;

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
              <Stack spacing={16}>
                <Box>
                  <Labels labels={labels} />
                </Box>
                <Box>
                  <DetailsForm />
                </Box>
                <Box>
                  <Activities />
                </Box>
              </Stack>
              <Box position="sticky" top={0} alignSelf="flex-start">
                <Stack spacing={16}>
                  }
                  <Box>
                    <Settings labels={labels} boardId={board_id} />
                  </Box>
                  <Box>
                    <Actions />
                  </Box>
                </Stack>
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
