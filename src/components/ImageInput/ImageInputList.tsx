import { useRef } from "react"
import { View, StyleSheet, ScrollView } from "react-native"

import ImageInput from "."

type Props = {
  imageUris: string[]
  onAddImage: (uri: string) => void
  onRemoveImage: (uri: string) => void
}

const ImageInputList = ({ imageUris, onAddImage, onRemoveImage }: Props) => {
  const scrollViewRef = useRef<ScrollView | null>(null)

  return (
    <View>
      <ScrollView ref={scrollViewRef} horizontal onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}>
        <View style={styles.container}>
          {imageUris.map((uri) => (
            <ImageInput key={uri} imageUri={uri} onChangeImage={onRemoveImage} />
          ))}
          <ImageInput onChangeImage={onAddImage} />
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10,
  },
})

export default ImageInputList
