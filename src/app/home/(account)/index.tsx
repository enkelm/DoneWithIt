import { FlatList, StyleSheet } from "react-native"
import { AllRoutes, Href, useRouter } from "expo-router"

import { ListItem, ListItemSeparator, SafeAreaView, IconNames } from "../../../components"

import { colors } from "../../../config"
import type { Colors } from "../../../config"

type MenuItem = {
  title: string
  icon: { name: IconNames; background: Colors }
  href: Href<AllRoutes>
}

const menuItems: MenuItem[] = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      background: "primary",
    },
    href: "/home/(account)/messages",
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      background: "secondary",
    },
    href: "/home/(account)/messages",
  },
]

const AccountScreen = () => {
  const router = useRouter()

  return (
    <SafeAreaView style={styles.screen}>
      <ListItem
        style={styles.container}
        title="Irene Rios"
        subTitle="huw@erhubu.er"
        image={{ source: require("../../../../assets/icon.png") }}
      />
      <FlatList
        style={styles.container}
        data={menuItems}
        keyExtractor={(item) => item.title}
        renderItem={({
          item: {
            title,
            icon: { name, background },
            href,
          },
        }) => <ListItem title={title} image={{ name, background }} onPress={() => router.push(href)} />}
        ItemSeparatorComponent={ListItemSeparator}
      />
      <ListItem style={styles.container} title="Log Out" image={{ name: "logout", background: "warn" }} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: { backgroundColor: colors.light },
  container: { marginVertical: 20, backgroundColor: colors.white },
})

export default AccountScreen
