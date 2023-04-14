import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import React from 'react';
import Button from './Components/Button';

class App extends React.Component{
  render(){
      
    return (
      
      <div className="App">
      <img
      className='img-fcc-logo'
      src={freeCodeCampLogo}
      alt='fcc logo'/>
        
     
       <div className="button-container">  
       <p 
       className='counter-container'>
        0
      </p> 
       <Button
       text="Click"
       isButtonClick={true}/>
       <Button
       text="Restart"
       isButtonClick={false} />
       </div>
      </div>
    );

  }
}


export default App;
