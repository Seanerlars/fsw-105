var readlineSync = require("readline-sync")

const playerName = readlineSync.question("What is your name?");

readlineSync.question('Hello ' + playerName + ' Welcome to Fight or Flight. You will be walking and fighting off vicious enemies on your journey. Press enter to begin. Good luck');

const badGuys = ['Thief', "Ghost", "Evil Rabbit", "Big-foot"];
const treasure = ['Gold', 'Med-Kit', 'Special Weapon', "Limited Edition Nike Jordan Sneakers"];
var prize = [];
let userHealth = 40;
const options = ['Walk', 'Exit', 'Print']
let pickUp = treasure[Math.floor(Math.random()*treasure.length)];

function game() {

    const attackPower = Math.floor(Math.random() * (5 - 4 + 3) + 5);
    const badGuy = badGuys[Math.floor(Math.random()* badGuys.length)];
    let badGuysHealth = 30;
    const badGuysAbility = Math.floor(Math.random()* (5 - 3 + 2)+ 5);

    const index = readlineSync.keyInSelect(options, 'What would you like to do?');

    if (options[index] == 'Exit'){
        return userHealth = 0;
    } else if (options[index] == 'Print'){
        console.log(playerName + ':  \n' + userHealth + '\nTreasure ' + pickUp);
    }else if (options[index] == 'Walk'){
        let key = Math.random();
        if (key <= .3){
            console.log('Walking..');
        }else if (key >= .3){
            console.log(badGuy + ' showed up');
                while(badGuysHealth > 0 && userHealth > 0){
                    const user = readlineSync.question('What do you want to do? enter "r" to run and "a" to attack: ');
                    switch(user){
                        case 'r':
                            const run = Math.random();
                            if(run <.5){
                                console.log(' Before you can run away ' + badGuy + " attacks you with " + badGuysAbility);
                            }else {
                                console.log(' You ran away ');
                                break;
                            }

                            case 'a':
                                badGuysHealth -= attackPower;
                                console.log(' You attacked ' + badGuy + ' with ' + attackPower + ' attack power');

                                userHealth -= badGuysAbility;
                                console.log(' Enemy just attacked you with ' + badGuysAbility + ' attack power');

                                if(badGuysHealth <= 0){
                                    console.log(' You killed ' + badGuy + '.\n' + badGuy + ' left: ' + pickUp );
                                    let loot = Math.random();
                                    if (loot <= .3){
                                        prize.push(pickUp);
                                    }
                                }else if (userHealth <= 0){
                                    console.log(badGuy + ' has killed you');
                                }
                    }
                }
        }
    }

}
while(userHealth > 0){
    userRestore = function(){
        userActive = true;
        userHealth = 40;
    };
    userRestore();
    game();
}