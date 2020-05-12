import React, { FC } from "react";
import {
  Link as _Link,
  Tag,
  TagLabel,
  TagCloseButton,
  Stack,
} from "@chakra-ui/core";
import gql from "graphql-tag";
import { useMutation } from "react-apollo";
import { useRouter } from "next/router";

type Labels = {
  label: {
    id: number;
    color: string;
    name: string;
  };
};

interface Props {
  labels: Labels[];
}

const DELETE_CARD_LABEL_MUTATION = gql`
  mutation delete_card_label($cardId: uuid!, $labelId: uuid!) {
    delete_card_label(
      where: { card_id: { _eq: $cardId }, label_id: { _eq: $labelId } }
    ) {
      returning {
        id
      }
    }
  }
`;

const Labels: FC<Props> = ({ labels }) => {
  if (!labels.length) return null;

  const router = useRouter();
  const currentCardId = router.query.cardId;
  const [deleteCardLabel] = useMutation(DELETE_CARD_LABEL_MUTATION);

  const handleRemoveLabelFromCard = async (id: number) => {
    await deleteCardLabel({
      variables: {
        cardId: currentCardId,
        labelId: id,
      },
    });
  };

  return (
    <Stack spacing={2} isInline flexWrap="wrap">
      {labels.map((label: any) => {
        return (
          <Tag
            key={label.label.id}
            rounded="full"
            variant="solid"
            bg={label.label.color}
            mb={2}
          >
            <TagLabel>{label.label.name}</TagLabel>
            <TagCloseButton
              onClick={() => handleRemoveLabelFromCard(label.label.id)}
            />
          </Tag>
        );
      })}
    </Stack>
  );
};

export default Labels;
