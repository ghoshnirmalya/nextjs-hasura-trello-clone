import React, { FC } from "react";
import { Link as _Link, AvatarGroup, Avatar } from "@chakra-ui/core";

type Labels = {
  id: number;
  color: string;
  name: string;
};

interface Props {
  labels: Labels[];
}

const Labels: FC<Props> = ({ labels }) => {
  return (
    <AvatarGroup size="md" max={5}>
      {labels.map((label: any) => {
        return <Avatar key={label.id} bg={label.color} name={label.name} />;
      })}
    </AvatarGroup>
  );
};

export default Labels;
