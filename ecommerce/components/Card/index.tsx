// Libraries
import Image from "next/image";
import Link from "next/link";
import { useCallback } from "react";

// Components
import { Box, Text, Flex, Button } from "@chakra-ui/react";

// Types
import { ProductType } from "@/types/index";

// Utils
import { blurDataURL } from "@/utils/utilities";

type Props = {
  item: ProductType;
  bgColor?: string;
  textColor?: string;
  onConfirm?: (id: string) => void;
};

const Card = ({ item, bgColor, textColor, onConfirm = () => {} }: Props) => {
  const { image, name, price, id } = item || {};
  const { src, alt, width, height } = image || {};

  const handleConfirm = useCallback(() => {
    return onConfirm(id);
  }, [id, onConfirm]);

  return (
    <Box
      borderRadius={2}
      border="1px solid primary.100"
      boxShadow="base"
      w={{ sm: 300, md: 330 }}
      h={450}
      bgColor={bgColor}
    >
      <Box
        w={{ sm: 300, md: 330 }}
        h={{ sm: 300, md: 330 }}
        _hover={{ opacity: "0.8" }}
      >
        <Link href={`/product/${id}`}>
          <Image
            src={src}
            width={width}
            height={height}
            alt={alt || ""}
            placeholder="blur"
            blurDataURL={blurDataURL(width, height)}
          />
        </Link>
      </Box>
      <Flex justifyContent="space-between" m={5}>
        <Text fontFamily="base" color={textColor} fontSize="base">
          {name}
        </Text>
        <Text
          fontFamily="base"
          fontSize="base"
          color={textColor}
        >{`$ ${price}`}</Text>
      </Flex>
      <Flex justifyContent="right" mr={5} mb={5}>
        <Button
          fontSize="base"
          fontFamily="base"
          variant="primary"
          size={{ sm: "md" }}
          onClick={handleConfirm}
        >
          Delete
        </Button>
      </Flex>
    </Box>
  );
};

export default Card;
