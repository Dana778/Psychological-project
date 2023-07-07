import Radio from '@mui/material/Radio';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup'; import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import * as React from 'react';
import { purple } from '@mui/material/colors';

export function Problem({ question, ans1, ans2, ans3, ans4, result, questions, setResult, setQuestions, f_setres, resreturn }) {

    function index_max(arr) {
        var i, maxV, maxP;
        for (i = 0; i < arr.length; i++) {
            if (typeof maxV === "undefined" || arr[i] > maxV) {
                maxV = arr[i];
                maxP = i;
            }
        }
        return maxP;
    }
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">{question}</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                value={result}
                onChange={e => {
                    setResult(e.target.value)
                    const questMas = [0, 0, 0, 0]
                    questMas[e.target.value] += 1
                    setQuestions(questMas)
                    f_setres(index_max(questMas))
                }}
                name="radio-buttons-group"
            >
                <FormControlLabel value={0} control={<Radio sx={{ color: purple[800], '&.Mui-checked': { color: purple[600], }, }} />} label={ans1} />
                <FormControlLabel value={1} control={<Radio sx={{ color: purple[800], '&.Mui-checked': { color: purple[600], }, }} />} label={ans2} />
                <FormControlLabel value={2} control={<Radio sx={{ color: purple[800], '&.Mui-checked': { color: purple[600], }, }} />} label={ans3} />
                <FormControlLabel value={3} control={<Radio sx={{ color: purple[800], '&.Mui-checked': { color: purple[600], }, }} />} label={ans4} />
            </RadioGroup>
            <p>{questions}</p>
            <p>{resreturn}</p>
        </FormControl>
    )

}