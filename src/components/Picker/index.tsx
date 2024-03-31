import { FC, useState } from "react"
import {
  View,
  StyleSheet,
  Modal,
  FlatList,
  GestureResponderEvent,
  TouchableWithoutFeedback,
  NativeSyntheticEvent,
  TargetedEvent,
} from "react-native"

import { globalStyles, colors } from "../../config"

import PickerItem, { PickerItemType, PickerItemProps } from "./PickerItem"
import Icon, { IconNames } from "../Icon"
import SafeAreaView from "../SafeAreaView"
import Button from "../Button"
import Text, { TextProps } from "../Text"
import { IntRange } from "../../util"

export type PickerType = "simple" | "icon-grid" | "icon-list"

type Props<T = unknown> = {
  labelWidth?: IntRange<0, 100>
  icon?: IconNames
  placeholder: string
  numberOdColumns?: number
  items: PickerItemType<T>[]
  value: T | null
  PickerItemComponent?: FC<PickerItemProps>
  onSelectItem: (value: T, event: GestureResponderEvent) => void
  onBlur?: (e: NativeSyntheticEvent<TargetedEvent>) => void
}

const Picker = <T,>({
  labelWidth,
  icon = "apps",
  placeholder,
  numberOdColumns = 1,
  items,
  value,
  PickerItemComponent = PickerItem,
  onSelectItem,
  onBlur,
}: Props<T>) => {
  const [selecting, setSelecting] = useState(false)

  const selectedItem = items.find((i) => i.value === value)

  const label = selectedItem ? (
    <Text style={styles.text}>{selectedItem.label}</Text>
  ) : (
    <Text color="medium" style={styles.text}>
      {placeholder}
    </Text>
  )

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setSelecting(true)} onBlur={onBlur}>
        <View style={[styles.container, labelWidth ? { width: `${labelWidth}%` } : null]}>
          <Icon style={styles.icon} name={icon} size={40} iconColor="medium" />
          {label}
          <Icon name="chevron-down" size={40} iconColor="medium" />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={selecting} animationType="slide">
        <SafeAreaView>
          <FlatList
            style={numberOdColumns > 1 ? { alignSelf: "center" } : null}
            numColumns={numberOdColumns}
            data={items}
            keyExtractor={(item) => item.label}
            renderItem={({ item }) => (
              <PickerItemComponent item={item} onPress={(e) => (setSelecting(false), onSelectItem(item.value, e))} />
            )}
          />
          <Button color="primary" title="Close" onPress={() => setSelecting(false)} />
        </SafeAreaView>
      </Modal>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  textInput: {
    color: colors.dark,
    ...globalStyles.text,
  },
  text: {
    flex: 1,
  },
})

export default Picker
