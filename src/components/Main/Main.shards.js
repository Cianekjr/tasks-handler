import styled from '@emotion/styled';
import theme from '../../Themes/theme';

export const Main = styled.main`
  width: 100%;
  margin-top: ${theme.commons.style.headerHeight}px;
  height: calc(100vh - ${theme.commons.style.headerHeight}px - ${theme.commons.style.footerHeight}px);
  background-color: ${theme.colors.bgColors.main};
  padding: 20px 20px;
`;

export const CardWrapper = styled.div`
  margin: 0 10px;
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(6, 1fr);
  padding-bottom: 10px;
  overflow-x: auto;
  &::-webkit-scrollbar {
  height: 8px;
  background-color: transparent
  }
  &::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: transparent
  }
  &::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #555;
  }
`;
