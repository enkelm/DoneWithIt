import { StyleSheet, Pressable, type PressableProps, View } from "react-native"

import Text from "./Text"

import { colors, Colors } from "../config"
import { forwardRef } from "react"

type Props = Omit<PressableProps, "style" | "ref"> & {
  color?: Colors
  title: string
}

const Button = forwardRef<View, Props>(({ color = "primary", title, ...props }: Props, ref) => {
  return (
    <Pressable
      {...props}
      ref={ref}
      style={({ pressed }) => [styles.button, { backgroundColor: pressed ? colors.light : colors[color] }]}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
})

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
})

export default Button
