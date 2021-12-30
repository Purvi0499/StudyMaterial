
import React,{useState, useEffect} from "react";
import { useClicks } from "./useClicks";

function CustomHooks(){
    const [clicks,setClicks] = useState(0);
    useClicks(clicks);
    return(
        <>
        <p>This is Custom Hook. Clicks count is  {clicks}</p>
        <button onClick={()=>setClicks(clicks+1)}>Click Me!</button>
        </>

    )
}
export {CustomHooks};