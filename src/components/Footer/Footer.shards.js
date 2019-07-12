import styled from '@emotion/styled';
import theme from '../../Themes/theme';
import Wrapper from '../../Utils/Wrapper.shards';

export const Footer = styled.footer`
  height: ${theme.commons.style.footerHeight}px;
  background-color: ${theme.colors.bgColors.footer};
  box-shadow: ${theme.commons.boxShadows.secondary};
`;

export const FooterWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Description = styled.span`
  color: ${theme.colors.text.footer};
`;
