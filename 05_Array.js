// Массивы
const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']
// const people = [
//     {name: 'Кристиан', budget: 4200},
//     {name: 'Даяна', budget: 10000},
//     {name: 'Вика', budget: 1700},
// ]
const fib = [1, 1, 2, 3, 5, 8, 13]
// const fib = [1, 1, 2, 3, 5, 8, 13, '21', true,]

//Function
function addItemToEnd() {

}

//Method
// cars.push('Porche')
// cars.unshift('Жигули')
// console.log(cars)
// cars.shift()
// console.log(cars)

// const firstCar = cars.shift()
// const lastCar = cars.pop()
// console.log(firstCar)
// console.log(lastCar)
// console.log(cars)

// console.log(cars.reverse())
// console.log(cars)

// const index = cars.indexOf('БМВ')
// cars[index] = 'Копейка'
// console.log(cars)

// let findedPerson
// for (const person of people) {
//     if (person.budget === 10000) {
//         findedPerson = person
//     }
// }
// console.log(findedPerson)

// const person = people.find(person => person.budget === 10000)
// console.log(person)

// const index = people.findIndex(function(person) {
//     return person.budget === 10000
// const person = people.find(function(person) {
//     return person.budget === 10000
// })
// console.log(index)
// console.log(person)

// console.log(cars.includes('Мазда'))

// const upperCaseCars = cars.map(car => {
//     return car.toUpperCase()
// })

// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)

// const pow2Fib = fib.map(pow2)
// const filetredNumbers = pow2Fib.filter(num => num > 20)
// console.log(pow2Fib)
// console.log(filetredNumbers)

// const pow2Fib = fib.map(pow2).map(Math.sqrt)

// console.log(upperCaseCars)
// console.log(cars)
// console.log(pow2Fib)

// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)

const people = [
    {name: 'Кристиан', budget: 4200},
    {name: 'Даяна', budget: 10000},
    {name: 'Вика', budget: 1700},
]

const allBudget = people
    .filter(person => person.budget > 2000)
    .reduce((acc, person) => {
        acc += person.budget
        return acc
    }, 0)

console.log(allBudget)