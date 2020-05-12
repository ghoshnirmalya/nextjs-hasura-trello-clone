import React, { FC } from "react";
import { Box, useColorMode } from "@chakra-ui/core";
import { useQuery } from "react-apollo";
import withApollo from "lib/with-apollo";
import gql from "graphql-tag";
import { cookieParser } from "lib/cookie";
import { setItem } from "lib/local-storage";

const FETCH_USER_QUERY = gql`
  query fetchUser($id: uuid!) {
    user_by_pk(id: $id) {
      id
      theme
    }
  }
`;

const Layout: FC = ({ children }) => {
  const currentUserId = cookieParser("user-id");
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.100", dark: "gray.900" };

  const {
    data: userData,
    loading: userDataloading,
    error: userDataError,
  } = useQuery(FETCH_USER_QUERY, {
    variables: { id: currentUserId },
    fetchPolicy: "network-only",
  });

  if (userDataloading) {
    return <Box />;
  }

  if (userDataError) {
    return <p>Error: {userDataError.message}</p>;
  }

  const { theme } = userData.user_by_pk;

  setItem("darkMode", theme === "dark" ? "true" : "false");

  return (
    <Box fontSize="sm" bg={bgColor[colorMode]}>
      {children}
    </Box>
  );
};

export default withApollo(Layout);
