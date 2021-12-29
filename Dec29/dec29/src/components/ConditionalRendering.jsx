import { render } from "@testing-library/react";
import React from "react";

function MessageLoggedInAdmin(props){
    return(
        <>
        <h1>Inbox is here</h1>
        <button onClick={props.buttonClickFunc}>Logout</button>
        </>
    );

}
function MessageLoggedInGuest(props){
    return(
        <>
        <h1>You must Login first</h1>
        <button onClick={props.buttonClickFunc}>Login</button>
        </>
    );

}

class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = 
        {
            isLoggedIn: false
        }
this.loginFunc = this.loginFunc.bind(this);
this.logoutFunc = this.logoutFunc.bind(this);
    }
    logoutFunc(){
        return (this.setState({isLoggedIn:false}));
    }
    loginFunc(){
        return (this.setState({isLoggedIn:true}));
    }
    render(){
    if(this.state.isLoggedIn){
        return <MessageLoggedInAdmin buttonClickFunc={this.logoutFunc}/>
        
    }
    else{
        return <MessageLoggedInGuest buttonClickFunc={this.loginFunc}/>
    }
}
}

export {Message};