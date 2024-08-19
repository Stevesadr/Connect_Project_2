'use client'
import { createContext , useReducer } from "react";

export const BtnContext = createContext()

// Change Button Style

const btnReducer = ( state , action) => {
    if(action.type == 'change-bgcolordefault'){
        return {...state , bg1: 'rgb(244, 244, 244)' , color1: '#a7a7a7'}
    }
    else if(action.type == 'change-bgcolorgreen'){
        return {...state , bg1: '#78caa486' , color1: '#30bb7a'}
    }
    else if(action.type == 'change-bgcolordefault2'){
        return {...state , bg_2: 'rgb(244, 244, 244)' , color2: '#a7a7a7'}
    }
    else if(action.type == 'change-bgcolorgreen2'){
        return {...state , bg_2: '#78caa486' , color2: '#30bb7a'}
    }
    else if(action.type == 'change-bgcolordefault3'){
        return {...state , bg3: 'rgb(244, 244, 244)' , color3: '#a7a7a7'}
    }
    else if(action.type == 'change-bgcolorgreen3'){
        return {...state , bg3: '#78caa486' , color3: '#30bb7a'}
    }
    else{
        return state
    }
} 

export function BtnProvider({children}) {

    const [state , dispatch] = useReducer( btnReducer ,{
        bg1 : 'rgb(244, 244, 244)',
        color1: '#a7a7a7',
        bg2 : 'rgb(244, 244, 244)',
        color2: '#a7a7a7',
        bg3 : 'rgb(244, 244, 244)',
        color3: '#a7a7a7'
    })

    //First button
    const Changecolordefault = ( color1 , bg1 ) => {
        dispatch({type: 'change-bgcolordefault' , payload:bg1 , payloadtow:color1 })
    }
    const Changecolorgreen = ( color1 , bg1 ) => {
        dispatch({type: 'change-bgcolorgreen' , payload:bg1 , payloadtow: color1 })
    }

    //
    const Changecolordefault2 = ( color2 , bg_2 ) => {
        dispatch({type: 'change-bgcolordefault2' , payload:bg_2 , payloadtow:color2 })
    }
    const Changecolorgreen2 = ( color2 , bg_2 ) => {
        dispatch({type: 'change-bgcolorgreen2' , payload:bg_2 , payloadtow:color2 })
    }

    //
    const Changecolordefault3 = ( color3 , bg3 ) => {
        dispatch({type: 'change-bgcolordefault3' , payload:bg3 , payloadtow:color3 ,})
    }
    const Changecolorgreen3 = ( color3 , bg3 ) => {
        dispatch({type: 'change-bgcolorgreen3' , payload:bg3 , payloadtow:color3})
    }


    return(
        <BtnContext.Provider value={ {...state , Changecolordefault , Changecolorgreen , Changecolordefault2 , Changecolorgreen2 ,Changecolordefault3 , Changecolorgreen3 }}>
            {children}
        </BtnContext.Provider>
    )
}