import React from "react";

export const themes={
    dark: {
        background : `#444`,
        color: `#fff`

    },
    light:{
        background : `#eee`,
        color : `#000`

    }

}
export const MyContext = React.createContext(themes.dark);