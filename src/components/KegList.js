import React from 'react';
import Keg from "./Keg";
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <React.Fragment>
      {props.kegList.map(keg => 
      <Keg 
        name = {keg.name}
        brand = {keg.brand}
        price = {keg.price}
        flavor = {keg.flavor}
        key = {keg.id}
        id = {keg.id}
      />)}
    </React.Fragment>
  );
}

export default KegList;