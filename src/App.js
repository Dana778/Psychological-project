import { useState } from "react";
import { Header } from './components/Header/header';
import { Body } from './components/Body/body'
import { AppLayout } from "./global_style";
import { ResultStyle } from "./components2/Body/style";
import { BasicCard } from "./components/Body/psychologist/personCard";
import psy2 from './components/Body/psychologist/psy2.jpeg'
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'


const App = () => {
  const finalResult = -1
  const hHead = 'Психологическая помощь'


  return (
    <AppLayout>
      <BrowserRouter>
        <Header hHeader={hHead} />
        <Routes>
          <Route path='/' element={
            <Body />
          } />
          <Route path='/extravert' element={
            <ResultStyle style={{ left: 0 }}>{'экстраверт'}{<BasicCard name={'Светлана'} spec={'Детский психолог'} education={'МГУ'} methods={'Kлиническая психология'} cost={'7000 p'} photo={psy2} tg={'https://t.me/Daniella_2019'}></BasicCard>
            }</ResultStyle>
          } />
          <Route path='/introvert' element={
            <ResultStyle style={{ left: 0 }}>{'интроверт'}{<BasicCard name={'Светлана'} spec={'Детский психолог'} education={'МГУ'} methods={'Kлиническая психология'} cost={'7000 p'} photo={psy2} tg={'https://t.me/Daniella_2019'}></BasicCard>
            }</ResultStyle>
          } />
         <Route path='/choleric' element={
            <ResultStyle style={{ left: 0 }}>{'холер'}{<BasicCard name={'Светлана'} spec={'Детский психолог'} education={'МГУ'} methods={'Kлиническая психология'} cost={'7000 p'} photo={psy2} tg={'https://t.me/Daniella_2019'}></BasicCard>
            }</ResultStyle>
          } />
          <Route path='/sangvinik' element={
            <ResultStyle style={{ left: 0 }}>{'сангв'}{<BasicCard name={'Светлана'} spec={'Детский психолог'} education={'МГУ'} methods={'Kлиническая психология'} cost={'7000 p'} photo={psy2} tg={'https://t.me/Daniella_2019'}></BasicCard>
            }</ResultStyle>
          } />
         



        </Routes>

      </BrowserRouter>

    </AppLayout>
  );


}

export default App;
