import React from "react";
import {Header} from './components/Header/header'; //какого хуя
import { MainStyle } from "./main_style";

const App = () => {
  
    const hHead = 'Психологическая помощь'
    return (
    <MainStyle> //он меня игнорирует
      <Header hHeader = {hHead}/>
    </MainStyle>
    ); 
  
 
}

export default App;
