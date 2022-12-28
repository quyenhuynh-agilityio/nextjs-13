"use client";

import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const Cart = ({ cartCount }: { cartCount: number }) => {
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
        right="-4"
        color="white"
        top="15"
        border="1px"
        w={5}
        h={5}
        borderRadius={50}
        backgroundColor="red.600"
        textAlign="center"
      >
        {cartCount}
      </Box>
    </Flex>
  );
};

export default Cart;
