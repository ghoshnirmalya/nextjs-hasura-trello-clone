import React, { FC, FormEvent, useState } from "react";
import { useMutation } from "react-apollo";
import gql from "graphql-tag";
import {
  Box,
  Alert,
  AlertIcon,
  Link as _Link,
  Stack,
  Avatar,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/core";
import { useRouter } from "next/router";
import { cookieParser } from "lib/cookie";

const INSERT_COMMENT_MUTATION = gql`
  mutation insertComment($authorId: uuid!, $cardId: uuid!, $body: String) {
    insert_comment(
      objects: { author_id: $authorId, card_id: $cardId, body: $body }
    ) {
      returning {
        id
      }
    }
  }
`;

const Activities: FC = () => {
  const currentUserId = cookieParser("user-id");
  const router = useRouter();
  const currentCardId = router.query.cardId;
  const [comment, setComment] = useState("");

  const [
    insertComment,
    { loading: commentMutationLoading, error: commentMutationError },
  ] = useMutation(INSERT_COMMENT_MUTATION);

  const handleSubmit = async () => {
    await insertComment({
      variables: {
        cardId: currentCardId,
        authorId: currentUserId,
        body: comment,
      },
    });

    if (!commentMutationError) {
      setComment("");
    }
  };

  return (
    <Stack spacing={4}>
      <Box>
        {commentMutationError ? (
          <Alert status="error" variant="left-accent">
            <AlertIcon />
            There was an error processing your request. Please try again!
          </Alert>
        ) : null}
      </Box>
      <Box>
        <Stack isInline spacing={4} alignItems="center">
          <Box>
            <Avatar size="sm" name="John Doe" />
          </Box>
          <Box w="full">
            <Text fontSize="md" fontWeight="bold">
              John Doe
            </Text>
          </Box>
        </Stack>
      </Box>
      <Box w="full">
        <Textarea
          fontSize="md"
          placeholder="Write a comment"
          value={comment}
          onChange={(e: FormEvent<HTMLInputElement>) =>
            setComment(e.currentTarget.value)
          }
        />
      </Box>
      <Box w="full">
        <Stack isInline spacing={4} alignItems="center">
          <Box>
            <Button variant="outline" size="sm" onClick={() => setComment("")}>
              Cancel
            </Button>
          </Box>
          <Box>
            <Button
              variantColor="cyan"
              loadingText="Saving..."
              onClick={handleSubmit}
              isLoading={commentMutationLoading}
              size="sm"
            >
              Post
            </Button>
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Activities;
