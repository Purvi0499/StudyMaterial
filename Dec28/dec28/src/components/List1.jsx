import React from "react";

function Flowers(props){

    const flowers = props.floweritems;

    const FlowerList = flowers.map((flower)=>{
        return (
            <li>{flower}</li>
        );
    });

    return(
        <ul>{FlowerList}</ul>
    );


}

const flowerItems = ['Rose','Lily','Jasmine'];

export {Flowers, flowerItems}