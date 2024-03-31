import { useState } from "react"
import { FlatList, StyleSheet } from "react-native"

import { Card, SafeAreaView } from "../../../components"
import { colors } from "../../../config"
import { Link } from "expo-router"

export const initialListings = [
  {
    id: 1,
    title: "iMmkIhrJjoU",
    price: 100,
    image: require("../../../../assets/icon.png"),
  },
  {
    id: 2,
    title: "MTZMAPHfiGHjIV",
    price: 200,
    image: require("../../../../assets/icon.png"),
  },
]

const ListingsScreen = () => {
  const [listings, setListings] = useState(initialListings)

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item: { id, title, price, image } }) => (
          <Link href={{ pathname: "/home/(feed)/[id]", params: { id } }} asChild>
            <Card title={title} subTitle={`$${price}`} image={image} />
          </Link>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
})

export default ListingsScreen
