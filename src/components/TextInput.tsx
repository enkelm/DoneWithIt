import { View, TextInput as NativeTextInput, StyleSheet } from "react-native"
import type { TextInputProps as NativeTextInputProps } from "react-native"

import Icon, { IconNames } from "./Icon"
import { globalStyles, colors } from "../config"
import { IntRange } from "../util"

export type TextInputProps = NativeTextInputProps & {
  icon?: IconNames
  width?: IntRange<0, 100>
}

const TextInput = ({ icon, width, ...props }: TextInputProps) => (
  <View style={[styles.container, width ? { width: `${width}%` } : null]}>
    {icon && <Icon style={styles.icon} name={icon} size={40} iconColor="medium" />}
    <NativeTextInput style={styles.textInput} {...props} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: colors.dark,
    ...globalStyles.text,
  },
})

export default TextInput
