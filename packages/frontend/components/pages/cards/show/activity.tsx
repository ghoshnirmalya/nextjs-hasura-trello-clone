import React, { FC } from "react";
import { Box, Link as _Link, Stack, Avatar, Text } from "@chakra-ui/core";
import dayjs from "dayjs";

interface Props {
  comment: {
    id: number;
    author: {
      email: string;
    };
    updated_at: string;
    body: string;
  };
}

const Activity: FC<Props> = ({ comment }) => {
  return (
    <Stack spacing={2}>
      <Box>
        <Stack isInline spacing={4} alignItems="center">
          <Box>
            <Avatar size="sm" name={comment.author.email} />
          </Box>
          <Box>
            <Text fontSize="md" fontWeight="bold">
              {comment.author.email}
            </Text>
          </Box>
          <Box>
            <Text fontSize="sm" m={0}>
              {dayjs(comment.updated_at).format("HH:mm, DD MMM, YYYY")}
            </Text>
          </Box>
        </Stack>
      </Box>
      <Box w="full">
        <Text fontSize="md">{comment.body}</Text>
      </Box>
    </Stack>
  );
};

export default Activity;
