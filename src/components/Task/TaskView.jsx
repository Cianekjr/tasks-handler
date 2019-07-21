/* eslint-disable import/no-cycle */
/* eslint-disable import/no-unresolved */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import {
  TaskWrapper,
  Title,
  TaskPart,
  TagsWrapper,
  SettingsButton,
  SettingsImage,
  TaskModal,
  ModalDialog,
  CloseButton,
  CloseImage,
  ModalHeader,
  ModalFooter,
  TagsControl,
  Settings,
  TitleInput,
  DescriptionInput,
  Tag,
  Button
} from './Task.shards';
import SelectSection from '../SelectSection/SelectSectionView';

import { TasksContext } from '../App/AppView';

export default function TaskView({ task }) {
  const {
    id, section, title, description, tags
  } = task;
  const { tasksDispatch } = useContext(TasksContext);

  const [show, setShow] = useState(false);
  const [taskState, setTaskState] = useState({
    id, section, title, description, tags
  });

  const updateTaskOnModalClose = () => {
    setShow(false);
    tasksDispatch({
      type: 'UPDATE_TASK',
      id,
      taskState,
    });
  };

  return (
    <>
      <TaskWrapper
        draggable="true"
        id={id}
        className="draggable"
        onClick={() => setShow(true)}
      >
        <Title>{title}</Title>
        <TaskPart>
          <TagsWrapper>
            {tags.map(tag => <Tag key={uuid()}>{tag}</Tag>)}
          </TagsWrapper>
          <SettingsButton>
            <SettingsImage src="/static/svg/settings.svg" />
          </SettingsButton>
        </TaskPart>
      </TaskWrapper>
      {show && (
      <TaskModal onClick={() => updateTaskOnModalClose()}>
        <ModalDialog onClick={e => e.stopPropagation()}>
          <CloseButton
            autoFocus
            onClick={() => updateTaskOnModalClose()}
          >
            <CloseImage src="/static/svg/cancel.svg" />
          </CloseButton>
          <ModalHeader>
            <TitleInput
              type="text"
              value={taskState.title}
              onChange={e => setTaskState({ ...taskState, title: e.target.value })}
            />
            <DescriptionInput
              value={taskState.description}
              onChange={e => setTaskState({ ...taskState, description: e.target.value })}
            />
          </ModalHeader>
          <ModalFooter>
            <TagsControl>
              {tags}
            </TagsControl>
            <Settings>
              <SelectSection
                value={taskState.value}
                currentSection={section}
                onChange={({ value }) => {
                  setTaskState({ ...taskState, section: value });
                }}
              />
              <Button
                type="button"
                onClick={() => tasksDispatch({
                  type: 'DELETE_TASK',
                  id,
                })}
              >
                Delete
              </Button>
            </Settings>
          </ModalFooter>
        </ModalDialog>
      </TaskModal>
      )}
    </>
  );
}

TaskView.propTypes = {
  task: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string)])).isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
};

TaskView.defaultProps = {
  title: '',
  description: '',
  tags: [],
};
