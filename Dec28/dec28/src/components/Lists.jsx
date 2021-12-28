
import React from "react";

function LearnList(props){

    const numbers = props.numberitems;

    const UpdatedNums = numbers.map((number)=>{
        return <li>{number}</li>;
    });

    return(
        <ul>{UpdatedNums}</ul>

    );
}


const numberItems = [1,2,3,4,5,6];

export {numberItems, LearnList};