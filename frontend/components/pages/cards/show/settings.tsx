import React, { FC } from "react";
import { Box, Button, Link as _Link, Stack, Heading } from "@chakra-ui/react";

const Settings: FC = () => {
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
