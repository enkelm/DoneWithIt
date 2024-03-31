import { Tabs } from "expo-router"
import { Icon, IconNames } from "../../components"
import { colorHexToKey, colors, ColorsHex } from "../../config"
import { NewListingButton } from "../../components/"

const tabBarIcon =
  (icon: IconNames) =>
  ({ color }: { color: string }) =>
    <Icon name={icon} iconColor={colorHexToKey(color as ColorsHex)} />

const HomeLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.medium,
        tabBarLabelStyle: { bottom: 10 },
        tabBarStyle: { height: 70 },
      }}
    >
      <Tabs.Screen
        name="(feed)"
        options={{
          title: "Feed",
          tabBarIcon: tabBarIcon("newspaper"),
        }}
      />
      <Tabs.Screen
        name="new"
        options={{
          title: "New Listing",
          tabBarButton: NewListingButton,
          // tabBarIcon: tabBarIcon("plus"),
        }}
      />
      <Tabs.Screen
        name="(account)"
        options={{
          title: "Account",
          tabBarIcon: tabBarIcon("account"),
        }}
      />
    </Tabs>
  )
}

export default HomeLayout
