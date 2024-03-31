import { Image, ImageBackground, StyleSheet, View, Text } from "react-native"
import { Link, Stack } from "expo-router"

import { Button } from "../components"

const WelcomeScreen = () => {
  return (
    <>
      <ImageBackground blurRadius={10} style={styles.background} source={require("../../assets/background.jpg")}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../../assets/logo-red.png")} />
          <Text style={styles.tagline}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Link href="/login/" asChild>
            <Button color="primary" title="Login" />
          </Link>
          <Button color="secondary" title="Register" />
        </View>
      </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
})

export default WelcomeScreen
