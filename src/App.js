import React, { Component } from 'react';
import './App.scss';
import { getDefaultNormalizer } from '@testing-library/react';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data = getData(),
      shopCount = 0
    }
    
    this.giveUp = ()=>{
      this.setState({
        ...this.state, 
        shopCount: this.state.shopCount -1 
      })
    }

    this.buy = ()=>{
      this.setState({
        ...this.state, 
        shopCount: this.state.shopCount +1
      })
    }
  }
  getData = ()=>{
    url = 
    let data = fetch(url, {
      headers: { 'content-type': 'application/json' },
      method: 'Get'
    }).then(response => response.json());
  }

  render() {
    return (
      <header className="head">
        <ShopCar id="shopCar" info={this.state.shopCount}/>
      </header>
    );
  }
}

export default App;
