import React from "react";

class StateLifecycle extends React.Component{
    constructor(props){
        super(props);
        this.state={
            date : new Date()
        }
    }
    componentDidMount(){
        this.timerID=setInterval(
            ()=>this.tick(),
            1000
        )
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({date : new Date()})    //changes date and awares react about the change so it renders and ticking continues
        //this.state.date = new Date();       // chnages date but doesn't aware react about the change.
    }
    
    render(){
    return (
        <h1>{this.state.date.toString()}</h1>
    )
}

}

export {StateLifecycle};