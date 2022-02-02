import { extendTheme, withDefaultSize } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
import colors from "./colors";
import font from "./font";
import breakpoints from "./breakpoints";

const theme = extendTheme({
  fonts: font.family,
  colors,
  breakpoints: createBreakpoints(breakpoints),

  styles: {
    global: {
      "*": {
        scrollBehavior: "smooth",
      },

      "*::-webkit-scrollbar": {
        width: "6px",
        height: "6px",
      },
      "*::-webkit-scrollbar-thumb": {
        backgroundColor: "primary.base",
      },
      "*::-webkit-scrollbar-track": {
        backgroundColor: "primary.light",
      },
    },
  },
});

export default theme;
