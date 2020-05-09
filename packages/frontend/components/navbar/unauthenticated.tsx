import React from "react";
import {
  Box,
  Link as _Link,
  Button,
  Stack,
  useColorMode,
} from "@chakra-ui/core";
import { NextComponentType } from "next";
import Link from "next/link";

const Navbar: NextComponentType = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const borderColor = { light: "gray.300", dark: "gray.700" };
  const color = { light: "gray.800", dark: "gray.100" };

  return (
    <Box bg={bgColor[colorMode]}>
      <Box
        w="full"
        mx="auto"
        d="flex"
        justifyContent="space-between"
        p={4}
        color={color[colorMode]}
        borderWidth={1}
        borderColor={borderColor[colorMode]}
      >
        <Stack
          isInline
          spacing={4}
          align="center"
          justifyContent="space-between"
          w="full"
        >
          <Box>
            <Stack isInline spacing={4} align="center">
              <Box>
                <Link href="/">
                  <_Link>Home</_Link>
                </Link>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Stack isInline spacing={4} align="center">
              <Box>
                <Link href="/sign-in">
                  <_Link>Sign In</_Link>
                </Link>
              </Box>
              <Box>
                <Link href="/sign-up">
                  <Button variantColor="cyan">Sign Up</Button>
                </Link>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
