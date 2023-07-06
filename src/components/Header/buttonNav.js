import React from "react";
import { ButtonStyle, MainNavStyle, ActiveLinksStyle, LinksStyle } from "./style";

export const ButtonNavigation = ({ href, name }) => {
    return (
        <MainNavStyle>
            <LinksStyle href={href}>{name}</LinksStyle>
        </MainNavStyle>
    )
    /*  ИЗМЕНЕНИЕ ЦВЕТА КНОПКИ ПО НАЖАТИЮ
    if (stateButton) {
        return <MainNavStyle onClick={buttonClick}> <ActiveLinksStyle><a href="#top">name</a></ActiveLinksStyle> </MainNavStyle>
    }
    else {
        return <MainNavStyle onClick={buttonClick}>  <ButtonStyle name/> </MainNavStyle>
    }  
    */
}
