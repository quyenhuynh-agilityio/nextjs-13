"use client";

// Components
import { Box, Container, Heading, Flex } from "@chakra-ui/react";
import Image from "next/image";

// Utilities
import { blurDataURL } from "@/utils/utilities";
import Cart from "../Cart";
import { useContext } from "react";
import { CartContext } from "contexts/CartContext";

const Header = () => {
  const { cartCount } = useContext(CartContext);

  return (
    <Container as="header" maxW="100%" p={0} m={0}>
      <Box w="100%" h={{ sm: "460px", md: "700px" }} pos="relative">
        <Image
          alt="background-image"
          src="/images/hero-image.png"
          fill
          sizes="(min-width: 480px) 100vw, 460px, (min-width: 768px) 100vw, 700px"
          style={{
            objectFit: "cover",
          }}
          placeholder="blur"
          blurDataURL={blurDataURL()}
        />
      </Box>
      <Flex
        position="absolute"
        top={30}
        px={{ sm: "30", md: "50" }}
        w="100%"
        justifyContent="space-between"
      >
        <Heading as="h1">
          <Box w={100} h={20} pos="relative">
            <Image
              alt="background-image"
              src="/images/small-logo.svg"
              fill
              sizes="100px 20px"
              placeholder="blur"
              blurDataURL={blurDataURL()}
            />
          </Box>
        </Heading>
        <Cart cartCount={cartCount} />
      </Flex>
    </Container>
  );
};

export default Header;
