import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from "./components/Navbar"
import Title from "./components/Title";
import Card from './components/Card';
//import Counter from './components/Counter';
import pictures from "./pictures.json";




class App extends Component {
  // Setting this.state.friends to the friends json array
    state = {
      pictures,
      pictureCopy: pictures,
      currentScore: 0,
      topScore: 0
    };

  //This function is triggered by an 'on-click' and 
  //will rearrange the pictures
  rearrange = id => {
    console.log("setup corrrrrect");
    console.log(this.state.pictureCopy);
    let copyArr = this.state.pictureCopy
    copyArr.sort(function(a, b){return 0.5 - Math.random()});
    this.setState({
      pictureCopy: copyArr
    });

  };

  //This function is triggered by an 'on-click' and 
  //will rearrange the pictures
  handleClick = (id) => {
    let copyCopy = this.state.pictureCopy
    console.log(this.state.pictureCopy);
    for (let x = 0 ; x < this.state.pictureCopy.length ; x++) {
      if(this.state.pictureCopy[x].id === id) {
      console.log(this.state.pictureCopy[x])
      copyCopy[x].clicked = true
      console.log(copyCopy)
      this.setState({
        pictureCopy: copyCopy
      })
      this.rearrange();
      }

    }
    //const {id, clicked} = props;
    //console.log(props)
    // let guessedCorrectly = true ;
    // const newData = this.state.pictures.map(picture => {
    // const newItem = { ...picture };
      // if (newItem.id === id) {
      //   if (!newItem.clicked) {
      //     newItem.clicked = true;
      //     guessedCorrectly = true;
          
      //   } else {
      //     //if  clicked:true then restart the game
      //   }
      // }
      // return newItem;
    //})
  };

  //This section renders the components
    render() {
      return (

        <Wrapper>
          <Navbar 
          currentScore={this.state.currentScore}
          topScore={this.state.topScore}></Navbar> 
          <Title></Title> 
          {this.state.pictureCopy.map(picture =>(
            <Card 
              name={picture.name} 
              image= {picture.image} 
              key={picture.id} 
              id={picture.id} 
              handleClick = {this.handleClick} 
              clicked = {picture.clicked}
            ></Card>
          ))}


        </Wrapper>

          
      );
    }
}

export default App;

//Notes:
//A unique key must be rendered with every new card component,
//rember that the key isn't passed to the DOM and in order to extract
//that value and be able to see it in the DOM, you need to place the value in
//a prop with a diffrent name