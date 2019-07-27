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
  Button
} from './Task.shards';
import SelectSection from '../SelectSection/SelectSectionView';
import Tag from '../Tag/TagView';

import { TasksContext, TagsContext } from '../App/AppView';

export default function TaskView({ task }) {
  const {
    id, section, title, description, tags
  } = task;
  const { tasksDispatch } = useContext(TasksContext);
  const { tagsState } = useContext(TagsContext);

  const [show, setShow] = useState(false);
  const [taskState, setTaskState] = useState({
    id, section, title, description, tags
  });

  const handleDeleteTag = (deleteTagId) => {
    const nextStateTags = [...tags];
    const tagIndex = nextStateTags.findIndex(tagId => tagId === deleteTagId);
    nextStateTags.splice(tagIndex, 1);
    console.log(nextStateTags, 'stan')
    console.log(taskState.tags, 'przed');
    setTaskState({ ...taskState, tags: nextStateTags });
    console.log(taskState.tags, 'po');
  };

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
            {tags.map(tag => (
              <Tag
                key={uuid()}
                tag={tagsState.find(tagState => tagState.id === tag)}
              />
            ))}
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
                {tags.map(tag => (
                  <Tag
                    show
                    handleDeleteTag={handleDeleteTag}
                    key={uuid()}
                    tag={tagsState.find(tagState => tagState.id === tag)}
                  />
                ))}
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
    PropTypes.arrayOf(PropTypes.number)])).isRequired,
};
