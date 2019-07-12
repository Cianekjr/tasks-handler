import styled from '@emotion/styled';
import theme from '../../Themes/theme';

const CardTitle = styled.span`
  display: block;
  width: 90%;
  text-align: center;
  padding: 10px 0 10px 0;
  font-size: ${theme.commons.fontSizes.cardTitle}px;
  color: ${theme.colors.text.gallery};
  border-bottom: ${theme.commons.borders.cardTitle};
`;

export default CardTitle;
