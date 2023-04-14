import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import React from 'react';
import Button from './Components/Button';
import Counter from './Components/Counter';

class App extends React.Component{
  render(){
      
    return (
      
      <div className="App">
      <img
      className='img-fcc-logo'
      src={freeCodeCampLogo}
      alt='fcc logo'/>
        
      <div className="button-container">  
      <Counter />
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
