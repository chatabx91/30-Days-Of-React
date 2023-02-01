import React from "react";

class Main extends React.Component{
    render(){
        // destruct props
        const {
            img,
            firstName,
            lastName
        } = this.props.user;

        const {bk} = this.props;

        // inline styling for buttons
        const myStyles = {
            background: this.props.back,
            padding: '10px',
            borderRadius: '10px',
            margin: '3px'
        }

        return(
            <div>
                <div className="pic">
                    <img src={img} alt = 'profile'/>
                </div>
                <p style={{fontSize: '25px'}}>{firstName} {lastName}</p>
                <button style={myStyles}>Greet People</button>
                <button style={myStyles}>Show Time</button>
                {/* onclick call function passed as prop from parent component */}
                <button style={myStyles} onClick={bk}>Change Background</button>
            </div>
        )
    }
}

export default Main;