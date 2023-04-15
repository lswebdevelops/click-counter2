import '../Style/Buttons.css';
import React from 'react';

class Button extends React.Component{
    render(){
        return(
            <>                
                <button className={this.props.isButtonClick ? 'button-click' : 'button-restart'}
                    onClick={this.props.manageClick}>
                { this.props.text }
                </button>                
            </>

        );
    }
}


export default Button;