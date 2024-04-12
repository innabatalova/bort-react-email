import { widthConfig } from "./components/widthConfig"
import { heightConfig } from "./components/heightConfig"
import { paddingConfig } from "./components/paddingConfig"
import { fontConfig } from "./components/fontConfig"
import { colorsConfig } from "./components/colorsConfig"

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