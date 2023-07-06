import {useState} from "react";
import { ButtonStyle, HeaderStyle, HText, MainNavStyle, TitleStyle } from "./style";
import {HomePic} from "./homepic";

export const Header = ({hHeader}) => {
    const [buttons, setStateButton] = useState([false, false, false, false]) 
    const TxtBt1 = 'Общая информация'
    const ButtonHome = <img src="./pschypic.png" width="35" height="30"/>
    const [stateBody, setStateBody] = useState(true) 
   /* const TxtBt2 = 'Тесты'
    const TxtBt3 = 'Психологи'
    const TxtBt4 = 'Дополнительная информация'
    */

    /* <Button but_state={setStateButton} stateButton = {stBt1} name = {TxtBt1} /> */

    return(
        <HeaderStyle>       
        <TitleStyle>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                <p><HomePic func_state={setStateBody} stateButton = {ButtonHome}/></p>
                <p>{hHeader}</p>
            </div>
        </TitleStyle>
        <MainNavStyle>
            <ButtonStyle> Общая информация </ButtonStyle>
            <ButtonStyle>Тесты </ButtonStyle>
            <ButtonStyle>Психологи</ButtonStyle> 
            <ButtonStyle>Дополнительная информация </ButtonStyle>
        </MainNavStyle> 
        </HeaderStyle>      
    )
}