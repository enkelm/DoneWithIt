import { Image, StyleSheet, TouchableHighlight, View } from "react-native"
import type { Animated, GestureResponderEvent, ImageProps, StyleProp, ViewStyle } from "react-native"
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler"

import Text from "../Text"
import Icon, { type IconProps, isIconProps } from "../Icon"
import { colors } from "../../config"
import { forwardRef } from "react"

export type Props = {
  style?: StyleProp<ViewStyle>
  title: string
  subTitle?: string
  image?: IconProps | ImageProps
  onPress?: ((event: GestureResponderEvent) => void) | undefined
  renderLeftActions?:
    | ((
        progressAnimatedValue: Animated.AnimatedInterpolation<string | number>,
        dragAnimatedValue: Animated.AnimatedInterpolation<string | number>,
        swipeable: Swipeable
      ) => React.ReactNode)
    | undefined
  renderRightActions?:
    | ((
        progressAnimatedValue: Animated.AnimatedInterpolation<string | number>,
        dragAnimatedValue: Animated.AnimatedInterpolation<string | number>,
        swipeable: Swipeable
      ) => React.ReactNode)
    | undefined
}

const ListItem = ({ style, title, subTitle, image, onPress, renderLeftActions, renderRightActions }: Props) => (
  <GestureHandlerRootView>
    <Swipeable renderLeftActions={renderLeftActions} renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={[styles.container, style]}>
          {isIconProps(image) ? <Icon {...image} /> : <Image style={styles.image} {...image} />}
          <View style={[styles.contentContainer, image ? { marginLeft: 10 } : {}]}>
            <View>
              <Text style={styles.title} numberOfLines={1}>
                {title}
              </Text>
              {subTitle && (
                <Text style={styles.subTitle} numberOfLines={2}>
                  {subTitle}
                </Text>
              )}
            </View>
            <Icon name="chevron-right" iconColor="medium" />
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  </GestureHandlerRootView>
)

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 15, alignItems: "center" },
  image: { width: 70, height: 70, borderRadius: 35 },
  contentContainer: { flex: 1, flexDirection: "row", justifyContent: "space-between", alignItems: "center" },
  title: { fontWeight: "400" },
  subTitle: { color: colors.medium },
})

export default ListItem
