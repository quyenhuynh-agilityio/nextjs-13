"use client";

// Libraries
import Image from "next/image";
import Link from "next/link";

// Components
import { Text, Heading, Box, Stack, Center } from "@chakra-ui/react";

// Utilities
import { blurDataURL } from "@/utils/utilities";

// Constants
import ROUTES from "@/constants/router";

// Types
import { ProductType } from "@/types/index";

type PropsTypes = {
  product: ProductType;
};

const ProductDetail = ({ product }: PropsTypes) => {
  const { image, name, price } = product || {};

  const { src, alt, height, width } = image || {};
  return (
    <Stack
      px={{ sm: 10 }}
      py={{ sm: 30 }}
      justify="center"
      align="center"
      direction="column"
    >
      <Heading
        as="h2"
        fontSize={{ sm: "base", md: "4xl" }}
        fontFamily="base"
        pb={{ sm: 0, md: 10 }}
      >
        Every detail matter
      </Heading>
      <Stack direction={{ sm: "column-reverse", md: "row" }} w={{ md: 1440 }}>
        <Stack
          direction="column"
          w={{ sm: "100%", md: "30%" }}
          pt={{ sm: 20, md: 0 }}
        >
          <Stack direction="row">
            <Box pb={5} fontWeight={600}>
              Product Name:
            </Box>
            <Box fontWeight={400}>{name}</Box>
          </Stack>
          <Stack direction="row">
            <Box pb={5} fontWeight={600}>
              Product Description:
            </Box>
            <Box>Product Description</Box>
          </Stack>
          <Stack direction="row">
            <Box pb={5} fontWeight={600}>
              Product Price:
            </Box>
            <Box>{price}</Box>
          </Stack>
          <Center
            p={3}
            borderRadius={4}
            borderColor="primary.main"
            border="1px solid"
            w={150}
            fontFamily="base"
            fontSize="base"
            _hover={{ opacity: "0.8" }}
          >
            <Link href={ROUTES.HOME_PAGE}>Back to Home</Link>
          </Center>
        </Stack>
        <Stack pb={10} py={{ sm: 10, md: 0 }}>
          <Text fontFamily="base" fontSize="base" pb={{ sm: 5 }}>
            WE ARE SPECIALIZED IN ADORNMENTS, THAT BRING CHARM TO ANY
            ENVIRONMENT.
          </Text>
          <Text w={{ md: 800 }} pb={30}>
            There are multiples of high quality pieces, with styles that
            transition from classic to contemporary. An exclusive selection of
            lampshades, vases, murals, pillows, paintings and many gifts to
            compose great projects. In order selection, a mix of basic style,
            stricter customization and more compact dimensions, composing
            sophisticated and exclusive environments.
          </Text>
          <Box w={{ sm: 300, md: 330 }} h={{ sm: 300, md: 330 }}>
            <Image
              src={src || ""}
              width={width}
              height={height}
              alt={alt || ""}
              placeholder="blur"
              blurDataURL={blurDataURL()}
            />
          </Box>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductDetail;