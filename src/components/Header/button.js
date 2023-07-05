import React from "react";
import { ButtonStyle, MainNavStyle, ActiveLinksStyle } from "./style";

const Button = ({but_state, stateButton, name}) => {
    const buttonClick = () => {
        console.log(but_state)
        but_state(!stateButton)
        //window.location.replace('/dashboard')
    }
    //const buttonHover = () => {}
    if (stateButton) {
        return <MainNavStyle onClick={buttonClick}> <ActiveLinksStyle name />  </MainNavStyle>
    }
    else {
        return <MainNavStyle onClick={buttonClick}>  <ButtonStyle name/> </MainNavStyle>
    }    
}

export default Button