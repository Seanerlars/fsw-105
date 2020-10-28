let name= "john"
const age= 101

function runForLoop(pets) {
    let petObjects = []
    for (let i=0; i < pets.length; i++){
        let pet = {type:pets[i]}
        name; 
        if (pets[i] === "cat"){
            name = "fluffy"
        }else{
            name= "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
        console.log("man name: ", name)
        return petObjects
}
runForLoop(["cat", "dog", ])

// const carrots = ['bright orange', 'ripe' , 'rotten']

// function mapVegetables(arr) 
// {return arr.map(function(carrot)
//     {return {type: 'carrot', name: carrot}})}


    const carrots = ['bright orange', 'ripe' , 'rotten']

    mapVegetables = arr => {
        return arr.map(carrot => {return {type: 'carrot', name: carrot} });
    }
    
    console.log(mapVegetables([carrots]))

    const people = [

        {
            name: "Princess Peach",
            friendly: false
        },
        {
            name: "luigi",
            friendly: true
        },
        {
            name: "mario",
            friendly: true
        },
        {
            name: 'bowser',
            friendly: false
        }
    ]
    
     filterForFriendly = arr => {
        return arr.filter(person => {return {friendly: true, person}})
    }
    console.log(filterForFriendly([people]))



    // function doMathSum (a, b){
    //     return a + b
    // }

    function doMathSum (a, b){
        return a + b
    }
    doMathSum = arr => { 
        arr.map(num => a + b)
    }

    // var produceProduct = function (a,b){
    //     return a * b
    // }
 
produceProduct = arr => {
    arr.map(num => a *b )
}

const newString = [
    {firstName: "jane"},
    {lastName: "Doe"},
    {age: 100}
]


