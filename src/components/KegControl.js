import React, { Component } from 'react';
import KegList from './KegList.js';
import KegDetail from './KegDetail.js';
import NewKegForm from './NewKegForm.js'

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      formVisibleonPage: false,
      masterKegList: [
        {name: 'very berry', brand: 'shannon', price: '$7.00', flavor: 'blueberry', id: 0, quantity: 1},
        {name: 'clear mind', brand: 'brew dr', price: '$7.50', flavor: 'rosemary, mint, sage, and green tea', id: 1, quantity: 2},
        {name: 'pina colada', brand: 'shannon', price: '$8.00', flavor: 'pineapple', id: 2, quantity: 3}
      ],
      selectedKeg: null
    };
  }
  render(){
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.selectedKeg != null) {
      currentlyVisibleState = <KegDetail keg = {this.state.selectedKeg} />
      buttonText = "Return to taproom";
    } else if (this.state.formVisibleonPage) {
      currentlyVisibleState = <NewKegForm />;
      buttonText = "Return to taproom";
    } else {
      currentlyVisibleState = <KegList kegList = {this.state.masterKegList}/>
      buttonText = "Add new keg";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button className="btn btn-primary">{buttonText}</button>
      </React.Fragment>
    )
  }
}

export default KegControl;