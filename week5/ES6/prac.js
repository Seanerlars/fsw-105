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
    return arr.filter(person => {return {friendly: person}})
}
console.log(filterForFriendly([people]))