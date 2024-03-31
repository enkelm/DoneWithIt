import { ReactNode } from "react"
import { SafeAreaView as NativeSafeAreaView, StyleSheet, Platform, StatusBar } from "react-native"
import type { StyleProp, ViewStyle } from "react-native"

type Props = { children: ReactNode; style?: StyleProp<ViewStyle> }

const SafeAreaView = ({ style, children }: Props) => (
  <NativeSafeAreaView style={[styles.safeArea, style]}>{children}</NativeSafeAreaView>
)

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
})

export default SafeAreaView
