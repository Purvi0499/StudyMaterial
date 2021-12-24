////exporting a class////////

class Samsung{
     charge(){
         console.log('charging');

    }
}
export{Samsung};

////////////exporting a function////////////

function playMusic(){
    console.log('Hi Bixby, Play Music ');
}
export{playMusic}

/////////exporting a variable////

const P = true;
export{P}

/* Importing all 
import * as device from './components/Modules.js'

now we can use it as 

device.Samsung
device.playMusic
device.P*/

/////////////default export/////////////

class Defaulter{
    display(){
        console.log('hi from defaullter');
    }
}

export default Defaulter;


//////////Cyclic Dependency/////////////
export const q = 0;
export function show(){
    q++;
}






