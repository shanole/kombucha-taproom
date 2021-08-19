import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  const { keg } = props;
  let name, brand, price, flavor, quantity;

  if (keg !== undefined) {
    name = keg.name;
    brand = keg.brand;
    price = keg.price;
    flavor = keg.flavor
    quantity = keg.quantity;
  }

  return (
  <React.Fragment>
    <form onSubmit={props.formSubmissionHandler}>
      <label>Name:</label>
      <input
      type='text'
      name='name'
      id="name"
      defaultValue={name}
      placeholder='Name' 
      className="form-control"/>
      <label>Brand:</label>
      <input
        type='text'
        name='brand'
        defaultValue={brand}
        placeholder='Brand' 
        className="form-control"/>
      <label>Price:</label>
      <input
        type='number'
        name='price'
        defaultValue={price}
        placeholder='Price' 
        className="form-control"/>
      <label>Flavor:</label>
      <input
        type='text'
        name='flavor'
        defaultValue={flavor}
        placeholder='Flavor' 
        className="form-control"/>
      <label>Quantity</label>
      <input
        type='number'
        name='quantity'
        defaultValue={quantity}
        placeholder='Quantity' 
        className="form-control"/>
      <button className="btn btn-success m-2" type='submit'>{props.buttonText}</button>
    </form>
    <hr />
  </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  keg: PropTypes.object 
};

export default ReusableForm;