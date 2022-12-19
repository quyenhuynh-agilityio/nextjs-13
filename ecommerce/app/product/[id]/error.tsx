// Error boundaries must be Client Components.

"use client";
// Components
import { Text, Button, Center, Box } from "@chakra-ui/react";

type PropsType = {
  error?: Error;
  reset?: () => void;
};

export default function Error({ error, reset }: PropsType) {
  return (
    <Center>
      <Box py={10}>
        <Text fontFamily="base" fontSize="base" color="primary.main" pb={5}>
          Error: {error?.message}
        </Text>
        <Button
          fontSize="base"
          fontFamily="base"
          w={200}
          variant="primary"
          mr={5}
          onClick={reset}
        >
          Reset error boundary
        </Button>
      </Box>
    </Center>
  );
}
