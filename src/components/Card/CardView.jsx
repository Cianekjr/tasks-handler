import React from 'react';
import PropTypes from 'prop-types';
import { Card, TasksWrapper } from './Card.shards';
import CardTitle from '../CardTitle/CardTitleView';
import Task from '../Task/TaskView';

export default function CardView({ name, tasks }) {
  return (
    <Card>
      <CardTitle name={name} />
      <TasksWrapper>
        {tasks.map(task => <Task key={task.id} task={task} />)}
      </TasksWrapper>
    </Card>
  );
}

CardView.propTypes = {
  name: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object),
};

CardView.defaultProps = {
  tasks: [],
};
