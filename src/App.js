import React from "react";
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

  const hHead = 'Психологическая помощь'
  return (
    <AppLayout>
      <BrowserRouter>
        <Header hHeader={hHead} />
        <Routes>
          <Route path='/' element={
            <Body hBody={''} />
          } />
          <Route path='/results' element={
            <ResultStyle style={{paddingTop: 160, left:0}}>ты молодец</ResultStyle>
          } />
        </Routes>

      </BrowserRouter>

    </AppLayout>
  );


}

export default App;
