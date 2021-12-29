import React from 'react';
import {Contentbox1} from './Contentbox1'
function Composition(){
    return(
     
        <Contentbox1 color='pink'>
            <header style={{backgroundColor:`#ddd`,padding:`10px`}}><h1>I am Heading 2</h1></header>
            <div style={{backgroundColor:`#fff`,padding:`10px`}}><h4>I am contentbox 2</h4></div>
        </Contentbox1>
 
    );

}
export {Composition};