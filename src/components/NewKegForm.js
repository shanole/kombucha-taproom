import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewKegForm(props) {
  return(
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewKegForm}
      buttonText="Submit" />
    </React.Fragment>
  );

  function handleNewKegForm(event) {
    event.preventDefault();
    console.log(props);
    props.onNewFormSubmit({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      flavor: event.target.flavor.value,
      quantity: event.target.quantity.value,
      id: v4()
    })
  }
}

NewKegForm.propTypes = {
  onNewFormSubmit: PropTypes.func
};

export default NewKegForm;

