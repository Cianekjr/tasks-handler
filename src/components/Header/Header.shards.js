import styled from '@emotion/styled';
import theme from '../../Themes/theme';
import Wrapper from '../../Utils/Wrapper.shards';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${theme.commons.style.headerHeight}px;
  background-color: ${theme.colors.bgColors.header};
  box-shadow: ${theme.commons.boxShadows.primary};
`;

export const HeaderWrapper = styled(Wrapper)`
  display: flex;
  align-items: center;
`;

export const LinkLogo = styled.a`
  display: block;
  height: 100%;
  cursor: pointer;
`;

export const Logo = styled.img`
  height: 100%;
`;
