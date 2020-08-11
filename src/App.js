import React from 'react';
import ShopCar from './components/shopCar/ShopCar'
import Huawei from './components/huawei/Huawei'
import Iphone from './components/iphone/Iphone'
import './App.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      shopCount: 0,
    }
  }

  buy = ()=>{
    this.setState({ 
      shopCount: this.state.shopCount +1
    })
  }
  componentDidMount(){
    this.getData()
  }
  async getData(){
    let url = 'http://localhost:3000/products';
    const response = await fetch(url, {
      headers: { 'content-type': 'application/json' },
      method: 'Get'
    })
    let result = await response.json();
    this.setState({ 
      data: result
    })
  }

  render() {
    return <div>
      <ShopCar id="shopCar" className="shopCar" info={this.state.shopCount}/>
      <Iphone id="iphone" className="phonelist" info={this.state.data.filter(
        phone=> 'iPhone' === phone.category
      )} onBuy={this.buy} />
      <Huawei id="huawei" className="phonelist" info={this.state.data.filter(
        phone=> 'HUAWEI' === phone.category
      )} onBuy={this.buy} />
    </div>
  }
}

export default App;
