import React, { useState, FormEvent } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
  Link as _Link,
  Stack,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useColorMode,
} from "@chakra-ui/core";
import { NextPage } from "next";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo";
import Loader from "components/loader";
import { useRouter } from "next/router";
import Board from "components/pages/boards/show";

const FETCH_CARD_QUERY = gql`
  query fetchCard($id: uuid!) {
    card_by_pk(id: $id) {
      id
      description
      board_id
    }
  }
`;

const UPDATE_CARD_MUTATION = gql`
  mutation updateCard($id: uuid!, $description: String) {
    update_card(
      where: { id: { _eq: $id } }
      _set: { description: $description }
    ) {
      returning {
        id
        description
      }
    }
  }
`;

const MyProfile: NextPage = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const color = { light: "gray.900", dark: "gray.100" };
  const router = useRouter();
  const [description, setDescription] = useState("");
  const currentCardId = router.query.cardId;

  const { data, loading, error } = useQuery(FETCH_CARD_QUERY, {
    variables: { id: currentCardId },
    onCompleted: (data) => {
      const { description } = data.card_by_pk;

      setDescription(description || "");
    },
  });

  const [
    updateCard,
    { loading: mutationLoading, error: mutationError },
  ] = useMutation(UPDATE_CARD_MUTATION);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { board_id } = data.card_by_pk;

  const handleSubmit = async () => {
    await updateCard({
      variables: {
        id: currentCardId,
        description,
      },
    });

    if (!mutationError) {
      router.push(
        `/boards/[boardId]?boardId=${board_id}`,
        `/boards/${board_id}`
      );
    }
  };

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
        <DrawerContent bg={bgColor[colorMode]} color={color[colorMode]}>
          <DrawerCloseButton />
          <DrawerHeader>Update Card</DrawerHeader>
          <DrawerBody>
            {mutationError ? (
              <Alert status="error" variant="left-accent">
                <AlertIcon />
                There was an error processing your request. Please try again!
              </Alert>
            ) : null}
            <Stack spacing={8}>
              <Box w="full">
                <FormControl isRequired>
                  <FormLabel htmlFor="description">Description</FormLabel>
                  <Input
                    type="description"
                    id="description"
                    aria-describedby="Description"
                    placeholder="Create a card for my work"
                    value={description}
                    onChange={(e: FormEvent<HTMLInputElement>) =>
                      setDescription(e.currentTarget.value)
                    }
                  />
                </FormControl>
              </Box>
            </Stack>
          </DrawerBody>
          <DrawerFooter>
            <Box w="full">
              <Button
                variant="outline"
                mr={3}
                onClick={() =>
                  router.push(
                    `/boards/[boardId]?boardId=${board_id}`,
                    `/boards/${board_id}`
                  )
                }
              >
                Cancel
              </Button>
              <Button
                variantColor="cyan"
                loadingText="Saving..."
                onClick={handleSubmit}
                isLoading={mutationLoading}
              >
                Save
              </Button>
            </Box>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Board boardId={board_id} />
    </>
  );
};

export default MyProfile;
