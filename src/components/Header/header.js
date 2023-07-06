import { useState } from "react";
import { ButtonStyle, HeaderStyle, HText, MainNavStyle, TitleStyle } from "./style";
import { HomePic } from "./HomeLincs/homepic";
import { TitleLink } from "./HomeLincs/title";
import { ButtonNavigation } from "./buttonNav";


import Grid from '@mui/material/Grid';



export const Header = ({ hHeader }) => {
    //const [buttons, setStateButton] = useState([false, false, false, false]) //
    const TxtBt1 = 'Общая информация'
    const TxtBt2 = 'Тесты'
    const TxtBt3 = 'Психологи'
    const TxtBt4 = 'Дополнительная информация'
    //const [stateBt1, setStateBt1] = useState(false)
    const ButtonHome = <img src="./pschypic.png" width="35" height="30" />

    const [stateBody, setStateBody] = useState(true)


    /* <Button but_state={setStateButton} stateButton = {stBt1} name = {TxtBt1} /> */

    return (
        <HeaderStyle>
            <TitleStyle>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p><HomePic p_object={ButtonHome} /></p>
                    <p><TitleLink t_objest={hHeader} /></p>
                </div>
            </TitleStyle>
            <MainNavStyle>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <ButtonStyle><ButtonNavigation href='#main_info' name={TxtBt1} /></ButtonStyle>
                    <ButtonStyle><ButtonNavigation href='#tests' name={TxtBt2} /> </ButtonStyle>
                    <ButtonStyle><ButtonNavigation href='#psychos' name={TxtBt3} /> </ButtonStyle>
                    <ButtonStyle><ButtonNavigation href='#add_info' name={TxtBt4} /> </ButtonStyle>
                </div>

            </MainNavStyle>
        </HeaderStyle>
    )
}