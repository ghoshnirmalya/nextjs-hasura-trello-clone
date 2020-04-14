import React from "react";
import { Box, Heading, Grid, Stack, Link as _Link } from "@chakra-ui/core";
import { NextPage } from "next";
import gql from "graphql-tag";
import { useSubscription, useMutation } from "react-apollo";
import Loader from "components/loader";
import { useRouter } from "next/router";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import find from "lodash/find";
import Scrollbar from "react-scrollbars-custom";
import List from "components/pages/boards/show/list";

const FETCH_BOARD_SUBSCRIPTION = gql`
  subscription fetchBoard($id: uuid!) {
    board_by_pk(id: $id) {
      id
      name
      lists(order_by: { position: asc }) {
        id
        name
        position
        board_id
        cards(order_by: { position: asc }) {
          id
          description
          position
        }
      }
    }
  }
`;

const UPDATE_CARD_MUTATION = gql`
  mutation updateCard($id: uuid!, $position: numeric) {
    update_card(where: { id: { _eq: $id } }, _set: { position: $position }) {
      returning {
        id
        description
        position
      }
    }
  }
`;

const UPDATE_CARD_FOR_DIFFERENT_LISTS_MUTATION = gql`
  mutation updateCardForDifferentLists(
    $id: uuid!
    $position: numeric
    $listId: uuid!
  ) {
    update_card(
      where: { id: { _eq: $id } }
      _set: { list_id: $listId, position: $position }
    ) {
      returning {
        id
      }
    }
  }
`;

const UPDATE_LIST_MUTATION = gql`
  mutation updateList($id: uuid!, $position: numeric) {
    update_list(where: { id: { _eq: $id } }, _set: { position: $position }) {
      returning {
        id
        name
        position
      }
    }
  }
`;

