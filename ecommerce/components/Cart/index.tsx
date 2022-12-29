"use client";

// Libraries
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

// Types
import { ProductType } from "@/types/index";

type PropsTypes = {
  cartCount?: ProductType[];
};

const Cart = ({ cartCount }: PropsTypes) => {
  return (
    <Flex alignItems="center" pos="relative">
      <Image
        src="/images/shopping-cart.svg"
        alt="cart"
        width={30}
        height={30}
      />
      <Box
        fontFamily="base"
        fontSize="3xs"
        pos="absolute"
        right="-6"
        color="white"
        top="10px"
        border="1px"
        w={7}
        h={7}
        borderRadius={50}
        backgroundColor="red.600"
        textAlign="center"
        pt={1}
      >
        {cartCount?.length}
      </Box>
    </Flex>
  );
};

export default Cart;
