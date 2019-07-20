/* eslint-disable import/no-cycle */
import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';
import {
  Card, CardTitle, Title, AddNewTaskButton, NewTaskWrapper, CreateInput, TasksWrapper,
  Button, Control
} from './Card.shards';
import Task from '../Task/TaskView';

import { TasksContext } from '../App/AppView';

export default function CardView({ title, name, create }) {
  const { tasksState, tasksDispatch } = useContext(TasksContext);
  const [titleValue, setTitleValue] = useState('');
  const [newTaskForm, setNewTaskForm] = useState(false);
  return (
    <Card>
      <CardTitle>
        <Title>{title}</Title>
        {create && (
        <AddNewTaskButton
          onClick={() => setNewTaskForm(!newTaskForm)}
          src="/static/svg/upload.svg"
        />
        )}
      </CardTitle>
      <TasksWrapper>
        {newTaskForm && (
        <NewTaskWrapper>
          <CreateInput
            type="text"
            placeholder="Title"
            onChange={e => setTitleValue(e.target.value)}
            value={titleValue}
          />
          <Control>
            <Button
              name="Add"
              type="submit"
              onClick={() => {
                if (titleValue) {
                  tasksDispatch({
                    type: 'ADD_TASK',
                    task: {
                      id: uuid(),
                      title: titleValue,
                      section: 'backlog',
                      description: '',
                      tags: [],
                    },
                  });
                  setTitleValue('');
                  setNewTaskForm(false);
                }
              }}
            >
            Add
            </Button>
            <Button
              name="Cancel"
              type="submit"
              onClick={() => {
                setNewTaskForm(false);
                setTitleValue('');
              }}
            >
            Cancel
            </Button>
          </Control>
        </NewTaskWrapper>
        )}
        {tasksState
          .filter(task => task.section === name)
          .map(task => (
            <Task key={uuid()} task={task} />
          ))}
      </TasksWrapper>
    </Card>
  );
}


CardView.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  create: PropTypes.bool
};

CardView.defaultProps = {
  create: false
};
