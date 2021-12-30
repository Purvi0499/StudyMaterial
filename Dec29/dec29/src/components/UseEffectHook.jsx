import React, { useEffect, useState } from "react";

function UseEffectHook(){
    const [clicks, setClicks] = useState(0)
    useEffect(()=>{
        document.title = `useEffect is working now ${clicks}`
    })
    return(
    <>
                 <p>You have {clicks} clicks</p>
                  <button onClick={()=>setClicks(clicks+1)}>Click Me</button>
    </>
    );
}



// class UseEffectHook extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             clicks:0
//         }
//         this.btnClick = this.btnClick.bind(this);
//     }
//     btnClick(){
//        this.setState({clicks : this.state.clicks + 1})
//     }
//     componentDidMount(){
//         document.title = `componentDidMount is working now ${this.state.clicks}`
//     }
//     componentDidUpdate(){
//         document.title = `componentDidUpdate is working now ${this.state.clicks}`
//     }
//     render(){
//         return(
//             <>
//             <p>You have {this.state.clicks} clicks</p>
//             <button onClick={this.btnClick}>Click Me</button>
//             </>
//         );
//     }
// }
export {UseEffectHook}