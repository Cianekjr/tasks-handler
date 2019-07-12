import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task.shards';

export default function TaskView({ task }) {
  const {
    title, description, tags, minutes
  } = task;
  return (
    <Task>
      {title}
      <br />
      {description}
      <br />
      {tags}
      <br />
      {minutes}
    </Task>
  );
}

TaskView.propTypes = {
  task: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.string)])).isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  minutes: PropTypes.number,
};

TaskView.defaultProps = {
  description: '',
  tags: [],
  minutes: 0,
};
