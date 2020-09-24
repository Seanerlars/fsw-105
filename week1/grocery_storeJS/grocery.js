
//Function
var shopper = {
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
console.log(shopper.nameId())



