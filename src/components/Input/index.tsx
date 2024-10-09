import { InputContainer } from './styles'

type InputProps = {
  type: string;
  placeholder?: string;
}

const Input = ({type, placeholder}: InputProps) => {
  return (
    <InputContainer type={type} placeholder={placeholder} />
  )
}

export default Input