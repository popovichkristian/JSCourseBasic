// 1. Переменные - Variables (Переменные - это сущности в которых хранятся значения)
//
// // var name = 'Kristian' // VAR - устаревший тип переменных. Сейчас лучше обходится только let, const.
// // const lastName = 'Popovich' // тип данных - string / Если в последствии не планируется изменять значение переменной - то лучше использовать const.
// const firstName = 'Kristian'
// let age = 26 // тип данных - number
// const isProgrammer = true // тип данных - boolean
// // lastName = 'Ion' //переменные которые находятся в CONST - в последствии невозможно переопределять (менять)...

// // name = 'Ivan' //переменные которые находятся в VAR - в последствии можно переопределять (менять)...
// // age = 28 //переменные которые находятся в LET - в последствии тоже можно переопределять (менять)...

// // console.log(name)
// // console.log(age)
// // console.log(isProgrammer)
//
// 2. Мутирование
// // console.log('Имя человека: ' + name + ', а возраст человека: ' + age)
// // console.log(age.toString())
// // alert('Имя человека: ' + name + ', а возраст человека: ' + age)
// // prompt('Ведите фамилию')

// // const lastName = prompt('Введите фамилию:')
// // alert(firstName + ' ' + lastName)
//
// 3 Опереторы
// let currentYear = 2022
// const birthYear = 1998
// // const age = currentYear - birthYear
// // console.log(age)

// const a = 10
// const b = 5

// let c = 32
// // // c = c + a
// // c += a // c = c + a
// // c -= a // c = c - a
// // c *= a // c = c * a
// // c /= a // c = c / a

// // console.log(a + b)
// // console.log(a - b)
// // console.log(a / b)
// // console.log(a * b)
// // console.log (currentYear++)
// // console.log (--currentYear)
// // console.log (c)

// // 4. Типы данных
// const isProgrammer = true
// const name = 'Kristan'
// const age = 24
// let x
// console.log(typeof isProgrammer)
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(null)

// 5. Приоритет операторов
// const fullAge = 24
// const birthYear = 1998
// const currentYear = 2022

// //< > <= >=
// const isFullAge = (currentYear - birthYear) >= fullAge // 26 >= 27
// console.log(isFullAge)

// 6 Условные опператоры
// const courseStatus = 'fail' // ready, fail, pending
// if (courseStatus === 'ready') {
//     console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
//     console.log('Курс пока находится в разработке')
// } else {
//     console.log('Курс не получился')
// }

// const isReady = true
// if (isReady === true) {
//     console.log ('Все готово')
// } else {
//     console.log ('Все не готово')
// }

// isReady ? console.log('Все готово!') : console.log('Все не готово!') // Тернарное выражение (встречается часто в простых условий)

// const num1 = 42 // number
// const num2 = '42' // string

// console.log(num1 === num2)

// 7 Булевая логика (https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Expressions_and_Operators#%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B)


// 8 Фукнкции
// function calculateAge (year) {
//     return 2022 - year
// }
// const myAge = calculateAge(1998)
// console.log(myAge)

// function logInfoAbout(name, year) {
//     const age = calculateAge(year)

//     if (age > 0) {
//         console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//     } else {
//         console.log('Вообще-то это уже будущее!')
//     }

// }

// logInfoAbout('Kristian', 1998)
// logInfoAbout('Dayana', 1996)
// logInfoAbout('Dayana', 2023)

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Фиат', 'Форд', 'Фод']
// const cars = new Array('Мазда', 'Мерседес', 'Фиат', 'Форд')
// console.log(cars.length)

// console.log(cars[0])
// console.log(cars[2])
// console.log(cars[3])

// cars[0] = 'Porche'
// console.log(cars)
// cars[cars.length] = 'Жигули'
// console.log(cars)

// 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Фиат', 'Жигули']

// for (let i = 0; i < cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }

// for (let car of cars) {
//     console.log(car)
// }

// 11 Объекты
const person = {
    firstName: 'Kristian',
    lastName: 'Popovych',
    year: 1998,
    languages: ['Русский', 'Украинский', 'Румынский', 'Английский'],
    hasWife: false,
    greet: function() {
        console.log('greet from person')
    }
}
console.log(person.firstName)
console.log(person.greet)