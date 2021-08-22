import React from 'react';
import PropTypes from 'prop-types';
import KegProgress from './KegProgress';

function Keg(props) {
  return (
    <React.Fragment>
      <div onClick= { () => props.whenKegClicked(props.id) }>
        <h3>{props.name}  |  {props.brand}</h3>
        <p><em>{props.flavor}</em> - {props.price}</p>
        <p>Current stock of kegs: {props.quantity}</p>
      </div>
      <KegProgress id={props.id} kegs={props.quantity} pints={props.pints} updateKegs={props.onKegSold}/>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  flavor: PropTypes.string.isRequired,
  quantity: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  pints: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func,
  onKegSold: PropTypes.func
}

export default Keg;