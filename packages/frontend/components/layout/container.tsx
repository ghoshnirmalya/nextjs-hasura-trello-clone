import React, { FC } from "react";
import { Box, useColorMode } from "@chakra-ui/core";

const Container: FC = ({ children }) => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.100", dark: "gray.900" };

  return (
    <Box fontSize="sm" bg={bgColor[colorMode]}>
      {children}
    </Box>
  );
};

export default Container;
