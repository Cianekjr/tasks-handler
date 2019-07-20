import styled from '@emotion/styled';
import theme from '../../../Themes/theme';

export const Input = styled.input`
  height: 30px;
  font-size: ${theme.commons.fontSizes.taskTitle}rem;
  padding: 5px;
  border: none;
  border-bottom: ${theme.commons.borders.primary};
  background-color: transparent;
  color: #FFF;
  &::placeholder {
    color: #aaa;
  }
`;

export default Input;
