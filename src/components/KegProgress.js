import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';

class KegProgress extends React.Component {
  constructor(props) {
    super(props)
    this.state= { maxKeg: parseInt(props.kegs)*124 };
  }

  render() {
    return (
      <React.Fragment>
        <ProgressBar variant='warning' now={this.props.pints} max={this.state.maxKeg} label={`${this.props.pints} pints`}/>
        <button onClick={() => this.props.updateKegs(this.props.id)} type="button" className="btn btn-info mt-2 bt-2">Sell</button>

      </React.Fragment>
    );
  }
}
 
KegProgress.propTypes = {
  kegs : PropTypes.string,
  pints : PropTypes.number,
  updateKegs: PropTypes.func,
  id: PropTypes.string
}

export default KegProgress;