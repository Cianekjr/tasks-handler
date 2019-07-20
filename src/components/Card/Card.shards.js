import styled from '@emotion/styled';
import theme from '../../Themes/theme';
import ButtonStyles from '../Reusable/Button/Button.shards';
import InputStyles from '../Reusable/Input/Input.shards';

export const Card = styled.div`
  min-width: 350px;
  background-color: ${theme.colors.bgColors.card};
  height: calc(100vh - ${theme.commons.style.headerHeight}px - ${theme.commons.style.footerHeight}px - 60px);
  border-radius: ${theme.commons.borderRadius.card}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardTitle = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 10px 0 10px 0;
  font-size: ${theme.commons.fontSizes.cardTitle}rem;
  color: ${theme.colors.text.gallery};
  border-bottom: ${theme.commons.borders.cardTitle};
`;

export const Title = styled.span`
  margin: 0 auto;
  
`;

export const AddNewTaskButton = styled.img`
  cursor: pointer;
  height: 25px;
`;

export const NewTaskWrapper = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: ${theme.commons.borders.task};
  background-color: ${theme.colors.bgColors.task};
  border-radius: ${theme.commons.borderRadius.card}px;
  display: flex;
  flex-direction: column;
`;

export const CreateInput = styled(InputStyles)`
`;

export const Control = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled(ButtonStyles)`
  background-color: #5bbc5f;
  margin: 7px 0 0 10px;
  color: #111;
`;

export const TasksWrapper = styled.div`
  width: calc(100% - 20px);
  margin: 10px 0;
  overflow-y: auto;
  &::-webkit-scrollbar {
  width: 5px;
  background-color: transparent
  }
  &::-webkit-scrollbar-track {
  border-radius: ${theme.commons.borderRadius.scrollbar}px;
  background-color: transparent
  }
  &::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: ${theme.colors.bgColors.scrollbar};
  }
`;
