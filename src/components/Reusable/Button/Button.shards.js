import styled from '@emotion/styled';
import theme from '../../../Themes/theme';

const Button = styled.button`
  display: block;
  padding: 10px 14px;
  box-shadow: ${theme.commons.boxShadows.button};
  background-color: #3369ff;
  text-transform: uppercase;
  font-weight: 600;
  color: white;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    filter: brightness(85%);
  }
`;

export default Button;
