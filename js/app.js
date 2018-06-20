console.log("Lands not a myth, I've seen it")

// A game round would look like this:

// You attack the first alien ship

// If the ship survives, it attacks you

// If you survive, you attack the ship again

// If it survives, it attacks you again

// Etc.

// If you destroy the ship, you have the option to attack the next ship or to retreat

// If you retreat, the game is over, perhaps leaving the game open for further developments or options.

// You win the game if you destroy all of the aliens.

// You lose the game if you are destroyed.






const myShip = {
  hull: 20,
  firepower: 5,
  accuracy: .7
  attackAlien(attack) {
    if (attack) {
       alienShips. -= 5;
    console.log('Direct hit!');
    }
    if (hull === 0){
      console.log("Alien scum destroyed");
      confirm("continue or retreat?");
    }
    if (confirm === false){
      console.log("retreat!"); 
      console.log("game over")
    }
  }
}

class Alien {
  constructor(hull, firepower, accuracy){
    this.hull: 3;
    this.firepower: 2;
    this.accuracy: .6;
  }
  attackHuman () {
       alienShips. -= 5;
    console.log('you were hit!');
    }
    if (hull === 0){
      console.log("Die human rebel scum");
      console.log("Game Over");
    }
  }
}

const game = {
  alienShips: [{}, {}],
  myShip: [],
  start() {
    for (i = 0; i < 6; i++){
      if (alienShip[i].hull === 0)
      this.alienShips.push(alienShip[i])  
      if (confirm === true)
      this.alienShips.push(alienShip[i])
    } else console.log("game over")
    // for(6) {
    //   new ship
    //   push new ship into this.alienShips      
    // }
  }
}

const alienShip0 = new Alien (4, 3, .6),
const alienShip1 = new Alien (4, 3, .6),
const alienShip2 = new Alien (4, 3, .6),
const alienShip3 = new Alien (4, 3, .6),
const alienShip4 = new Alien (4, 3, .6),
const alienShip5 = new Alien (4, 3, .6)
const alienShip = [
alienShip0
alienShip1 
alienShip2
alienShip3
alienShip4
alienShip5];







