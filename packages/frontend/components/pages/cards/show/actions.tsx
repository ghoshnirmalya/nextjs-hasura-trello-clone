import React, { FC } from "react";
import { Box, Button, Link as _Link, Stack, Heading } from "@chakra-ui/core";
import gql from "graphql-tag";
import { useMutation } from "react-apollo";
import { useRouter } from "next/router";

const UPDATE_CARD_MUTATION = gql`
  mutation updateCard($id: uuid!, $value: Boolean) {
    update_card(where: { id: { _eq: $id } }, _set: { archived: $value }) {
      returning {
        id
      }
    }
  }
`;

interface Props {
  archived: string;
}

const Actions: FC<Props> = ({ archived }) => {
  const router = useRouter();
  const currentCardId = router.query.cardId;

  const [updateCard, { loading: updateCardMutationLoading }] = useMutation(
    UPDATE_CARD_MUTATION
  );

  const handleArchive = async () => {
    await updateCard({
      variables: {
        id: currentCardId,
        value: !archived,
      },
    });
  };

  return (
    <Stack spacing={4}>
      <Box>
        <Heading as="h5" size="sm">
          Actions
        </Heading>
      </Box>
      <Box>
        <Button
          variant="solid"
          w="full"
          leftIcon="email"
          justifyContent="flex-start"
          onClick={handleArchive}
          isLoading={updateCardMutationLoading}
        >
          {!archived ? "Archive" : "Unarchive"}
        </Button>
      </Box>
    </Stack>
  );
};

export default Actions;
