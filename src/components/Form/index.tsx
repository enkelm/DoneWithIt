import { isValidElement, ReactNode } from "react"
import { DefaultValues, FieldValues, FormProvider, useForm, UseFormReturn } from "react-hook-form"

type Props<T extends FieldValues> = {
  defaultValues: DefaultValues<T>
  children:
    | ((props: UseFormReturn<T, any, undefined>) => ReactNode)
    | React.ReactElement<unknown, string | React.JSXElementConstructor<any>>
}

const Form = <T extends FieldValues>({ defaultValues, children }: Props<T>) => {
  const methods = useForm({ defaultValues })
  return <FormProvider {...methods}>{isValidElement(children) ? children : children(methods)}</FormProvider>
}

export default Form
