import React from "react";
import { Box, Grid, Link as _Link, Heading, Text } from "@chakra-ui/core";
import { NextPage } from "next";
import gql from "graphql-tag";
import { useQuery } from "react-apollo";
import Loader from "components/loader";
import { useRouter } from "next/router";

const FETCH_BOARD_QUERY = gql`
  query fetchBoard($id: uuid!) {
    board_by_pk(id: $id) {
      id
      name
    }
  }
`;

const Board: NextPage = () => {
  const router = useRouter();
  const { data, loading, error } = useQuery(FETCH_BOARD_QUERY, {
    variables: { id: router.query.boardId },
    fetchPolicy: "network-only",
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const { id, name } = data.board_by_pk;

  return (
    <Grid templateColumns="repeat(3, 1fr)" gap={4}>
      <Box key={id} p={8} bg="white" rounded="md" borderWidth={1}>
        <Heading as="h4" size="md">
          {name}
        </Heading>
        <Text fontSize="sm" color="gray.700">
          {id}
        </Text>
      </Box>
    </Grid>
  );
};

export default Board;
