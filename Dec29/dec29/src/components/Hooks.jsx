import React,{useState}from "react";
function Hooks(){
    const [count, setCount] = useState(0);
    return(
        <>
        <p>Count : {count}</p>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        </>
    );
}

// class Hooks extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             count:0
//         }
//         this.incFunc = this.incFunc.bind(this);
//         this.decFunc = this.decFunc.bind(this);
//     }
//     incFunc(){
//             this.setState({count : this.state.count+1})
//     }
//     decFunc(){
//         this.setState({count : this.state.count-1})
// }
//     render(){
        // return(
        //     <>
        //     <p>Count : {this.state.count}</p>
        //     <button onClick={this.incFunc}>Increment</button>
        //     <button onClick={this.decFunc}>Decrement</button>
        //     </>
        // );
//     }

// }
export {Hooks};