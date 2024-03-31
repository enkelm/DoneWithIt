import { View, StyleSheet } from "react-native"
import { colors } from "../../config"

const ListItemSeparator = () => {
  return <View style={styles.test}></View>
}

const styles = StyleSheet.create({
  test: { width: "100%", height: 1, backgroundColor: colors.light },
})

export default ListItemSeparator
