import React from 'react';
import './PhoneModel.css';

class PhoneModel extends React.Component {
    render() {
        return <div className="onePhone">
                <h2>{this.props.info.name}</h2>
                <img className="img_phone" scr={'../../assets/product_image_placeholder.png'} alt="" />
                <p className="price">{this.props.info.price}</p>
                <button  className="button_buy" onClick={()=>this.props.onBuy()}>add to cart</button>
            </div>
    }
}

export default PhoneModel;