import { widthConfig } from "./components/widthConfig/widthConfig"
import { heightConfig } from "./components/heightConfig/heightConfig"
import { paddingConfig } from "./components/paddingConfig/paddingConfig"
import { fontConfig } from "./components/fontConfig/fontConfig"
import { colorsConfig } from "./components/colorsConfig/colorsConfig"

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