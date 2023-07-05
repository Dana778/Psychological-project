import React from "react";
import {Header} from './components/Header/header'; 
import {Body} from './components/Body/body'

const App = () => {
  
    const hHead = 'Психологическая помощь'
    return (
    <div className="mainstyle"> 
      <Header hHeader = {hHead}/>
      <Body hBody = {''}/>
    </div>
    ); 
  
 
}

export default App;
