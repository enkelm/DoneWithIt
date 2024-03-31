import { Image, StyleSheet } from "react-native"

import { Button, ErrorMessage, SafeAreaView, TextInput } from "../../components"
import { Controller, useForm } from "react-hook-form"
import { Link } from "expo-router"

const LoginScreen = () => {
  const methods = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={require("../../../assets/logo-red.png")} />
      <Controller
        control={control}
        rules={{
          required: "Email is required.",
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email address",
          },
        }}
        name="email"
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            icon="email"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="emailAddress"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <ErrorMessage error={errors.email?.message} />

      <Controller
        control={control}
        rules={{ required: true, minLength: 4 }}
        name="password"
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            icon="lock"
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <ErrorMessage error={errors.password?.message} />

      {/* <Button title="Login" onPress={handleSubmit((data) => console.log(data))} /> */}
      <Link href="/home/" asChild>
        <Button title="Login" />
      </Link>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
})

export default LoginScreen
