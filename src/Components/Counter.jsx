import '../Style/Counter.css';
import React from 'react';



class Counter extends React.Component{
    render(){
        return(
            <>
            <div className='counter-container'>
                {this.props.numClicks}
            </div> 
            </>
        )
    }
}

export default Counter;

