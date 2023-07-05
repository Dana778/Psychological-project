import React from "react";
import { HeaderStyle } from "./style";

export const Header = ({hHeader}) => {
    return(
        <HeaderStyle>
        <p>{hHeader}</p> 
        </HeaderStyle>
       
    )
}