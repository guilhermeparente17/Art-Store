import { ButtonContainer } from './styles';

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
}

const Button = ({text, onClick, width, height}: ButtonProps) => {
  return (
    <ButtonContainer width={width} height={height} onClick={onClick}>{text}</ButtonContainer>
  )
}

export default Button