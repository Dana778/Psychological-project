import { useState } from "react";
import { BodyTitleStyle, BodyTextStyle } from "./style";
import { Button } from './Tests/button';
import { BasicCard } from "../../psychologist/personCard";
import { textTop1, textTop2, textMain1, textMain2, textMain3, textMain4, lor } from "./data";

import { Problem } from "./Tests/problem";


export const f = 23;

export const Body = ({ f_setres, resreturn }) => {
    const [stateBody, setStateBody] = useState(true)
    const [result, setResult] = useState()
    let [questions, setQuestions] = useState([0, 0, 0, 0])

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
            <BodyTextStyle>
                <Problem question={'Как вы относитесь к недостаткам других людей?'} ans1={'Я нетерпим к недостаткам других.'} ans2={'Я принимаю людей такими, какие они есть.'} ans3={'Обычно я рассудителен и осторожен с окружающими.'} ans4={'Я предъявляю высокие требования и к себе и окружающим.'} result={result} questions={questions} setResult={setResult} setQuestions={setQuestions} f_setres={f_setres} resreturn={resreturn}/>
                <Problem question={'Как вы относитесь к недостаткам других людей?'} ans1={'Я нетерпим к недостаткам других.'} ans2={'Я принимаю людей такими, какие они есть.'} ans3={'Обычно я рассудителен и осторожен с окружающими.'} ans4={'Я предъявляю высокие требования и к себе и окружающим.'} result={result} questions={questions} setResult={setResult} setQuestions={setQuestions} f_setres={f_setres} resreturn={resreturn}/>
                <p><Button func_state={setStateBody} stateButton={Math.max(questions)} /></p>
            </BodyTextStyle>
            <BodyTitleStyle id="psychos">Психологи</BodyTitleStyle>
            <BasicCard name = {'Светлана'} spec={'Детский психолог'}></BasicCard>


            <BodyTitleStyle id="add_info">Дополнительная информация</BodyTitleStyle>
        </div>

    )
}
