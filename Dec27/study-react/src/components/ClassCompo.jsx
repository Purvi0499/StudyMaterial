import React from 'react';
class Humans extends React.Component{
    render(){
        return (
            <div>
                <input type = 'text'placeholder='Enter Name...'/>
                <br/>
                <br/>
                <input type='text' placeholder = 'Enter Class...'/>
                <br/>
                <br/>
                <button type='submit'>Submit</button>
            </div>
        );
    }
};

export {Humans};