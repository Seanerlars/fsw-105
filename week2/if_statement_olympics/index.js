if (5 > 3) {
    console.log("is greater than")
}

var cat = 3; 

if  (cat == 3) {
    console.log("is the length");
} 


if  ("cat" == "dog") {
    console.log("the same");
} else {
    console.log("not the same");
}

var person = {
    firstName:"Bobby",
    age:12
}

if (person.age >= 18) {
    console.log(person.firstName, " can go to the movie");}
    else {
        console.log(person.firstName, "cannot go to the Movie")}

var person = {
     firstName:"Bobby",
    age:12}



    if (person.firstName.charAt(0) === "B")  {
        console.log( person.firstName, " is allowed to go to the movie");
    } 

    if (person.firstName.charAt(0) === "B" && person.age >=18) {
        console.log( person.firstName, " is allowed to go to the movie");
    } else {console.log( person.firstName + " is not allowed to go to the movie");
}
        

if (1===1){
    console.log("strict");}

else if (1=="1"){
console.log("loose");}

else (1 !== 1); {
    console.log("not equal at all");
}


