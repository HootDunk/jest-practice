
class Player{
  // type is either human or computer
  constructor(type, isTurn) {
    this.type = type;
    this.isTurn = isTurn;
  }

  // players take turns by attacking enemy gameboard.
  takeTurn (vertical, horizontal){

  }
}


// before starting on the UI, play the 
// entire game using the command line

// copies of the game state are made based on the class objects throughout
// the lifecycle of the game?  Seems to be a bit outside of the single
// source of truth idea though.  


// Classes
  // Ship
  // Gameboard
  // Player and maybe CPU?
  // Game

// Other modules
  // DOM Interaction

// display both players boards and render them using information from
// the Gameboard class

// Gameboard should have info for most of the UI state it seems
// who

export default Player;