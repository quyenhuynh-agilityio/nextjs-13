"use client";
// Libraries
import Image from "next/image";

// Components
import { Heading, Text, Stack, HStack, Box } from "@chakra-ui/react";

// Utilities
import { blurDataURL } from "@/utils/utilities";

const Information = () => {
  return (
    <Stack mb={30} h={{ sm: 600, md: 665 }} direction="row" spacing={0}>
      <HStack
        w="100%"
        backgroundColor="primary.main"
        color="textColor.100"
        display="flex"
        alignItems="center"
        justifyContent={{ sm: "start", md: "center" }}
        flexDirection="column"
      >
        <Heading
          as="h2"
          py={5}
          fontSize={{ sm: "base", md: "4xl" }}
          textColor="whiteAlpha"
        >
          Native light chair
        </Heading>
        <Text
          w={{ sm: 150, md: 405 }}
          h={{ sm: 200, md: 280 }}
          fontSize={{ sm: "3xs", md: "base" }}
          fontFamily="base"
          textColor="whiteAlpha"
          p={3}
        >
          Refinement Chair with Ripped Seat, made of retro Eucalyptus wood, of
          great resistance, Kiln dried, made with a spike system and painted
          with P.U. (Polyurethane) With its entire structure painted in wood, it
          offers a lot of elegance to your environment and when cleaning is very
          easy, as it is washable and light for movement.
        </Text>
      </HStack>
      <Box w="100%" h={{ sm: "600px", md: "665px" }} pos="relative" m={0}>
        <Image
          alt="information-image"
          src="/images/information.png"
          fill
          style={{
            objectFit: "cover",
          }}
          sizes="(min-width: 480px) 100vw, 600px, (min-width: 768px) 100vw, 665px"
          placeholder="blur"
          blurDataURL={blurDataURL()}
        />
      </Box>
    </Stack>
  );
};

export default Information;
