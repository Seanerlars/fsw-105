const readline = require("readline-sync")
const name= readline.question("What is your name")

const introMessage =  name + ' Welcome to the Escape Room Simulation';
console.log(introMessage);

let playerAlive = true;
let doesPlayerHaveKey = false;

while (playerAlive == true){
    const menuOptionsID = readline.keyIn('press 1 to put hand in hole \n Press 2 to find the key \n press 3 to open the door', {limit: '$<1-3>'});
    if (menuOptionsID == 1){
        playerAlive = false;
        console.log('oh no, you are dead. The game is over');

    }
else if (menuOptionsID == 2 && doesPlayerHaveKey == false)
        {playerAlive = true;
        console.log('you have found the key')
        doesPlayerHaveKey = true;
   
}
else if (menuOptionsID == 2 && doesPlayerHaveKey == true){
        playerAlive = true;
        doesPlayerHaveKey = true;
        console.log('You already have the key')
    doesPlayerHaveKey == true;
}
else if (menuOptionsID == 3 && doesPlayerHaveKey == false){
    playerAlive = true;
    doesPlayerHaveKey = false;
    console.log('You do not have the key to open the door')
}
else if (menuOptionsID == 3 && doesPlayerHaveKey == true){
    playerAlive = true;
    doesPlayerHaveKey = true;
    console.log("Congrats! You have escaped the room")

    doesPlayerHaveKey == false;
}
}
