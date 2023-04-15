import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.png';
import React from 'react';
import Button from './Components/Button';
import Counter from './Components/Counter';

class App extends React.Component{
  constructor(){
    super();
    this.state ={
      numClicks: 0,
    }
    this.manageClick = this.manageClick.bind(this)
  }

  manageClick(){
    this.setState(({ numClicks })=> ({ numClicks: numClicks + 1}));
    }
  render(){
      
    return (
      
      <div className="App">
      <img
      className='img-fcc-logo'
      src={freeCodeCampLogo}
      alt='fcc logo'/>
        
      <div className="button-container">  
      <Counter numClicks={this.state.numClicks}
      />
       <Button
       text="Click"
       isButtonClick={true}
       manageClick={this.manageClick} />

       <Button
       text="Restart"
       isButtonClick={false} />
       </div>
      </div>
    );

  }
}


export default App;
