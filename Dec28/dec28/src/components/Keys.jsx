import React from "react";

function ThingItems(props){
    const item = props.item;
    return (
        <li>{item}</li>
    );
}

function ThingsList(props){
    const list= props.thingitems;
    const updatedList = list.map((listItems)=>{
        return (
            <li >{listItems}</li>

        );
       

    });
    return(
        <ul>{updatedList}</ul>);

}
const thingItems2 = [1,2,3]
const thingItems = ['Car','Chalk','Chair'];
export{ThingsList, thingItems, thingItems2}