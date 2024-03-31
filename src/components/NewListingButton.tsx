import { View, StyleSheet, Pressable, GestureResponderEvent } from "react-native"
import { colors } from "../config"
import Icon from "./Icon"

type Props = {
  onPress?: (event: GestureResponderEvent) => void
}

const NewListingButton = ({ onPress }: Props) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Icon name="plus" iconColor="primary" size={30} background="white" />
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    width: 80,
    backgroundColor: colors.primary,
    bottom: 20,
    borderWidth: 10,
    borderRadius: 40,
    borderColor: colors.white,
  },
})

export default NewListingButton
