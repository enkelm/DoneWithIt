import { Controller, useForm } from "react-hook-form"

import { Button, ErrorMessage, Picker, PickerItem, SafeAreaView, TextInput, ImageInputList } from "../../components"
import { useLocation } from "../../hooks"

const categories: PickerItem<number>[] = [
  {
    label: "Furniture",
    value: 1,
    iconProps: { name: "sofa", iconColor: "secondary", background: "light", size: 80 },
  },
  {
    label: "Clothing",
    value: 2,
    iconProps: { name: "dresser", iconColor: "secondary", background: "light", size: 80 },
  },
  {
    label: "Camera",
    value: 3,
    iconProps: { name: "camera", iconColor: "secondary", background: "light", size: 80 },
  },
]

const ListingEditScreen = () => {
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      images: [] as string[],
      title: "",
      price: "",
      description: "",
      category: null,
    },
  })

  const location = useLocation()

  const setImageUris = (uris: string[]) => setValue("images", uris)

  return (
    <SafeAreaView style={{ padding: 10 }}>
      <Controller
        control={control}
        name="images"
        rules={{ validate: { atLeastOne: (v) => !!v[0] || "Please select at least one image" } }}
        render={({ field: { value } }) => (
          <ImageInputList
            imageUris={value}
            onAddImage={(uri) => setImageUris([...value, uri])}
            onRemoveImage={(uri) => setImageUris(value.filter((v) => v !== uri))}
          />
        )}
      />
      <ErrorMessage error={errors.images?.message} />

      <Controller
        control={control}
        name="title"
        rules={{ required: "Please enter a listing name", minLength: 1, maxLength: 255 }}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput placeholder="Title" value={value} onChangeText={onChange} onBlur={onBlur} />
        )}
      />
      <ErrorMessage error={errors.title?.message} />

      <Controller
        control={control}
        name="price"
        rules={{
          required: "Please enter a price",
          maxLength: { value: 8, message: "Price should be up to $10000" },
          validate: {
            isNumber: (v) => !!parseFloat(v) || "Please input a number",
            maxValue: (v) => parseFloat(v) <= 10_000 || "Price should be up to $10000",
            minValue: (v) => parseFloat(v) > 0 || "Price should be greater than $0",
          },
        }}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput
            width={40}
            placeholder="Price"
            keyboardType="number-pad"
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      <ErrorMessage error={errors.price?.message} />

      <Controller
        control={control}
        name="category"
        render={({ field: { value, onChange, onBlur } }) => (
          <Picker<number>
            placeholder="Category"
            numberOdColumns={3}
            labelWidth={50}
            items={categories}
            value={value}
            onSelectItem={onChange}
            onBlur={onBlur}
          />
        )}
      />

      <Controller
        control={control}
        name="description"
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput placeholder="Description" value={value} onChangeText={onChange} onBlur={onBlur} />
        )}
      />

      <Button title="POST" onPress={handleSubmit((data) => console.log(data))} />
    </SafeAreaView>
  )
}

export default ListingEditScreen
