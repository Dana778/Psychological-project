import {useState} from "react";
import { BodyTitleStyle , BodyTextStyle} from "./style";
import { Button } from './button';

import {textTop1, textTop2, textMain1, textMain2, textMain3, textMain4} from "./data";


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
        </BodyTextStyle> 
        <BodyTitleStyle id="tests">Тест</BodyTitleStyle>  
        <p><Button func_state={setStateBody} stateButton = {stateBody}/></p>
        <BodyTitleStyle id="psychos">Психологи</BodyTitleStyle>  
        <BodyTitleStyle id="add_info">Дополнительная информация</BodyTitleStyle>  
        </div>
       
    )
}