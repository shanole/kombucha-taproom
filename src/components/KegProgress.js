import React, { Component } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';

class KegProgress extends React.Component {
  constructor(props) {
    super(props)
    this.state= { 
      maxKeg: parseInt(props.kegs)*5,
      currentKeg: parseInt(props.kegs)*5};
  }

  handleDecrement = () => {
    let currentKeg = this.state.currentKeg;
    if (currentKeg > 0) {
      currentKeg--;
      this.setState({ currentKeg });
      if (currentKeg %5 === 0) {
        this.props.updateKegs(this.props.id)
      }
    }
  }

  render() {
    return (
      <React.Fragment>
        <ProgressBar variant='warning' now={this.state.currentKeg} max={this.state.maxKeg} label={`${this.state.currentKeg} pints`}/>
        <button onClick={this.handleDecrement} type="button" className="btn btn-info mt-2 bt-2">Sell</button>

      </React.Fragment>
    );
  }
}
 
KegProgress.propTypes = {
  kegs : PropTypes.string,
  updateKegs: PropTypes.func,
  id: PropTypes.string
}

export default KegProgress;