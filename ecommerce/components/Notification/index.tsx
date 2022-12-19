"use client";

// Components
import { Center, Text } from "@chakra-ui/react";

type PropType = {
  label?: string;
};

const Notification = ({ label }: PropType) => {
  return (
    <Center>
      <Text fontSize="base" fontFamily="base" color="primary.main">
        {label}
      </Text>
    </Center>
  );
};

export default Notification;
