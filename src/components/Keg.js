import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick= { () => props.whenKegClicked(props.id) }>
        <h3>{props.name}  |  {props.brand}</h3>
        <p><em>{props.flavor}</em> - {props.price}</p>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
}

export default Keg;