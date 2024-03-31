import { View, StyleSheet, Image, Pressable, GestureResponderEvent } from "react-native"

import Text from "./Text"
import { colors } from "../config"
import { forwardRef } from "react"

type Props = {
  title: string
  subTitle: string
  image: any
  onPress?: (event: GestureResponderEvent) => void
}

const Card = forwardRef<View, Props>(({ title, subTitle, image, onPress }: Props, _ref) => {
  return (
    <Pressable onPress={onPress}>
      <View>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <Text>{title}</Text>
          <Text>{subTitle}</Text>
        </View>
      </View>
    </Pressable>
  )
})

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
})

export default Card
