import { useState } from "react";
import { BodyTitleStyle, BodyTextStyle } from "./style";
import { Button } from './button';

import { textTop1, textTop2, textMain1, textMain2, textMain3, textMain4, lor } from "./data";

import Radio from '@mui/material/Radio';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup'; import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as React from 'react';
import PropTypes from 'prop-types';

import { styled } from '@mui/material/styles';

export const f = 23;

export const Body = ({ f_setres, resreturn }) => {
    const [stateBody, setStateBody] = useState(true)
    const [result, setResult] = useState()
    let [questions, setQuestions] = useState([0, 0, 0, 0])

    function index_max(arr) {
        var i, maxV, maxP;
        for( i = 0; i < arr.length; i++) {
          if( typeof maxV === "undefined" || arr[i] > maxV ) {
            maxV = arr[i];
            maxP = i;
          }
        }
        
        return maxP;
      }


    return (
        <div style={{ paddingTop: 150, left: 0 }}>
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
                    value={result}
                    onChange={e => {
                        setResult(e.target.value)
                        const questMas = [0,0,0,0]
                        questMas[e.target.value] += 1
                        setQuestions(questMas)
                        f_setres(index_max(questMas))
                    }}
                    name="radio-buttons-group"
                >
                    <FormControlLabel value={0} control={<Radio />} label="Я нетерпим к недостаткам других." />
                    <FormControlLabel value={1} control={<Radio />} label="Я принимаю людей такими, какие они есть." />
                    <FormControlLabel value={2} control={<Radio />} label="Обычно я рассудителен и осторожен с окружающими." />
                    <FormControlLabel value={3} control={<Radio />} label="Я предъявляю высокие требования и к себе и окружающим." />
                </RadioGroup>
                <p>{questions}</p>
                <p>{resreturn}</p>                
            </FormControl>
            <p><Button func_state={setStateBody} stateButton={Math.max(questions)} /></p>

            <BodyTitleStyle id="psychos">Психологи</BodyTitleStyle>
            <BodyTitleStyle id="add_info">Дополнительная информация</BodyTitleStyle>
        </div>

    )
}
