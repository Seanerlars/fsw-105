//String
var name = "Frank"
console.log(name)

//Number
var age = 54
console.log(age)

//Boolean
var isHealthy = false
console.log(isHealthy)

//Function
var person = {
    firstName: "Frank",
    lastName: "Reynolds",
    age: 54,
    isHealthy: false,
    id: 5765,
    groceryCart: ["coffe", "soda", "meatballs", "cheese","tortillas" ],
    nameId: function () {
        return this.firstName + "" + this.lastName + "" + this.id;
    }   
};
console.log(person)



