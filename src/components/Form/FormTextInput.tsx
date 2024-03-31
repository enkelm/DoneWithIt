import { useFormContext, Controller, ControllerProps, RegisterOptions, FieldValues, FieldPath } from "react-hook-form"

import TextInput, { TextInputProps } from "../TextInput"
import ErrorMessage from "../ErrorMessage"

type Props<T extends FieldValues> = {
  name: FieldPath<T>
  rules?: RegisterOptions<FieldValues, string>
  error: string | undefined
  controllerProps?: Omit<ControllerProps, "control" | "name" | "render" | "rules">
  inputProps?: Omit<TextInputProps, "value" | "onChangeText" | "onBlur">
}

const FormTextInput = <T extends FieldValues>({ name, rules, error, controllerProps, inputProps }: Props<T>) => {
  const { control } = useFormContext()

  return (
    <>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { value, onChange, onBlur } }) => (
          <TextInput value={value} onChangeText={onChange} onBlur={onBlur} {...inputProps} />
        )}
        {...controllerProps}
      />
      <ErrorMessage error={error} />
    </>
  )
}

export default FormTextInput
