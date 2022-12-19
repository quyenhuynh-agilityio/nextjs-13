"use client";

// Libraries
import Image from "next/image";

// Components
import { Box } from "@chakra-ui/react";

// Utilities
import { blurDataURL } from "@/utils/utilities";

const Introduction = () => {
  return (
    <Box w="100%" h={{ sm: 600, md: 665 }} pos="relative">
      <Image
        alt="introduce-image"
        src="/images/bg-image.png"
        fill
        style={{
          objectFit: "cover",
        }}
        sizes="(min-width: 480px) 100vw, 600px, (min-width: 768px) 100vw, 665px"
        placeholder="blur"
        blurDataURL={blurDataURL()}
      />
    </Box>
  );
};

export default Introduction;
