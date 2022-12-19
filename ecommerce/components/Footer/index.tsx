"use client";

// Libraries

import Link from "next/link";
import Image from "next/image";

// Components
import {
  Box,
  Container,
  Text,
  List,
  ListItem,
  SimpleGrid,
  Flex,
} from "@chakra-ui/react";

// Constants
import { footerData } from "@/constants/mockData";

// Utilities
import { blurDataURL } from "@/utils/utilities";

const Footer = () => {
  return (
    <Container
      as="footer"
      role="contentinfo"
      backgroundColor="primary.main"
      maxW="100%"
      p={0}
      m={0}
    >
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <SimpleGrid columns={{ sm: 2, md: 4 }} w="100%">
          <List
            justifyContent="space-between"
            w="100%"
            borderRight="1px solid white"
            py={5}
            borderBottom="1px solid white"
          >
            {footerData.map((item) => (
              <ListItem
                fontFamily="base"
                fontSize="base"
                key={item}
                px={15}
                pb={3}
                color="textColor.100"
              >
                <Link href="/">{item}</Link>
              </ListItem>
            ))}
          </List>
          <List
            justifyContent="space-between"
            w="100%"
            borderRight="1px solid white"
            py={5}
            borderBottom="1px solid white"
          >
            {footerData.map((item) => (
              <ListItem
                fontFamily="base"
                fontSize="base"
                key={item}
                px={15}
                pb={3}
                color="textColor.100"
              >
                <Link href="/">{item}</Link>
              </ListItem>
            ))}
          </List>
          <List
            justifyContent="space-between"
            w="100%"
            borderRight="1px solid white"
            py={5}
            borderBottom="1px solid white"
          >
            {footerData.map((item) => (
              <ListItem
                fontFamily="base"
                fontSize="base"
                key={item}
                px={15}
                pb={3}
                color="textColor.100"
              >
                <Link href="/">{item}</Link>
              </ListItem>
            ))}
          </List>
          <List
            justifyContent="space-between"
            w="100%"
            py={5}
            borderBottom="1px solid white"
          >
            {footerData.map((item) => (
              <ListItem key={item} px={15} pb={3} color="white">
                <Link href="/">{item}</Link>
              </ListItem>
            ))}
          </List>
        </SimpleGrid>
        <Box
          my={{ sm: 50, md: 100 }}
          w={{ sm: 300, md: 1340 }}
          h={{ sm: 55, md: 220 }}
          position="relative"
        >
          <Image
            alt="background-image"
            src="/images/big-logo.svg"
            fill
            sizes="(min-width: 480px) 300px, 55px, (min-width: 768px) 1340px, 220px"
            placeholder="blur"
            blurDataURL={blurDataURL()}
          />
        </Box>
        <Text
          fontFamily="base"
          color="textColor.100"
          fontSize="base"
          mb={20}
          py={3}
          borderTop="1px solid white"
          borderBottom="1px solid white"
          w="100%"
          textAlign="center"
        >
          &#169; ARUSA 2022 | AGATHA SAKOWICZ
        </Text>
      </Flex>
    </Container>
  );
};
export default Footer;
