import {useState} from "react";
import { BodyTitleStyle , BodyTextStyle} from "./style";
import { Button } from './button';

import {textTop1, textTop2, textMain1, textMain2, textMain3, textMain4, lor} from "./data";

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export const Body = ({hBody}) => {
    const [stateBody, setStateBody] = useState(true) 
    return(
        <div style={{paddingTop: 150, left:0}}>
            <BodyTextStyle>
                <p>{textTop1}</p>
                <p>{textTop2}</p>
            </BodyTextStyle>
            
            <BodyTitleStyle id="main_info">Общая информация</BodyTitleStyle>  
            
            <BodyTextStyle>
                <p>{textMain1}</p>
                <p>{textMain2}</p>
                <p>{textMain3}</p>
                <p>{textMain4}</p>

                <p>{lor}</p>
                <p>{lor}</p>
                <p>{lor}</p>
                <p>{lor}</p>
                <p>{lor}</p>

            </BodyTextStyle> 

        <BodyTitleStyle id="tests">Тест</BodyTitleStyle>  

        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Как вы относитесь к недостаткам других людей?</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
                <FormControlLabel value="coleric" control={<Radio />} label="Я нетерпим к недостаткам других." />
                <FormControlLabel value="sanguine" control={<Radio />} label="Я принимаю людей такими, какие они есть." />
                <FormControlLabel value="melancholy" control={<Radio />} label="Обычно я рассудителен и осторожен с окружающими." />
                <FormControlLabel value="phlegmatic" control={<Radio />} label="Я предъявляю высокие требования и к себе и окружающим." />                          
            </RadioGroup>
        </FormControl>

        <p><Button func_state={setStateBody} stateButton = {stateBody} /></p>

        <BodyTitleStyle id="psychos">Психологи</BodyTitleStyle>  
        <BodyTitleStyle id="add_info">Дополнительная информация</BodyTitleStyle>  
        </div>
       
    )
}