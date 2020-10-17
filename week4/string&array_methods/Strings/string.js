function upperCaseAndLowercase(str) {
    var upperAndLower = str.toUpperCase() + str.toLowerCase();
    return "Your output: " + upperAndLower
    }

    console.log(upperCaseAndLowercase(" I am on the computer"));
    console.log("======")
        
function halfAndRoundDown(str){
    var halfRound = Math.floor(str.length / 2);
    return "Return String: " + halfRound; 
}
console.log(halfAndRoundDown(" Iamonmycomputer"));
console.log(halfAndRoundDown(" Iamstillsittingatmycomputer"))

function returnHalf(str){
    var half = str.slice(0, 16.5);
    return "half output: " + half;
}
console.log(returnHalf("I am still sitting at my computer"))
    

function halfAndHalf(str){
    var firstHalf =    str.toUpperCase(0, 24)
    var secondHalf =  str.toLowerCase(25,48)
   return firstHalf + secondHalf
     
}
console.log(halfAndHalf("I am still sitting on my computer doing homework"))


