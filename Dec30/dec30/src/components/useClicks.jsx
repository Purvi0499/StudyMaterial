import {useEffect} from 'react';
function useClicks(clicks){
    useEffect(()=>{
        document.title=`useClicks function is working ${clicks} times`},
        [clicks]);
}
export {useClicks}