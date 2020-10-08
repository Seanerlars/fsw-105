var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
        name: "Mike",
        age: 12,
        gender: "male"
    },{
        name: "Madeline",
        age: 80,
        gender: "female"
    },{
        name: "Cheryl",
        age: 22,
        gender: "female"
    },
    {   name: "Sam",
        age: 30,
        gender: "male"
    },
        {
        name: "Suzy",
        age: 4,
        gender: "female"
        }
]

//Age
function isOldEnough (){
    for (i = 0; peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log("old enough");
    }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age <18){
        console.log("not old enough")
    }

} 
}
isOldEnough();
console.log("======");

//Age and Name

function isOldEnough (){
    for (i = 0; peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
        if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough");
    }
    else if(peopleWhoWantToSeeMadMaxFuryRoad[i].age <18){
        console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough");
    }

} 
}

isOldEnough();
    console.log("======");  

//Age,Name,Gender  



    function isOldEnough (){
        for (i = 0; peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
            if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male" && peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
                console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. He can go in");
        } 
        else if (peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "male" && peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, don't let HIM in");
        }
        
         if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female" && peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough. SHE'S good to see Mad Max Fury Road");}

        else if(peopleWhoWantToSeeMadMaxFuryRoad[i].gender == "female" && peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18){
            console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough, She cannot see the movie");}
    }}


    isOldEnough();
    console.log("======");  

    
  