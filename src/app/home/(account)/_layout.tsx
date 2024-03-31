import { Stack } from "expo-router"
import React from "react"

const AccountLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="messages" options={{ headerShown: true }} />
    </Stack>
  )
}

export default AccountLayout
