import React, { FC } from "react";
import { Box, Button, Link as _Link, Stack, Heading } from "@chakra-ui/core";
import LabelsMenu from "components/pages/cards/show/labels-menu";

interface Props {
  selectedLabels: any;
  boardId: number;
}

const Settings: FC<Props> = ({ selectedLabels, boardId }) => {
  return (
    <Stack spacing={4}>
      <Box>
        <Heading as="h5" size="sm">
          Settings
        </Heading>
      </Box>
      <Box>
        <Button
          variant="solid"
          w="full"
          leftIcon="email"
          justifyContent="flex-start"
        >
          Members
        </Button>
      </Box>
      <Box>
        <LabelsMenu selectedLabels={selectedLabels} boardId={boardId} />
      </Box>
      <Box>
        <Button
          variant="solid"
          w="full"
          leftIcon="email"
          justifyContent="flex-start"
        >
          Due date
        </Button>
      </Box>
    </Stack>
  );
};

export default Settings;
