import { theme } from "@chakra-ui/core";

const customTheme = {
  ...theme,
  fonts: {
    ...theme.fonts,
    body: "Roboto, sans-serif",
  }  
};

export default customTheme;