const Board: NextPage<{ boardId?: string }> = ({ boardId }) => {
  const router = useRouter();
  const currentBoardId = boardId || router.query.boardId;
  const { data, loading, error } = useSubscription(FETCH_BOARD_SUBSCRIPTION, {
    variables: { id: currentBoardId },
  });
  const [updateCard] = useMutation(UPDATE_CARD_MUTATION);
  const [updateCardForDifferentLists] = useMutation(
    UPDATE_CARD_FOR_DIFFERENT_LISTS_MUTATION
  );
  const [updateList] = useMutation(UPDATE_LIST_MUTATION);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { name, lists } = data.board_by_pk;

  const headingNode = () => {
    return (
      <Heading as="h2" size="lg">
        {name}
      </Heading>
    );
  };

  const onDragEnd = (result: any, lists: any): any => {
    const { destination, source, type } = result;

    if (!destination) {
      return false;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return false;
    }

    if (type === "list") {
      const destinationList = lists[destination.index];
      const sourceList = lists[source.index];
      const destinationMinusOneList = lists[destination.index - 1];
      const destinationPlusOneList = lists[destination.index + 1];

      const positionOfDestinationList = destinationList.position;
      const positionOfSourceList = sourceList.position;
      const positionOfDestinationMinusOneList =
        destinationMinusOneList && destinationMinusOneList.position;
      const positionOfDestinationPlusOneList =
        destinationPlusOneList && destinationPlusOneList.position;

      if (positionOfSourceList > positionOfDestinationList) {
        let updatedPositionOfSourceList;

        if (destinationMinusOneList) {
          updatedPositionOfSourceList =
            (positionOfDestinationList + positionOfDestinationMinusOneList) / 2;
        } else {
          updatedPositionOfSourceList = positionOfDestinationList / 2;
        }

        /**
         * Update source list
         */
        updateList({
          variables: {
            id: lists[source.index].id,
            position: updatedPositionOfSourceList,
          },
        });
      } else {
        let updatedPositionOfSourceList;

        if (destinationPlusOneList) {
          updatedPositionOfSourceList =
            (positionOfDestinationList + positionOfDestinationPlusOneList) / 2;
        } else {
          updatedPositionOfSourceList = positionOfDestinationList + 1024;
        }

        /**
         * Update source list
         */
        updateCard({
          variables: {
            id: lists[source.index].id,
            position: updatedPositionOfSourceList,
          },
        });
      }
    }

    if (type === "card") {
      /**
       * Card has been reordered within the same list
       */
      if (destination.droppableId === source.droppableId) {
        const list = find(lists, (l) => l.id === destination.droppableId);

        const destinationCard = list.cards[destination.index];
        const sourceCard = list.cards[source.index];
        const destinationMinusOneCard = list.cards[destination.index - 1];
        const destinationPlusOneCard = list.cards[destination.index + 1];

        const positionOfDestinationCard = destinationCard.position;
        const positionOfSourceCard = sourceCard.position;
        const positionOfDestinationMinusOneCard =
          destinationMinusOneCard && destinationMinusOneCard.position;
        const positionOfDestinationPlusOneCard =
          destinationPlusOneCard && destinationPlusOneCard.position;

        if (positionOfSourceCard > positionOfDestinationCard) {
          let updatedPositionOfSourceCard;

          if (destinationMinusOneCard) {
            updatedPositionOfSourceCard =
              (positionOfDestinationCard + positionOfDestinationMinusOneCard) /
              2;
          } else {
            updatedPositionOfSourceCard = positionOfDestinationCard / 2;
          }

          /**
           * Update source card
           */
          updateCard({
            variables: {
              id: sourceCard.id,
              position: updatedPositionOfSourceCard,
            },
          });
        } else {
          let updatedPositionOfSourceCard;

          if (destinationPlusOneCard) {
            updatedPositionOfSourceCard =
              (positionOfDestinationCard + positionOfDestinationPlusOneCard) /
              2;
          } else {
            updatedPositionOfSourceCard = positionOfDestinationCard + 1024;
          }

          /**
           * Update source card
           */
          updateCard({
            variables: {
              id: sourceCard.id,
              position: updatedPositionOfSourceCard,
            },
          });
        }
      } else {
        /**
         * Card has been reordered within different lists
         */
        const destinationList = find(
          lists,
          (l) => l.id === destination.droppableId
        );
        const sourceList = find(lists, (l) => l.id === source.droppableId);
        const destinationCard = destinationList.cards[destination.index];
        const sourceCard = sourceList.cards[source.index];
        const destinationMinusOneCard =
          destinationList.cards[destination.index - 1];
        const lastCardFromDestinationList =
          destinationList.cards[destinationList.cards.length - 1];

        const positionOfDestinationCard =
          destinationCard && destinationCard.position;
        const positionOfDestinationMinusOneCard =
          destinationMinusOneCard && destinationMinusOneCard.position;
        const positionOfLastCardFromDestinationList =
          lastCardFromDestinationList && lastCardFromDestinationList.position;

        let updatedPositionOfSourceCard;

        if (!destinationCard) {
          if (positionOfLastCardFromDestinationList) {
            updatedPositionOfSourceCard =
              positionOfLastCardFromDestinationList + 1024;
          } else {
            updatedPositionOfSourceCard = 1024;
          }
        } else if (!destinationMinusOneCard) {
          updatedPositionOfSourceCard = positionOfDestinationCard / 2;
        } else {
          updatedPositionOfSourceCard =
            (positionOfDestinationCard + positionOfDestinationMinusOneCard) / 2;
        }

        /**
         * Update source card
         */
        updateCardForDifferentLists({
          variables: {
            id: sourceCard.id,
            position: updatedPositionOfSourceCard,
            listId: destinationList.id,
          },
        });
      }
    }
  };

  return (
    <Stack spacing={8}>
      {headingNode()}
      <Grid templateColumns="repeat(1, 1fr)">
        <Box h="calc(100vh - 200px)">
          <Scrollbar noScrollY>
            <DragDropContext
              onDragEnd={(results: any) => onDragEnd(results, lists)}
            >
              <Droppable droppableId="board" type="list" direction="horizontal">
                {(provided: any) => (
                  <Box ref={provided.innerRef}>
                    <List lists={lists} />
                    {provided.placeholder}
                  </Box>
                )}
              </Droppable>
            </DragDropContext>
          </Scrollbar>
        </Box>
      </Grid>
    </Stack>
  );
};

export default Board;
