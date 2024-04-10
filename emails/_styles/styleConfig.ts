import { widthConfig } from "./components/widthConfig"
import { heightConfig } from "./components/heightConfig"
import { paddingConfig } from "./components/paddingConfig"
import { fontConfig, colorsConfig } from "./components/fontConfig"

export const styleConfig = {
  theme: {
    extend: {
      width: widthConfig,
      height: heightConfig,
      padding: paddingConfig,
      fontSize: fontConfig,
      colors: colorsConfig,
    }
  }
}