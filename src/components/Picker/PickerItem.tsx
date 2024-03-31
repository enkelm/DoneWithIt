import { GestureResponderEvent, TouchableOpacity, StyleSheet } from "react-native"

import Text from "../Text"
import Icon, { IconProps } from "../Icon"

export type PickerItemType<T = unknown> = {
  label: string
  value: T
  iconProps?: IconProps
}

export type PickerItemProps = {
  item: PickerItemType
  onPress: (event: GestureResponderEvent) => void
}

const PickerItem = ({ item, onPress }: PickerItemProps) => {
  return item?.iconProps ? (
    <TouchableOpacity style={{ alignItems: "center", padding: 10 }} onPress={onPress}>
      <Icon {...item.iconProps} />
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{item.label}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20,
  },
})

export default PickerItem
