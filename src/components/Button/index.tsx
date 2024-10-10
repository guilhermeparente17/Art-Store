import { ButtonContainer } from './styles';

type ButtonProps = {
  text?: string;
  onClick?: () => void;
  width?: number;
  height?: number;
  animated?: boolean;
  typePage?: string;
}

const Button = ({text, onClick, width, height, animated, typePage}: ButtonProps) => {
  return (
    <ButtonContainer width={width} height={height} animated={animated} typePage={typePage} onClick={onClick}>{text}</ButtonContainer>
  )
}

export default Button