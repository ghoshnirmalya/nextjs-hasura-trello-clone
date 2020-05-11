import React, { FC } from "react";
import { Box, Button, Link as _Link, Stack, Heading } from "@chakra-ui/core";

const Actions: FC = () => {
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
        >
          Archive
        </Button>
      </Box>
    </Stack>
  );
};

export default Actions;
