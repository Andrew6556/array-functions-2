const myAwesomeArray = [[21,[1, 2]], [[3, 4],2,1,4], 5];

// самая простая альтернатива Flat
console.log(myAwesomeArray.join().split(","))



let users = [
    {
        name: 'Andrey', 
        age: 20
    }, 
    {
        name: 'Mad', 
        age: 15
    },
    {
        name: 'Igor', 
        age: 10
    },
    {
        name: 'El', 
        age: 41
    },
    {
        name: 'Ashab', 
        age: 91
    },
]
console.log(users.every(item => item.age > 18))