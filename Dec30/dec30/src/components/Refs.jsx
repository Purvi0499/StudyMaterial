import React from "react";

export class Refs extends React.Component{
    constructor(props){
        super(props)
        this.state={
            quantity:0
        }
        this.quantityRef = React.createRef();
    }
    changeQuantity=()=>{
        this.quantityRef.current.value++;
    }
    render(){
        return(
            <div>
               <label>Enter Quantity</label> <input type='text' ref={this.quantityRef}></input>
                <button onClick={this.changeQuantity}>+</button>
            </div>
        );
    }
}