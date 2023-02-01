import React from "react";

class Header extends React.Component{
    render(){
        // destruct props
        const {
            welcome,
            title,
            subtitle,
            author: {firstName, lastName},
            date,
        } = this.props.data

        return(
            // set inline style of background for div
            <div style={{background: this.props.back}}>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{firstName} {lastName}</p>
                <small>{date}</small>
            </div>
            
        )
    }
}

export default Header;