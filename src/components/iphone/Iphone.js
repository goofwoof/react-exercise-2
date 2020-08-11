import React from 'react';
import PhoneModel from '../phoneModel/PhoneModel'
import './Iphone.css';

class Iphone extends React.Component {
    constructor(props){
        super(props);
        this.category = "iPhone";
        
    }

    render(){
        return <div>
        <h2 className="title">{this.category}</h2>
        {
            this.props.info.map(phone=>
                <PhoneModel info={phone} onBuy={()=>this.props.onBuy()}/>
            )
        }
    </div>
    }
    
}

export default Iphone;
