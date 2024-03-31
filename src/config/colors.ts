import { ObjStringValues } from "../util"

const colors = {
  primary: "#fc5c65",
  secondary: "#4ecdc4",
  black: "#000",
  white: "#fff",
  light: "#f8f4f4",
  medium: "#6e6969",
  dark: "#0c0c0c",
  warn: "#ffe66d",
  danger: "#ff5252",
} as const

export type Colors = keyof typeof colors
export type ColorsHex = ObjStringValues<typeof colors>

export const colorHexToKey = (arg: ColorsHex): Colors =>
  (Object.keys(colors) as Colors[]).find((c) => colors[c] === arg)!

export default colors
