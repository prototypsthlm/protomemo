import "@fontsource/yanone-kaffeesatz";
import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    body: "Yanone Kaffeesatz",
    heading: "Yanone Kaffeesatz",
  },
  styles: {
    global: {
      body: {
        color: "gray.700",
        bgColor: "gray.100",
      },
    },
  },
});
