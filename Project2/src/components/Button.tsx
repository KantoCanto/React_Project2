import { ButtonContainer } from './Button.styles'

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'danger' | 'success'
}

export function Button({ variant = 'primary' }: ButtonProps) {
  return <ButtonContainer color={variant}>Click Me</ButtonContainer>
}
