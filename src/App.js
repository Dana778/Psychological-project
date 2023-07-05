import React from "react";
import {Header} from './components/Header/header'; 

const App = () => {
  
    const hHead = 'Психологическая помощь'
    return (
    <div className="mainstyle"> 
      <Header hHeader = {hHead}/>
    </div>
    ); 
  
 
}

export default App;
