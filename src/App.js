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

render(){
  return(
  <div className="container">
  <div>

<PlayerCard sign={this.state.playerOne}/>
<PlayerCard sign={this.state.playerTwo}/>

  </div>
  <div className="winner">
here is the winner
  </div>
  <div>
<button type="button">PLAY Game</button>
  </div>


  </div>
  )
}
}

export default Game;
