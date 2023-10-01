const myAwesomeArray = [[21,[1, 2]], [[3, 4],2,1,4], 5];

// самая простая альтернатива Flat
// console.log(myAwesomeArray.join().split(","))



let users = [
    {
        name: 'Andrey', 
        age: 20,
        status:"active"
    }, 
    {
        name: 'Mad', 
        age: 15,
        status:"active"
    },
    {
        name: 'Igor', 
        age: 10,
        status:"active"
    },
    {
        name: 'El', 
        age: 41,
        status:"passive"
    },
    {
        name: 'Ashab', 
        age: 91,
        status:"active"
    },
]
// console.log(users.every(item => item.age > 18))

// Задание для every и some:
// console.log(users.every(item => item.status == "active"))
// console.log(users.some(item => item.status == "active"))

// Задание для fill

// function replaceValue(numbers, value){
//     return numbers.fill(value)
// }
// console.log(replaceValue([1,2,3,4], 1))

// Задание для flat:

// const data = [[1,[10,11], 2, 3], [1, 3, 4], [4, 5, 6]];
// console.log(data.flat(2))

// Сложное комбинированное задание

let orders = [
    {
        goods:["хлеб","греча","наушники"],
        status:"доставлен",
        id:1,
        price:10000,
    }, 
    {
        goods:["планшет","ноутбук"],
        status:"доставлен",
        id:2,
        price:30000,
    },
    {
        goods:["iphone XR"],
        status:"доставлен",
        id:3,
        price:15000,
    },
    {
        goods:[],
        status:"в обработке",
        id:4,
        price:0,
    }
]
//Используя `every` и `some`, определите:
// - Все ли заказы доставлены (статус "доставлен")?

// console.log(orders.every(order => order.status == "доставлен"))

// - Есть ли хотя бы один заказ с товарами, стоимость которых превышает определенную сумму?
// console.log(orders.some(order => order.price >= 30000))

// - Есть ли хотя бы один заказ со статусом "в обработке", но без товаров?

// console.log(orders.some(order => {
//     return order.goods.length == 0 && order.status == "в обработке";
// }))