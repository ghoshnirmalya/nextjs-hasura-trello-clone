import React, { FC } from "react";
import { useSubscription } from "react-apollo";
import gql from "graphql-tag";
import Loader from "components/loader";
import {
  Box,
  Alert,
  AlertIcon,
  Link as _Link,
  Stack,
  Heading,
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import Activity from "components/pages/cards/show/activity";
import ActivityForm from "components/pages/cards/show/activity-form";

const FETCH_COMMENTS_SUBSCRIPTION = gql`
  subscription fetchComments($cardId: uuid!) {
    comment(
      where: { card_id: { _eq: $cardId } }
      order_by: { updated_at: desc }
    ) {
      id
      body
      updated_at
      author {
        email
      }
    }
  }
`;

const Activities: FC = () => {
  const router = useRouter();
  const currentCardId = router.query.cardId;

  const {
    data: fetchCommentsData,
    loading: fetchCommentsLoading,
    error: fetchCommentsError,
  } = useSubscription(FETCH_COMMENTS_SUBSCRIPTION, {
    variables: { cardId: currentCardId },
  });

  if (fetchCommentsLoading) {
    return <Loader />;
  }

  return (
    <Stack spacing={4}>
      <Box>
        <Heading as="h5" size="sm">
          Activities
        </Heading>
      </Box>
      <Box>
        <Stack spacing={8}>
          <Box>
            <ActivityForm />
          </Box>
          {fetchCommentsError ? (
            <Alert status="error" variant="left-accent">
              <AlertIcon />
              There was an error processing your request. Please try again!
            </Alert>
          ) : null}
          {!!fetchCommentsData &&
            fetchCommentsData.comment.map((comment: any) => {
              return (
                <Box key={comment.id}>
                  <Activity comment={comment} />
                </Box>
              );
            })}
        </Stack>
      </Box>
    </Stack>
  );
};

export default Activities;
