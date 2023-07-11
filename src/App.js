import { useState } from "react";
import { Header } from './components/Header/header';
import { Body } from './components/Body/body'
import { AppLayout } from "./global_style";
import { ResultStyle } from "./components2/Body/style";

import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'


const App = () => {
  const [finalResult, setFinalResult] = useState(0)
  const hHead = 'Психологическая помощь'


  return (
    <AppLayout>
      <BrowserRouter>
        <Header hHeader={hHead} />
        <Routes>
          <Route path='/' element={
            <Body f_setres={setFinalResult} resreturn={finalResult} />  
          } />
          {
            finalResult === 0 &&
            <Route path='/results' element={
              <ResultStyle style={{ left: 0 }}>{finalResult}{'экстраверт'}</ResultStyle>
            } />
          }
          {
            finalResult === 1 &&
            <Route path='/results' element={
              <ResultStyle style={{ left: 0 }}>{finalResult}{'даун'}</ResultStyle>
            } />
          }
          {
            finalResult === 2 &&
            <Route path='/results' element={
              <ResultStyle style={{ left: 0 }}>{finalResult}{'fvhehgf'}</ResultStyle>
            } />
          }
          {
            finalResult === 3 &&
            <Route path='/results' element={
              <ResultStyle style={{ left: 0 }}>{finalResult}{'лузер'}</ResultStyle>
            } />
          }



        </Routes>

      </BrowserRouter>

    </AppLayout>
  );


}

export default App;
