//A #1

const arr = [3, 6, 8, 2]


function fiveAndGreaterOnly(arr)  {
    const result = arr.filter(function(num){
        if(num >= 5)
        return num;
    })
    return result
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//A #2

function evensOnly(arr) {
    const result1 = arr.filter(function(num){
        if(num % 2 == 0)
        return num;
    })
    return result1;
}
console.log(evensOnly([3, 6, 8, 2]));



//Section B #1

const arr2 = [2, 5, 100]

function doubleNumbers(arr2){
    const result3 = arr2.map(function(num){
         return num * 2
    })
    return result3}
console.log(doubleNumbers([2, 5, 100]));

//B #2
const arr3 = [2,5,100]

function stringItUp(arr3){
    const result4 = arr3.map(function(num){
        return num.toString()
    })
  return result4
}
console.log(stringItUp([2, 5, 100]));

//C #1

const arr4 =[1,2,3,]

function total(arr4){
    const result = arr4.reduce(function(final, num){
        final += num
        return final 

    },0)
    return result
}
console.log(total(arr4));

//c #2

const arr5 = [1 , 2, 3]

function stringConcat(arr5){
    const result = arr5.reduce(function(num, final){
     num = final.toString() 
     
     return final
    }, 0)
    return result
}
console.log(stringConcat([1 , 2, 3]))

//C #3

var voters =[
    {name:'bob', age:'30', voted:'true'},
    {name:'jake', age:'32', voted:'true'},
    {name:'kate', age:'25', voted:'false'},
    {name:'sam', age:'20', voted:'false'},
    {name:'phil', age:'21', voted:'true'},
    {name:'ed', age:'55', voted:'true'},
    {name:'tami', age:'54', voted:'true'},
    {name:'mary', age:'31', voted:'false'},
    {name:'becky', age:'43', voted:'false'},
    {name:'joey', age:'41', voted:'true'},
    {name:'jeff', age:'30', voted:'true'},
    {name:'zach', age:'19', voted:'false'},]


function totalVotes(voters){
    const voteCount = voters.filter(function(voter){
    if (voter.voted == "true")
        return voter
    }, 0)
    console.log(voteCount);
}
console.log(totalVotes(voters))

//D #1

const arr6 = [1, 3, 5, 2, 90, 20]

function leastToGreatest(arr6){
    const result = arr6.sort(function(a, b){
        return a-b
    })
    return result
}
console.log(leastToGreatest(arr6));

//D #2


const arr7 = [1, 3, 5, 2, 90, 20]

function greatestToLeast1(arr7){
    const result = arr7.sort(function(a, b){
        return b - a
    })
    return result
}
console.log(greatestToLeast1(arr7));

//D #3

const arr9 = ['dog', 'wolf','by', 'family','eaten']

function lengthSort(arr9){
    const result = arr9.sort(function(a, b){
        return a.length-b.length 
    })
return result
}
console.log(lengthSort(arr9));