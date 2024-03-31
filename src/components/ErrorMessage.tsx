import Text from "./Text"

type Props = {
  error: string | undefined
}

const ErrorMessage = ({ error }: Props) => (error ? <Text color="danger">{error}</Text> : null)

export default ErrorMessage
