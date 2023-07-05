import {useState} from "react";
import { ButtonStyle, HeaderStyle, HText, MainNavStyle } from "./style";
import Button from "./button";

export const Header = ({hHeader}) => {
    const [[stBt1, stBt2, stBt3, stBt4], setStateButton] = useState([false, false, false, false]) 
    const TxtBt1 = 'Общая информация'
   /* const TxtBt2 = 'Тесты'
    const TxtBt3 = 'Психологи'
    const TxtBt4 = 'Дополнительная информация'
    */

    /* <Button but_state={setStateButton} stateButton = {stBt1} name = {TxtBt1} /> */

    return(
        <HeaderStyle>
        <HText>{hHeader}</HText> 
        <MainNavStyle>
            <ButtonStyle> Общая информация </ButtonStyle>
            <ButtonStyle>Тесты </ButtonStyle>
            <ButtonStyle>Психологи</ButtonStyle> 
            <ButtonStyle>Дополнительная информация </ButtonStyle>
        </MainNavStyle> 
        </HeaderStyle>
       
    )
}