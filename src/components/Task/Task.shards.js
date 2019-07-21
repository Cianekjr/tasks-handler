import styled from '@emotion/styled';
import theme from '../../Themes/theme';
import ButtonStyles from '../Reusable/Button/Button.shards';
import InputStyles from '../Reusable/Input/Input.shards';

export const TaskWrapper = styled.div`
  margin: 10px 0;
  padding: 10px;
  border: ${theme.commons.borders.task};
  background-color: ${theme.colors.bgColors.task};
  border-radius: ${theme.commons.borderRadius.card}px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  &.drag-active {
    filter: blur(2px);
  }
`;

export const Title = styled.div`
  font-size: ${theme.commons.fontSizes.taskTitle}rem;
  color: ${theme.colors.text.primary};
  align-self: flex-start;
  margin-bottom: 8px;
`;

export const TaskPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: ${theme.commons.borders.primary};
  padding-top: 10px;
`;

export const Tag = styled.span`
  margin-right: 5px;
  text-transform: uppercase;
`;

export const TagsWrapper = styled.div`
  display: flex;
`;

export const SettingsButton = styled.button`
  height: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const SettingsImage = styled.img`
  height: 100%;
`;

export const TaskModal = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .6);
`;

export const ModalDialog = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  height: 300px;
  width: 80%;
  max-width: 700px;
  transform: translate(-50%, -50%);
  background-color: ${theme.colors.bgColors.task};
  border-radius: ${theme.commons.borderRadius.card}px;
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  height: 25px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CloseImage = styled.img`
  height: 100%;
`;

export const ModalHeader = styled.div`
`;

export const TitleInput = styled(InputStyles)`
  width: 100%;
  margin-bottom: 10px;
`;

export const DescriptionInput = styled(InputStyles.withComponent('textarea'))`
  resize: none;
  height: 100px;
  width: 100%;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const TagsControl = styled.div`

`;

export const Settings = styled.div`
  display: flex;
`;

export const Button = styled(ButtonStyles)`
  background-color: #FF473D;
`;
