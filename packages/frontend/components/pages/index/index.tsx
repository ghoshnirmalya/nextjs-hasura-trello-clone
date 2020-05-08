import React from "react";
import { Box, Grid, useColorMode } from "@chakra-ui/core";

const Index = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const borderColor = { light: "gray.300", dark: "gray.700" };
  const color = { light: "gray.900", dark: "gray.100" };

  return (
    <Grid templateColumns="repeat(1, 1fr)" maxW="xl">
      <Box
        p={8}
        rounded="md"
        borderWidth={1}
        bg={bgColor[colorMode]}
        borderColor={borderColor[colorMode]}
        color={color[colorMode]}
      >
        Hello World!
      </Box>
    </Grid>
  );
};

export default Index;
