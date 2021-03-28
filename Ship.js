
class Ship {
  constructor(length){
    // length to represent ship prior to placement on board
    this.length = length;
    // location is an array of objects corresponding to hits (null if not hit there)
    this.hitLocations = new Array(length).fill(null);;
    this.sank = false;
  }
  // adds hit to the hitLocations array
  hit(x, y) {
    // add the x,  y coordinate object to the ships hitLocations array
    this.hitLocations.push({x, y})
  }

  isSunk() {
    if (this.hitLocations.indexOf(null) === -1) return true;
    else return false;
  }

}


export { Ship }