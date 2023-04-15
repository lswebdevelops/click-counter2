import '../Style/Counter.css';
import React from 'react';



class Counter extends React.Component{
    render(){
        return(
            <>
            <div className='counter-container'
            onClick={this.props.restartCounter}>
                {this.props.numClicks}
            </div> 
            </>
        )
    }
}

export default Counter;

