import React from "react";
import { Header } from './components/Header/header';
import { Body } from './components/Body/body'
//import 'global_style'

import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom'

const App = () => {

  const hHead = 'Психологическая помощь'
  return (
    <div className="mainstyle">
      <BrowserRouter>
        <Header hHeader={hHead} />
        <Routes>
          <Route path='/' element={
            <Body hBody={''} />
          } />
          <Route path='/results' element={
            <p>ты молодец</p>
          } />
        </Routes>

      </BrowserRouter>

    </div>
  );


}

export default App;
