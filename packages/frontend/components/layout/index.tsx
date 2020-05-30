import React, { FC } from "react";
import { ColorModeProvider, Box } from "@chakra-ui/core";
import { useQuery } from "react-apollo";
import withApollo from "lib/with-apollo";
import gql from "graphql-tag";
import { cookieParser } from "lib/cookie";
import { setItem } from "lib/local-storage";
import Container from "components/layout/container";

const FETCH_USER_QUERY = gql`
  query fetchUser($id: uuid!) {
    user_by_pk(id: $id) {
      id
      theme
    }
  }
`;

const AuthenticatedLayout: FC = ({ children }) => {
  const currentUserId = cookieParser("user-id");

  const {
    data: userData,
    loading: userDataloading,
    error: userDataError,
  } = useQuery(FETCH_USER_QUERY, {
    variables: { id: currentUserId },
    fetchPolicy: "network-only",
  });

  if (userDataloading) {
    return (
      <Box
        h="100vh"
        w="100vw"
        d="flex"
        justifyContent="center"
        alignItems="center"
      />
    );
  }

  if (userDataError) {
    return <p>Error: {userDataError.message}</p>;
  }

  const { theme } = userData.user_by_pk;

  setItem("darkMode", theme === "dark" ? "true" : "false");

  return (
    <ColorModeProvider>
      <Container>{children}</Container>
    </ColorModeProvider>
  );
};

export default withApollo(AuthenticatedLayout);
