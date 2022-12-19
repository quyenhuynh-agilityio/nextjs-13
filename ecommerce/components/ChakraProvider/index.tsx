"use client";

// Libraries
import React from "react";

// Components
import { ChakraProvider as ChakraUIProvider, Box } from "@chakra-ui/react";

// Themes
import theme from "@/theme/index";

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return (
    <ChakraUIProvider theme={theme}>
      <Box id="root">{children}</Box>
    </ChakraUIProvider>
  );
}
