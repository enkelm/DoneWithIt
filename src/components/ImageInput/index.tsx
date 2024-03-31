import { useEffect } from "react"
import { View, StyleSheet, TouchableWithoutFeedback, Image, Alert } from "react-native"
import { launchImageLibraryAsync, MediaTypeOptions, requestCameraPermissionsAsync } from "expo-image-picker"

import Icon from "../Icon"
import { colors } from "../../config"

type Props = {
  imageUri?: string
  onChangeImage: (arg: string) => void
}

const ImageInput = ({ imageUri, onChangeImage }: Props) => {
  useEffect(
    () =>
      void (async () => {
        const { granted } = await requestCameraPermissionsAsync()
        !granted && alert("You need to enable camera permissions")
      })(),
    []
  )

  const handlePress = imageUri
    ? () => {
        Alert.alert("Delete", "Are you sure you want to delete this image.", [
          { text: "No" },
          { text: "Yes", onPress: () => onChangeImage(imageUri) },
        ])
      }
    : async () => {
        try {
          const { assets, canceled } = await launchImageLibraryAsync({
            mediaTypes: MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          })
          !canceled && onChangeImage(assets[0].uri)
        } catch (error) {
          console.log("Error reading an image", error)
        }
      }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={styles.container}>
        {imageUri ? (
          <Image source={{ uri: imageUri }} style={styles.image} />
        ) : (
          <Icon name="camera" size={80} iconColor="medium" />
        )}
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 100,
    width: 100,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
})

export default ImageInput
