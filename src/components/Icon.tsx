import { View } from "react-native"
import type { StyleProp, TextStyle } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import { colors, Colors } from "../config"

export type IconNames = keyof typeof MaterialCommunityIcons.glyphMap

export const isIconName = (arg: unknown): arg is IconNames =>
  typeof arg === "string" && arg in MaterialCommunityIcons.glyphMap

export type IconProps = {
  style?: StyleProp<TextStyle>
  name: IconNames
  size?: number
  iconColor?: Colors
  background?: Colors
}

export const isIconProps = (arg: unknown): arg is IconProps =>
  arg !== null && typeof arg === "object" && "name" in arg && isIconName(arg.name)

const Icon = ({ style, name, size = 40, background, iconColor = "white" }: IconProps) => {
  return (
    <View
      style={
        background
          ? {
              width: size,
              height: size,
              borderRadius: size * 0.5,
              backgroundColor: colors[background],
              justifyContent: "center",
              alignItems: "center",
            }
          : null
      }
    >
      <MaterialCommunityIcons style={style} name={name} color={colors[iconColor]} size={size * 0.5} />
    </View>
  )
}

export default Icon
