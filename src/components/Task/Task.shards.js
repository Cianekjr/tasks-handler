import styled from '@emotion/styled';
import theme from '../../Themes/theme';

const Card = styled.div`
  width: 300px;
  height: 80px;
  margin: 10px 0;
  border: ${theme.commons.borders.task};
  background-color: ${theme.colors.bgColors.task};
  border-radius: ${theme.commons.borderRadius.card}px;
`;

export default Card;
