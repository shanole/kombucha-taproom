import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <h3>{props.name}  |  {props.brand}</h3>
      <p><em>{props.flavor}</em> - {props.price}</p>
    </React.Fragment>
  );
}

export default Keg;