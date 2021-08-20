import React from 'react';
import Keg from "./Keg";
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <React.Fragment>
      {props.kegList.map((keg) => 
      <Keg
        whenKegClicked = {props.onKegSelect}
        name = {keg.name}
        brand = {keg.brand}
        price = {keg.price}
        flavor = {keg.flavor}
        key = {keg.id}
        id = {keg.id} />
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelect: PropTypes.func
}

export default KegList;