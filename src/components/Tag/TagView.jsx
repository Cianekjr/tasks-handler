/* eslint-disable import/no-cycle */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Tag,
  Circle,
  Name,
  CancelButton,
  Icon
} from './Tag.shards';
import { TasksContext } from '../App/App';

export default function TagView({
  taskId, tagId, name, color, show
}) {
  const { tasksDispatch } = useContext(TasksContext);
  return (
    <Tag show={show}>
      <Circle show={show} color={color} />
      {show && (
        <>
          <Name>
            {name}
          </Name>
          <CancelButton onClick={() => tasksDispatch({ type: 'DELETE_TAG', taskId, tagId })}>
            <Icon src="/static/svg/cancel.svg" />
          </CancelButton>
        </>
      )}

    </Tag>
  );
}

TagView.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  show: PropTypes.bool,
};

TagView.defaultProps = {
  show: false,
};
