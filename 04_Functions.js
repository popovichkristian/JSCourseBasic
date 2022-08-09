// 1. Functions (Функции)

//Function Declaration
// function greet (name) {
//     console.log('Привет - ' + name)
// }

//Function Expression
// const greet2 = function greet2(name) {
//     console.log('Привет2 - ' + name)
// }

// greet('Даяна')
// greet2('Даяна')

//2. Анонимные функции
// let counter = 0
// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval(interval) // clearTimeout
//     } else {
//         console.log(++counter)
//     }
// }, 1000)

//3. Стрелочные функции
// function greet (name) {
//     console.log('Привет - ' + name)
// }
// const arrow = (name) => {
//     console.log('Привет - ' + name)
// }

// const arrow2 = name => console.log('Привет - ' + name)


// arrow('Kristian')
// arrow2('Kristian Popovyvh')

// const pow2 = num => {
//     return num ** 2
// }
// const pow2 = num => num ** 2

// console.log(pow2(5))

// 4 Параметры по умолчанию
const sum = (a = 40, b = a * 2) => a + b
console.log(sum(100, 100))
console.log(sum())

function sumAll(...all) {
    let result = 0
    console.log(all)
    for (let num of all) {
        result += num
    }
    return result
}

const res = sumAll(1, 2, 3, 4, 5, 6)
console.log(res)

// 5 Замыкание
function createMember(name) {
    return function(lastName) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Kristian')
console.log(logWithLastName)