import '../Style/Buttons.css';
import React from 'react';

class Button extends React.Component{
    render(){
        return(
            <>                
                <button className={this.props.isButtonClick ? 'button-click' : 'button-restart'}>
                { this.props.text }
                </button>                
            </>

        );
    }
}


export default Button;