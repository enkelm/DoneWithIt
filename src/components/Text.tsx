import { Text as NativeText, StyleProp, TextProps as NativeTextProps, TextStyle } from "react-native"
import { colors, Colors, globalStyles } from "../config"

export type TextProps = NativeTextProps & {
  style?: StyleProp<TextStyle>
  color?: Colors
}

const Text = ({ style, color, children, ...props }: TextProps) => {
  const colorStyle = color ? { color: colors[color] } : null
  return (
    <NativeText style={[style, globalStyles.text, colorStyle]} {...props}>
      {children}
    </NativeText>
  )
}

export default Text
