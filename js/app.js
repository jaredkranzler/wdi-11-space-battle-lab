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
    for (i = 0; i < 6; i++){
      this.moreAliens.push(alienShip[0]);
      if (moreAliens[i].hull === 0){
      console.log("Alien scum destroyed");
      this.moreAliens.splice(0, 1);
      this.moreAliens.push(alienShip[i]);
      console.log("hear comes another one!");
      }else if (moreAliens == 0){
      Console.log("You saved the earth!")
      }else if (myShip.hull === 0){
      console.log("Die human rebel scum");
      console.log("Game Over");
      } else console.log("game over");
    }
//user
const myShip = {
  hull: 20,
  firepower: 5,
  accuracy: .7,
  //action
  attackAlien(){
    game.moreAliens[i].hull -= 5;
    console.log('Direct hit!');
  }
};


// random whole number between two numbers
function getRandom(x, y) {
  return Math.floor(Math.random()*(y - x +1) + x);
} 
// console.log(getRandom(3, 6));

// random number between .6 && .8
function getRandomD(x, y) {
  return (((Math.random()*2)+6)/10);
}
// console.log(getRandom(.6, .8));


class Alien {
  //traits
  constructor(hull, firepower, accuracy){
    this.hull = (getRandom(3, 6))
    this.firepower = (getRandom(2, 4));
    this.accuracy = getRandomD(.6, .8);
  }
  //action
  attackHuman () {
    myShip.hull -= 3;
    console.log("you were hit!");
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
  moreAliens: [],
  myShip: [],
    ships: 6,
  start(){
    const gameTimer = setInterval( () => {
      console.log('hi', this)
      this.timer = this.timer - 1; //this.timer--
      if (this.timer <= 0){
        console.log('GAME OVER');
        clearInterval(gameTimer);
      }
    }, 1000); 
    // rate at which the timer counts down 
    // javascript works in miliseconds, this is one second
  }
}


