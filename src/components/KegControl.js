import React, { Component } from 'react';
import KegList from './KegList.js';
import KegDetail from './KegDetail.js';
import NewKegForm from './NewKegForm.js'

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      formVisibleOnPage: false,
      masterKegList: [
        {name: 'very berry', brand: 'shannon', price: '$7.00', flavor: 'blueberry', id: 0, quantity: 1},
        {name: 'clear mind', brand: 'brew dr', price: '$7.50', flavor: 'rosemary, mint, sage, and green tea', id: 1, quantity: 2},
        {name: 'pina colada', brand: 'shannon', price: '$8.00', flavor: 'pineapple', id: 2, quantity: 3}
      ],
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
      });
    } else {
      this.setState( prevState => ({formVisibleOnPage: !prevState.formVisibleOnPage}));
    }
  }

  handleNewFormSubmission = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      formVisibleOnPage: false });
  }

  handleSelect = (id) => {
    const selectedKeg = this.state.masterKegList.filter(k => k.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} />
      buttonText = "Return to taproom";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewFormSubmit={this.handleNewFormSubmission}/>;
      buttonText = "Return to taproom";
    } else {
      currentlyVisibleState = <KegList kegList = {this.state.masterKegList} onKegSelect={this.handleSelect}/>
      buttonText = "Add new keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <hr />
        <button className="btn btn-primary m-2" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default KegControl;