import React from "react";
import {
  Stack,
  Box,
  Heading,
  useColorMode,
  Image,
  Button,
} from "@chakra-ui/core";
import ErrorImage from "public/images/bug_fixed.svg";
import Link from "next/link";

const ErrorPage = () => {
  const { colorMode } = useColorMode();
  const color = { light: "gray.900", dark: "gray.100" };

  return (
    <Box p={8} color={color[colorMode]} maxW="xl" mx="auto">
      <Stack spacing={8}>
        <Box mx="auto">
          <Image
            src={ErrorImage}
            alt="Error page"
            size="500px"
            objectFit="cover"
          />
        </Box>
        <Heading
          as="h5"
          size="md"
          color={color[colorMode]}
          fontWeight="bold"
          textAlign="center"
        >
          The page that you're looking for doesn't exist
        </Heading>
        <Box mx="auto">
          <Link href="/">
            <Button variantColor="cyan">Go to home</Button>
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default ErrorPage;
