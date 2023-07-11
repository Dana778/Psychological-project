import React from "react";
import { ButtonStyle, MainNavStyle, ActiveLinksStyle, LinksStyle } from "./style";

export const ButtonNavigation = ({ href, name }) => {
    return (
        <MainNavStyle>
            <LinksStyle href={href}>{name}</LinksStyle>
        </MainNavStyle>
    )
}
