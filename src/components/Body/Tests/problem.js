import Radio from '@mui/material/Radio';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup'; import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as React from 'react';
import { purple } from '@mui/material/colors';
import { useState } from 'react';

export function Problem({ question, ans1, ans2, ans3, ans4, result, setResult, quest }) {
    
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label" style={{color:'black'}}>{question}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                onChange={e => {
                    setResult(e.target.value)
                    /*DefaultQuestions=defaultState
                    const questMas = [0, 0, 0, 0]
                    questMas[e.target.value] += 1
                    setQuestions(questMas) */
                    quest = result
                }}
                name="radio-buttons-group"
            >
                <FormControlLabel value={0} control={<Radio sx={{ color: purple[800], '&.Mui-checked': { color: purple[600], }, }} />} label={ans1} />
                <FormControlLabel value={1} control={<Radio sx={{ color: purple[800], '&.Mui-checked': { color: purple[600], }, }} />} label={ans2} />
                <FormControlLabel value={2} control={<Radio sx={{ color: purple[800], '&.Mui-checked': { color: purple[600], }, }} />} label={ans3} />
                <FormControlLabel value={3} control={<Radio sx={{ color: purple[800], '&.Mui-checked': { color: purple[600], }, }} />} label={ans4} />
            </RadioGroup>
            <p>{result}</p>
        </FormControl>
    )

}

