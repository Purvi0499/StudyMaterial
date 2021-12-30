import React from "react";

export class Login extends React.Component{
    constructor(props){
        super(props)
        this.userNameRef = React.createRef()
    }

    componentDidMount(){
        this.userNameRef.current.focus()
    }
    render(){
        return(
            <div>
              <p> <label>Enter Username <input type='text' ref={this.userNameRef} ></input></label></p>
              <p> <label>Enter Password <input type='text' ></input></label></p>
                <button onClick={this.changeQuantity}>Log In</button>
            </div>
        );
    }
}
