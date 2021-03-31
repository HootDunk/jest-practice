
class Ship {
  constructor(length, name){
    // length to represent ship prior to placement on board
    this.length = length;
    // array of objects recording ship location and hit status
    this.location = new Array(length).fill(null);
    /*
    locationObj = {
      vertical: y,
      horizontal: x,
      isHit: true/false
    }
    */
    this.sank = false;
    this.name = name;
  }

  // set isHit = true for the matching location object
  hit(vertical, horizontal) {
    for (const obj of this.location){
      if (obj.vertical === vertical && obj.horizontal === horizontal){
        obj.isHit = true;
        break;
      }
    }
    if (this.isSunk()){
      this.sank = true;
    }
  }

  // pass in array of coordinate objects to set ship location on gameboard
  setLocation(coordinates) {
    // update each coordinate object with isHit = false;
    let newLocation = coordinates.map(obj => {
      return obj = {...obj, isHit: false}
    })
    this.location = newLocation;
  }

  isSunk() {
    for (const obj of this.location){
      if (obj.isHit === false){
        return false;
      }
    }
    return true;
  }

}


export { Ship }


  // if using with react
    // react state has gameboard and ship objects
    // we wrap setState around the functions that update these objects