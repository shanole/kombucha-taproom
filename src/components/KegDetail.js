import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg } = props;
  let kegAmount = "kegs";
  if (keg.quantity === 1) {
    kegAmount = "keg";
  }
  return (  
  <React.Fragment>
    <h3>{keg.name}  |  {keg.brand}</h3>
    <p><em>{keg.flavor}</em></p>
    <p>{keg.price} per keg</p>
    <p><strong>Current stock: </strong>{keg.quantity} {kegAmount} available</p>
  </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object
}

export default KegDetail;