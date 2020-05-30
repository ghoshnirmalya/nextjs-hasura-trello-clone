import React from "react";
import {
  Box,
  Stack,
  Link as _Link,
  Heading,
  Text,
  useColorMode,
  Avatar,
} from "@chakra-ui/core";
import { NextPage } from "next";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import Loader from "components/loader";

const FETCH_USER_QUERY = gql`
  query fetchUser {
    user(order_by: { created_at: asc }) {
      id
      email
      first_name
      last_name
    }
  }
`;

const Users: NextPage = () => {
  const { colorMode } = useColorMode();
  const bgColor = { light: "white", dark: "gray.800" };
  const borderColor = { light: "gray.300", dark: "gray.700" };
  const color = { light: "gray.900", dark: "gray.100" };
  const { data, loading, error } = useQuery(FETCH_USER_QUERY);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const headingNode = () => {
    return (
      <Box d="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Heading as="h2" size="lg" fontWeight="bold" color={color[colorMode]}>
            Users
          </Heading>
        </Box>
      </Box>
    );
  };

  return (
    <Stack spacing={8}>
      {headingNode()}
      <Stack spacing={8}>
        {data.user.map(
          (user: {
            id: number;
            first_name: string;
            last_name: string;
            email: string;
          }) => {
            return (
              <Box
                key={user.id}
                p={8}
                rounded="md"
                borderWidth={1}
                bg={bgColor[colorMode]}
                borderColor={borderColor[colorMode]}
                color={color[colorMode]}
              >
                <Stack spacing={8} isInline>
                  <Box>
                    <Avatar name={user.email} />
                  </Box>
                  <Box>
                    <Stack>
                      <Box>
                        <Heading as="h4" size="md">
                          {!!user.email
                            ? user.email
                            : `${user.first_name} ${user.last_name}`}
                        </Heading>
                      </Box>
                      <Box>
                        <Text fontSize="sm">{user.id}</Text>
                      </Box>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            );
          }
        )}
      </Stack>
    </Stack>
  );
};

export default Users;
