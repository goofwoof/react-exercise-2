import React from 'react';
import SIcon from '../../assets/cart_empty.png'
import './ShopCar.css';

class Shopcar extends React.Component {
  render() {
    return <header className="head">
        <h1 className="h1_cart">Store</h1>
        <img  className="img_cart" src={SIcon} alt=""/>
        <p className="p_cart">{this.props.info}</p>
    </header>
  }
}

export default Shopcar;
