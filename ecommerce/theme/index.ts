import { Bitter } from "@next/font/google";

//  Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";

import { colors } from "./colors";
import { fontSizes } from "./typography";
import { borderRadius } from "./metrics";
import { Input } from "./components/input";
import { Button } from "./components/button";
import { Heading } from "./components/heading";
import { pxToRem } from "./utils";

const bitter = Bitter({ subsets: ["latin"] });

const breakpoints = {
  sm: pxToRem(320), // 320px
  md: pxToRem(768), // 768px
};

const themes = extendTheme({
  components: {
    Input,
    Button,
    Heading,
  },
  breakpoints,
  colors,
  fonts: {
    heading: bitter.style.fontFamily,
    base: bitter.style.fontFamily,
  },
  fontSizes,
  borderRadius,
});

export default themes;
