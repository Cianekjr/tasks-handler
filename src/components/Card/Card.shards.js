import styled from '@emotion/styled';
import theme from '../../Themes/theme';

export const Card = styled.div`
  min-width: 350px;
  background-color: ${theme.colors.bgColors.card};
  height: calc(100vh - ${theme.commons.style.headerHeight}px - ${theme.commons.style.footerHeight}px - 60px);
  border-radius: ${theme.commons.borderRadius.card}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TasksWrapper = styled.div`
  margin: 10px 0;
  padding-right: 10px;
  overflow-y: auto;
  &::-webkit-scrollbar {
  width: 8px;
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
