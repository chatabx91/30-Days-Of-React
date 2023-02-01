import React from "react";

// state is an object in React which lets the component re-render when state data changes

// how to set the state?
//  - set an initial state inside the constructor
//  - using this.state ={}

class App extends React.Component{
  constructor(props){
    super(props);
    // set intital state of count to be zero
    this.state ={
      count: 0,
      image: 'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20221128065650/ri/750/src/images/news/ImageForNews_732113_16696366120124181.jpg',
    }
  }

  // method adds one to the state
  addOne = () =>{
    this.setState({count: this.state.count + 1});
  }

  // method subtracts one from the state
  subtractOne = () => {
    this.setState({count: this.state.count - 1});
  }

  // method changes animal photo
  changeAnimal = () =>{
    let dogURL =
      'https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg';
    let catURL =
      'https://d2jx2rerrg6sh3.cloudfront.net/image-handler/ts/20221128065650/ri/750/src/images/news/ImageForNews_732113_16696366120124181.jpg';
    
      // ternary if/else to swap image
    let image = this.state.image === catURL ? dogURL : catURL;
    // set new state of the image based on if/else statement
    this.setState({ image })
    
  }

  render(){
    // state prop
    const count = this.state.count;
    return(
      <div className="app">
        <h1>The state of count is: {count}</h1>
        {/* Change state using this.setState method */}
        {/* button calls addOne function on click */}
        <button onClick={this.addOne}>Add +1</button>{' '}
        {/* button call subtractOne function on click */}
        <button onClick={this.subtractOne}>Subtract -1</button>
        <h2>30 Days Of React</h2>
        <div className="imageContainer">
          <img src={this.state.image} alt = 'animal'/>
        </div>
        <button onClick={this.changeAnimal}>Change</button>
      </div>
    )
  }
}

export default App;