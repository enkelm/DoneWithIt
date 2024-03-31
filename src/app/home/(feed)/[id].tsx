import { Image, StyleSheet, View } from "react-native"

import { ListItem, Text } from "../../../components"
import { colors } from "../../../config"
import { useLocalSearchParams } from "expo-router"
import { initialListings } from "."

const ListingDetailsScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>()

  const { image, title, price } = initialListings.find((l) => l.id === parseInt(id))!

  return (
    <View>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price}</Text>
      </View>
      <ListItem
        style={{ marginVertical: 40 }}
        title="test"
        subTitle="test"
        image={{ source: require("../../../../assets/icon.png") }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: { width: "100%", height: 300 },
  detailsContainer: { padding: 20 },
  title: { fontSize: 24, fontWeight: "500" },
  price: { color: colors.secondary, fontSize: 20, fontWeight: "500", marginVertical: 10 },
})

export default ListingDetailsScreen
