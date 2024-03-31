import { Platform, StyleSheet, TextStyle, ViewStyle } from "react-native"

type StyleSchema = {
  text: TextStyle
}

type GlobalStyles = StyleSheet.NamedStyles<StyleSchema>

export default StyleSheet.create<GlobalStyles>({
  ...{
    text: { fontSize: 18 },
  },
  ...Platform.select<StyleSchema>({
    ios: {
      text: {
        fontFamily: "Avenir",
      },
    },
    android: {
      text: {
        fontFamily: "Roboto",
      },
    },
  })!,
})
