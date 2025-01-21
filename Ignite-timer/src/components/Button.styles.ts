import styled, {css } from 'styled-components';

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonContainerProps {
   variant: ButtonVariant;
}

const ButtonVariants = {
   primary: 'purple',
   secondary: 'orange',
   danger: 'red',
   success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
   width: 100px;
   height: 50px;
   margin: 10px;
   border-radius: 5px;
   border: none;
   color: white;

   background-color: ${props => props.theme['green-500']};

   /* ${props => {
      return css`
         background-color: ${ButtonVariants[props.variant]};
      `
   }} */
`;