import React from "react";
import ThemeContent from "./ThemeContent";
import { MyContext, themes } from "./MyContext";

export class Context extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            theme : themes.dark
        }
        this.changeTheme = this.changeTheme.bind(this);
    }
    changeTheme(){
        this.setState({
            theme:this.state.theme == themes.dark ? themes.light: themes.dark
        })
    }
    render(){
        return(
            <MyContext.Provider value = {this.state.theme}>
                <ThemeContent changeTheme = {this.changeTheme}/>
            </MyContext.Provider>
        );
    }
}
