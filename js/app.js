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

//user
const myShip = {
  hull: 20,
  firepower: 5,
  accuracy: .7,
  //action
  attackAlien(){
    game.alienShips[i].hull -= 5;
    console.log('Direct hit!');
  }
};
//random between two numbers
function getRandom(x, y) {
  return Math.floor(Math.random()*(y - x +1) + x);
 }
 //Alien profile
class Alien {
  //traits
  constructor(hull, firepower, accuracy){
    this.hull = 3;
    this.firepower = 3;
    this.accuracy = 2;
  }
  //action
  attackHuman () {
       myShip.hull -= 3;
    console.log('you were hit!');
  }
}

const alienShip0 = new Alien ();
const alienShip1 = new Alien ();
const alienShip2 = new Alien ();
const alienShip3 = new Alien ();
const alienShip4 = new Alien ();
const alienShip5 = new Alien ();
const alienShip = [
alienShip0,
alienShip1,
alienShip2,
alienShip3,
alienShip4,
alienShip5];

const game = {
  alienShips: [],
  myShip: [],
  start() {
    for (i = 0; i < 6; i++){
      this.alienShips.push(alienShip[0]);
      if (alienShips[i].hull === 0){
      console.log("Alien scum destroyed");
      this.alienShips.splice(0, 1);
      this.alienShips.push(alienShip[i]);
      console.log("hear comes another one!");
      }if (alienShips == 0){
      Console.log("You saved the earth!")
      }if (confirm === false){
      console.log("retreat!"); 
      console.log("game over")
      } else if (myShip.hull === 0){
      console.log("Die human rebel scum");
      console.log("Game Over");
      } else console.log("game over");
    }
  }
}


