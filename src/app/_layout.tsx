import { Platform } from "react-native"
import { Slot, Stack } from "expo-router"
import { StatusBar } from "expo-status-bar"

const RootLayout = () => {
  return (
    <>
      <StatusBar style="auto" />
      {Platform.OS === "ios" ? (
        <Stack screenOptions={{ headerShown: false, contentStyle: {} }}>
          <Stack.Screen name="login/index" options={{ headerShown: true }} />
        </Stack>
      ) : (
        <Slot />
      )}
    </>
  )
}

export default RootLayout
