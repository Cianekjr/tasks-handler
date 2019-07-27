/* eslint-disable import/no-cycle */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Tag,
  Circle,
  Name,
  CancelButton,
  Icon
} from './Tag.shards';

export default function TagView({
  tag, show, handleDeleteTag
}) {
  const { id, name, color } = tag;
  return (
    <Tag show={show}>
      <Circle show={show} color={color} />
      {show && (
        <>
          <Name>
            {name}
          </Name>
          <CancelButton onClick={() => handleDeleteTag(id)}>
            <Icon src="/static/svg/cancel.svg" />
          </CancelButton>
        </>
      )}

    </Tag>
  );
}

TagView.propTypes = {
  tag: PropTypes.objectOf(
    PropTypes.oneOfType(
      [PropTypes.number, PropTypes.string]
    )
  ).isRequired,
  handleDeleteTag: PropTypes.func,
  show: PropTypes.bool,
};

TagView.defaultProps = {
  show: false,
  handleDeleteTag: () => null,
};
