import React from "react";
import {Contentbox} from './Contentbox';
function Welcome(){
    return(
    <Contentbox color = 'green'>
        <header style={{padding : `10px`, backgroundColor:`#eee` }} ><h1>I am Heading 1</h1>
        </header>
        <div style={{padding : `10px`, backgroundColor:`#ccc`}}>
            <h4>I am Content</h4>
        </div>
    </Contentbox>
    );
    
}

export {Welcome};