import { useState } from "react";
import { BodyTitleStyle, BodyTextStyle } from "./style";
import { Button } from './Tests/button';
import { BasicCard } from "./psychologist/personCard";
import { textTop1, textTop2, textMain1, textMain2, textMain3, textMain4, lor } from "./data";
import psy2 from '../Body/psychologist/psy2.jpeg'
import psy1 from '../Body/psychologist/psy1.jpeg'
import psy3 from '../Body/psychologist/psy3.jpeg'
import psy4 from '../Body/psychologist/psy4.png'
import { Problem } from "./Tests/problem";
import { Text1 } from "./data_2";

export const Body = ( {finalResult, setFinalResult}) => {
    const [stateBody, setStateBody] = useState(0)
    const [result, setResult] = useState()
    const [q1, setQ1] = useState()
    const [q2, setQ2] = useState()
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

    function ResCompiletion(r1, r2) {
        setQuestions(questions.map((item, index) => {
            if (index === r1) { return (item + 1) } else { return (item) }
        }))
        setQuestions(questions.map((item, index) => {
            if (index === r2) { return (item + 1) } else { return (item) }
        }))

        return (
            { questions }
        )
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
            </BodyTextStyle>

            <BodyTitleStyle id="tests">Тест</BodyTitleStyle>
            <BodyTextStyle>
                <Problem question={'Как вы относитесь к недостаткам других людей?'} ans1={'Я нетерпим к недостаткам других.'} ans2={'Я принимаю людей такими, какие они есть.'} ans3={'Обычно я рассудителен и осторожен с окружающими.'} ans4={'Я предъявляю высокие требования и к себе и окружающим.'} result={result} setResult={setResult} setQuest={setQ1} />
                <Problem question={'Как вы относитесь к недостаткам других людей?'} ans1={'Я нетерпим к недостаткам других.'} ans2={'Я принимаю людей такими, какие они есть.'} ans3={'Обычно я рассудителен и осторожен с окружающими.'} ans4={'Я предъявляю высокие требования и к себе и окружающим.'} result={result} setResult={setResult} setQuest={setQ2} />
                <p>{ResCompiletion({ q1 }, { q2 })}</p>
                <p><Button func_state={setStateBody} stateButton={index_max(ResCompiletion({ q1 }, { q2 }))} /></p>
            </BodyTextStyle>
            <BodyTitleStyle id="psychos">Психологи</BodyTitleStyle>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <p><BasicCard name={'Светлана'} spec={'Детский психолог'} education={'МГУ'} methods={'Kлиническая психология'} cost={'7000 p'} photo={psy2} tg={'https://t.me/Daniella_2019'}></BasicCard></p>
                <p><BasicCard name={'Владимир'} spec={'Кризисный психолог'} education={'МГУ'} methods={'Когнитивно-поведенческая терапия (КПТ)'} cost={'5000 p'} photo={psy1} tg={'https://t.me/terbium65'}></BasicCard></p>
                <p><BasicCard name={'Вероника'} spec={'Психотерапевт'} education={'МГУ'} methods={'Терапия Принятия и ответственности (АСТ)'} cost={'15000 p'} photo={psy3} tg={'https://t.me/f1rA5h'}></BasicCard></p>
                <p><BasicCard name={'Сатья'} spec={'Семейный психолог'} education={'МГУ'} methods={'Психоанализ'} cost={'10000 p'} photo={psy4} tg={'https://t.me/Vil_vilka'}></BasicCard></p>
            </div>

            <BodyTitleStyle id="add_info">Дополнительная информация</BodyTitleStyle>

            <BodyTextStyle>
                <Text1 />

            </BodyTextStyle>
        </div>

    )
}
