import { layerStyles } from "./tlStyles/layerStyles";
import { textStyles } from "./tlStyles/textStyles";
import { styles } from "./styles";
import { colors } from "./foundations/colors";
import { fonts } from "./foundations/fonts";

export const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

export const overrides = {
  config,
  fonts,
  colors,
  styles,
  textStyles,
  layerStyles,
};
