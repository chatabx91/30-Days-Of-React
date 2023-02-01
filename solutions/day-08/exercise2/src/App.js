import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import imgProfile from './images/profileImage.jpg'


// App component
class App extends React.Component{

    constructor(props){
        super(props);
        // intialize state
        this.state = {
            // make default background color cyan
            background: 'cyan',
        }
    }

    // function changes background color to orange or cyan depending on state.
    changeBackground = ()=>{
        this.state.background === 'cyan' ? this.setState({background: 'orange'}) : this.setState({background: 'cyan'})
    }

    render(){
        // props
        const headerInfo = {
            welcome: 'Welcome to 30 Days Of React',
            title: 'Getting Started React',
            subtitle: 'JavaScript Library',
            author: {
                firstName: 'Bucky',
                lastName: 'Barnes'
            },
            date: 'Jan 31, 2023',            
        }

        const user = {img: imgProfile, ...headerInfo.author}


        return(
            <div>
                {/* pass props and state to each child component */}
                <Header data = {headerInfo}  back = {this.state.background}/>
                <Main user = {user} bk = {this.changeBackground} back ={this.state.background}/>
                <Footer date = {new Date()} back = {this.state.background}/>
            </div>
        )
    }
}

export default App;
