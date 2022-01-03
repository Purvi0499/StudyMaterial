import React from "react";
class HiBye extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isHiOn: true
        }
        this.toggleHi=this.toggleHi.bind(this);
    }
    toggleHi(){
        this.setState({
            isHiOn:!this.state.isHiOn
        })
    }
    render(){
        return(
            <div>
                <button onClick={this.toggleHi}>{this.state.isHiOn?`Hi`:`Bye`}</button>
            </div>
        );
    }
}
export {HiBye};
