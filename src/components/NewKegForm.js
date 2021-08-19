import React from 'react';
import {v4} from 'uuid';
import PropTypes from 'prop-types';
import ReusableForm from './ReusableForm';

function NewKegForm(props) {
  return(
    <React.Fragment>
      <ReusableForm buttonText="Submit" />
    </React.Fragment>
  );
}

export default NewKegForm;