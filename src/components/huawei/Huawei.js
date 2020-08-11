import React from 'react';
import PhoneModel from '../phoneModel/PhoneModel'
import './Huawei.css';

class Huawei extends React.Component {
    constructor(props){
        super(props);
        this.category="HUAWEI"
        
    }
    render(){
        return <div>
        <h2 className="title">{this.category}</h2>
        {
            this.props.info.map(phone=>
                <PhoneModel info={phone}  onBuy={()=>this.props.onBuy()} />
            )
        }
    </div>
    }
    
}

export default Huawei;
// />