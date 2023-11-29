import styled from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  vatiant?: ButtonVariant
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 10rem;
  height: 4rem;
  border-radius: 1rem;
  border: 0;
  margin: 1rem;

  background-color: ${(props) => props.theme['green-500']};
`
