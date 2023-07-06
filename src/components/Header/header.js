import {useState} from "react";
import { ButtonStyle, HeaderStyle, HText, MainNavStyle, TitleStyle } from "./style";
import {HomePic} from "./homepic";
import { ButtonNavigation } from "./buttonNav";

export const Header = ({hHeader}) => {
    const [buttons, setStateButton] = useState([false, false, false, false]) //
    const TxtBt1 = 'Общая информация'
    const TxtBt2 = 'Тесты'
    const TxtBt3 = 'Психологи'
    const TxtBt4 = 'Дополнительная информация'
    //const [stateBt1, setStateBt1] = useState(false)
    const ButtonHome = <img src="./pschypic.png" width="35" height="30"/>
    const [stateBody, setStateBody] = useState(true) 


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
            <ButtonStyle><ButtonNavigation href='#main_info' name = {TxtBt1} /></ButtonStyle>
            <ButtonStyle><ButtonNavigation href ='#tests' name = {TxtBt2} /> </ButtonStyle> 
            <ButtonStyle><ButtonNavigation href ='#psychos' name = {TxtBt3} /> </ButtonStyle> 
            <ButtonStyle><ButtonNavigation href ='#add_info' name = {TxtBt4} /> </ButtonStyle> 
        </MainNavStyle> 
        </HeaderStyle>      
    )
}