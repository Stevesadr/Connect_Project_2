'use client'
import { createContext , useReducer } from "react";

export const SelectContext = createContext()

//Change Button style2

const SelectReducer = ( state , action) => {
    if(action.type == 'change-bgcolorright'){
        return {...state , bg: '#EFEFEF' , bg2: 'white'}
    }
    else if(action.type == 'change-bgcolorleft'){
        return {...state , bg: 'white' , bg2: '#EFEFEF'}
    }
    else{
        return state
    }
} 

export function SelectProvider({children}) {

    const [state , dispatch] = useReducer( SelectReducer ,{
        bg : 'white',
        bg2: '#EFEFEF',
    })

    //First button
    const Changebgright = ( bg , bg2 ) => {
        dispatch({type: 'change-bgcolorright' , payload:bg , payload:bg2})
    }
    const Changebgleft = ( bg , bg2 ) => {
        dispatch({type: 'change-bgcolorleft' , payload:bg , payload:bg2})
    }


    return(
        <SelectContext.Provider value={ {...state , Changebgright , Changebgleft}}>
            {children}
        </SelectContext.Provider>
    )
}