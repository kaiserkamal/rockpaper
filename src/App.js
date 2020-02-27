import React, {Component} from 'react';
import PlayerCard from './PlayerCard';

class Game extends Component{
  constructor(){
    super();
    this.signs = ["rock","scissors","paper"]
    this.state ={
      playerOne:"rock",
      playerTwo:"scissors",

    }
  }

  // this is where methods are going to  live
  playGame = () => {

    this.setState({
     playerOne:this.signs[Math.floor(Math.random()*3)],
     playerTwo:this.signs[Math.floor(Math.random()*3)],
    })
  }
decideWinner = () =>{

const playerOne =this.state.playerOne
const playerTwo =this.state.playerTwo


     if(playerOne==playerTwo){
       return "this is a tie"

    }
    else if((playerOne=="rock" && playerTwo=="paper" )||
    (playerOne=="rock" && playerTwo==="scissors" )||(playerOne==="scissors" && playerTwo==="paper" )
    return "Player One wins"
    
  ))}


render(){
  return(
  <div className="container">
  <div>

<PlayerCard sign={this.state.playerOne}/>
<PlayerCard sign={this.state.playerTwo}/>

  </div>
  <div className="winner">
Here is the winner
  </div>
  <div>
<button type="button" onClick={this.playGame}>PLAY Game</button>
  </div>


  </div>
  )
}
}

export default Game;
