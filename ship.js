
const Ship = class {
    constructor(length, name){
        let array = [];
        for (let i = 0; i < length; i++){
            array.push("O")
        }
        this.length = array;
        this.name = name
        this.sunk = false;

    }

     hit( position ){
        console.log('hit' + position);
        this.length[position] = 'X'
    }
    isSunk(){
        let counter = 0; //inits counter
        
        this.length.forEach(marker => { //adds to counter for every X found in this.length array
            if (marker === "X") {
                counter++
            }
        })
        if (counter === this.length.length){
            console.log(`${this.name} is sunk`)
            this.sunk = true;
        }
        console.log(this.length)
    }
}
const Carrier = new Ship(5, "Carrier");
const Battleship = new Ship(4 , "Battleship");
const Cruiser = new Ship(3 , "Cruiser");
const Submarine = new Ship(3 , "Submarine");
const Destroyer = new Ship(2 , "Destroyer");

console.log(Carrier)
Battleship.hit(0)
Battleship.hit(1)
Battleship.hit(2)
Battleship.hit(3)
Battleship.isSunk();
console.log(Battleship)