"use client";

// Libraries
import React from "react";

// Components
import { Center, Box } from "@chakra-ui/react";
import Link from "next/link";
import ROUTES from "@/constants/router";

// The not-found file is used to render UI when the notFound function is thrown within a route segment
const NotFound = () => {
  return (
    <Center flexDirection="column">
      <Box fontFamily="base" fontSize="base" py={10}>
        Whoops we could not find the products you are looking for!
      </Box>
      <Center
        p={3}
        borderRadius={4}
        borderColor="primary.main"
        border="1px solid"
        w={150}
        fontFamily="base"
        fontSize="base"
        mb={30}
        _hover={{ opacity: "0.8" }}
      >
        <Link href={ROUTES.HOME_PAGE}>Back to Home</Link>
      </Center>
    </Center>
  );
};

export default NotFound;
