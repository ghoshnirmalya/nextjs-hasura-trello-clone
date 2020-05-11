import React, { FC } from "react";
import { Link as _Link, AvatarGroup, Avatar } from "@chakra-ui/core";

type Labels = {
  label: {
    id: number;
    color: string;
    name: string;
  };
};

interface Props {
  labels: Labels[];
}

const Labels: FC<Props> = ({ labels }) => {
  if (!labels.length) return null;

  return (
    <AvatarGroup size="md" max={5}>
      {labels.map((label: any) => {
        return (
          <Avatar
            key={label.label.id}
            bg={label.label.color}
            name={label.label.name}
          />
        );
      })}
    </AvatarGroup>
  );
};

export default Labels;
