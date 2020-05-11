import React, { FC, FormEvent, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link as _Link,
  Stack,
  Textarea,
  Heading,
  AlertIcon,
  Alert,
} from "@chakra-ui/core";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo";
import { useRouter } from "next/router";
import Loader from "components/loader";

const FETCH_CARD_QUERY = gql`
  query fetchCard($id: uuid!) {
    card_by_pk(id: $id) {
      id
      title
      description
      board_id
    }
  }
`;

const UPDATE_CARD_MUTATION = gql`
  mutation updateCard($id: uuid!, $description: String, $title: String) {
    update_card(
      where: { id: { _eq: $id } }
      _set: { description: $description, title: $title }
    ) {
      returning {
        id
        title
        description
      }
    }
  }
`;

const DetailsForm: FC = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();
  const currentCardId = router.query.cardId;

  const {
    data: fetchCardData,
    loading: fetchCardLoading,
    error: fetchCardError,
  } = useQuery(FETCH_CARD_QUERY, {
    variables: { id: currentCardId },
    onCompleted: (data: any) => {
      const { title, description } = data.card_by_pk;

      setTitle(title || "");
      setDescription(description || "");
    },
  });

  const [
    updateCard,
    { loading: cardMutationLoading, error: cardMutationError },
  ] = useMutation(UPDATE_CARD_MUTATION);

  if (fetchCardLoading) {
    return <Loader />;
  }

  if (fetchCardError) {
    return <p>Error: {fetchCardError.message}</p>;
  }

  const { board_id: boardId } = fetchCardData.card_by_pk;

  const handleSubmit = async () => {
    await updateCard({
      variables: {
        id: currentCardId,
        title,
        description,
      },
    });

    if (!cardMutationError) {
      router.push(`/boards/[boardId]?boardId=${boardId}`, `/boards/${boardId}`);
    }
  };

  return (
    <Stack spacing={4}>
      <Box>
        {cardMutationError ? (
          <Alert status="error" variant="left-accent">
            <AlertIcon />
            There was an error processing your request. Please try again!
          </Alert>
        ) : null}
      </Box>
      <Box>
        <Heading as="h5" size="sm">
          Details
        </Heading>
      </Box>
      <Box>
        <Stack spacing={8}>
          <FormControl isRequired>
            <FormLabel htmlFor="title">Title</FormLabel>
            <Input
              type="title"
              id="title"
              aria-describedby="title"
              placeholder="Create a card for my work"
              value={title}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                setTitle(e.currentTarget.value)
              }
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="description">Description</FormLabel>
            <Textarea
              type="description"
              id="description"
              aria-describedby="Description"
              placeholder="Create a card for my work"
              value={description}
              onChange={(e: FormEvent<HTMLInputElement>) =>
                setDescription(e.currentTarget.value)
              }
              height="300px"
            />
          </FormControl>
        </Stack>
      </Box>
      <Box w="full">
        <Stack isInline spacing={4} alignItems="center">
          <Box>
            <Button
              variant="outline"
              size="sm"
              onClick={() =>
                router.push(
                  `/boards/[boardId]?boardId=${boardId}`,
                  `/boards/${boardId}`
                )
              }
            >
              Cancel
            </Button>
          </Box>
          <Box>
            <Button
              variantColor="cyan"
              loadingText="Saving..."
              onClick={handleSubmit}
              isLoading={cardMutationLoading}
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

export default DetailsForm;
