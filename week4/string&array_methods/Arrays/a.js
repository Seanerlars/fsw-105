var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function lastItem(){

vegetables.pop();
let b = vegetables.length
vegetables.push(b)
console.log("Vegetables Array: " + vegetables);

fruit.shift();
let a  = fruit.indexOf("orange");
fruit.push(a);
console.log("Fruits Array: " + fruit);

const food = fruit.concat(vegetables);
food.splice(4,2);
food.reverse();
food.toString();
console.log(food);

}

lastItem();
console.log("===")



