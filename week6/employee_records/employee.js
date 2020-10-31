var employees = [ "Daren", "John"]

function Worker(name, jobTitle, salary, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.status = status
    }

 Worker.prototype.printEmployeeForm = function() {
     console.log(" Name : " + this.name + " Job :" + this.jobTitle + " Salary : " + this.salary + " Status :" + this.status)
 }

   
   

let person1 = new Worker("Sam", "Human Resources", "$55,000", "full time");
console.log(person1);


let person2 = new Worker("Mary", "CEO", "$455,000", "full time");
console.log(person2);


let person3 = new Worker("Bob", "Janitor", "$15 an hour", "full time" );
console.log(person3);



person1.printEmployeeForm()
person2.printEmployeeForm()
person3.printEmployeeForm()


employees.push("Sam", "Mary" , "Bob")
console.log(employees)