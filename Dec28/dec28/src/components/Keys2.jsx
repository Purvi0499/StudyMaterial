import React from "react";
import  TeamData  from "./TeamData";

//const listItems = ['Hi','Hello','Goodbye','Bye'];
function List(){
    return(
        <>
            {
            TeamData.map((team,index)=>
                <div key={team.id}>
                    <span>ID = {team.id}</span><br></br>
                    <span>Name = {team.name}</span><br></br>
                    <span>Email = {team.email}</span><br></br>
                </div>
            )
            }
        </>

    );

}
export {List}