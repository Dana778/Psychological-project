import { useState } from "react";
import { ButtonStyle, HeaderStyle, HText, MainNavStyle, TitleStyle } from "./style";
import { HomePic } from "./HomeLincs/homepic";
import { TitleLink } from "./HomeLincs/title";
import { ButtonNavigation } from "./buttonNav";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';



export const Header = ({ hHeader }) => {
    const TxtBt1 = 'Общая информация'
    const TxtBt2 = 'Тесты'
    const TxtBt3 = 'Психологи'
    const TxtBt4 = 'Дополнительная информация'

    const ButtonHome = <img src="./pschypic.png" width="35" height="30" />

    const [stateBody, setStateBody] = useState(true)


    return (
        <HeaderStyle>
            <TitleStyle >
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <p><HomePic p_object={ButtonHome} /></p>
                    <p><TitleLink t_objest={hHeader} /></p>
                </div>
            </TitleStyle>
            <MainNavStyle>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={1}>
                            <Grid xs={3}><ButtonStyle><ButtonNavigation href='http://localhost:3000#main_info' name={TxtBt1} /></ButtonStyle></Grid>
                            <Grid xs={3}><ButtonStyle><ButtonNavigation href='http://localhost:3000#tests' name={TxtBt2} /> </ButtonStyle></Grid>
                            <Grid xs={3}><ButtonStyle><ButtonNavigation href='http://localhost:3000#psychos' name={TxtBt3} /> </ButtonStyle></Grid>
                            <Grid xs={3}><ButtonStyle><ButtonNavigation href='http://localhost:3000#add_info' name={TxtBt4} /> </ButtonStyle></Grid>
                        </Grid>
                    </Box>
                </div>

            </MainNavStyle>
        </HeaderStyle>
    )
}