import React from 'react';
import PropTypes from 'prop-types';
import CardTitle from './CardTitle.shards';

export default function CardTitleView({ name }) {
  return (
    <CardTitle>
      {name}
    </CardTitle>
  );
}

CardTitleView.propTypes = {
  name: PropTypes.string.isRequired,
};
