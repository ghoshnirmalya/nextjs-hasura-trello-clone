import React, { FC } from "react";
import {
  Box,
  Button,
  Alert,
  AlertIcon,
  Link as _Link,
  Stack,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  useColorMode,
} from "@chakra-ui/core";
import gql from "graphql-tag";
import { useSubscription, useMutation } from "react-apollo";
import Loader from "components/loader";
import xor from "lodash/xor";
import find from "lodash/find";
import { useRouter } from "next/router";

const FETCH_LABELS_SUBSCRIPTION = gql`
  subscription fetchLabels($boardId: uuid!) {
    board_by_pk(id: $boardId) {
      id
      labels {
        id
        name
        color
      }
    }
  }
`;

const INSERT_LABEL_MUTATION = gql`
  mutation insertLabel(
    $boardId: uuid!
    $cardId: uuid!
    $name: String
    $color: String
  ) {
    insert_label(
      objects: {
        card_id: $cardId
        name: $name
        color: $color
        board_id: $boardId
      }
    ) {
      returning {
        id
      }
    }
  }
`;

const INSERT_CARD_LABEL_MUTATION = gql`
  mutation insertCardLabel($cardId: uuid!, $labelId: uuid!) {
    insert_card_label(objects: { card_id: $cardId, label_id: $labelId }) {
      returning {
        id
      }
    }
  }
`;

interface Props {
  selectedLabels: any;
  boardId: number;
}

const LabelsMenu: FC<Props> = ({ selectedLabels, boardId }) => {
  const { colorMode } = useColorMode();
  const borderColor = { light: "gray.300", dark: "gray.700" };
  const color = { light: "gray.900", dark: "gray.100" };
  const router = useRouter();
  const currentCardId = router.query.cardId;

  const {
    data: fetchLabelsData,
    loading: fetchLabelsLoading,
    error: fetchLabelsError,
  } = useSubscription(FETCH_LABELS_SUBSCRIPTION, {
    variables: { boardId },
  });

  const [insertLabel] = useMutation(INSERT_LABEL_MUTATION);
  const [insertCardLabel] = useMutation(INSERT_CARD_LABEL_MUTATION);

  console.log(insertLabel);

  if (fetchLabelsLoading) {
    return <Loader />;
  }

  if (fetchLabelsError) {
    return (
      <Alert status="error" variant="left-accent">
        <AlertIcon />
        There was an error processing your request. Please try again!
      </Alert>
    );
  }

  const handleAddLabelToCard = (labels: any) => {
    const defaultSelectedLabels = selectedLabels.map(
      (label: any) => label.label.id
    );
    const labelsToBeInserted: any[] = xor(labels, defaultSelectedLabels);

    labelsToBeInserted.map(async (label: any) => {
      const selectedLabel = find(fetchLabelsData.board_by_pk.labels, {
        id: label,
      });

      await insertCardLabel({
        variables: {
          cardId: currentCardId,
          labelId: selectedLabel.id,
        },
      });
    });
  };
  return (
    <Menu closeOnSelect={false}>
      <MenuButton
        as={Button}
        w="full"
        justifyContent="flex-start"
        color={color[colorMode]}
        borderColor={borderColor[colorMode]}
      >
        <Stack alignItems="center" isInline spacing={2}>
          <Box>
            <Icon name="star" ml={-1} />
          </Box>
          <Box>Labels</Box>
        </Stack>
      </MenuButton>
      <MenuList
        placement="bottom-end"
        color={color[colorMode]}
        borderColor={borderColor[colorMode]}
      >
        <MenuOptionGroup
          title="Existing"
          type="checkbox"
          defaultValue={selectedLabels.map((label: any) => label.label.id)}
          onChange={(values: any) => handleAddLabelToCard(values)}
        >
          {fetchLabelsData.board_by_pk.labels.map((label: any) => {
            return (
              <MenuItemOption key={label.id} value={label.id}>
                <Stack alignItems="center" isInline spacing={4}>
                  <Box bg={label.color} w={4} h={4} rounded="md" />
                  <span>{label.name}</span>
                </Stack>
              </MenuItemOption>
            );
          })}
        </MenuOptionGroup>
        <MenuOptionGroup title="Create" type="checkbox">
          <MenuItemOption value="new">Add new</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default LabelsMenu;
