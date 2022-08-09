const name = 'Dayanutsa'
const age = 26
console.log(typeof name)

function getAge() {
    return age
}

// const output = 'Привет, меня зовут ' + name + ' и мой возраст: ' + age + ' лет'
// const output = `Привет, меня зовут ${name} и мой возраст ${age} лет.`
// const output = `Привет, меня зовут ${name} и мой возраст ${getAge()} лет.`
// const output = `Привет, меня зовут ${name} и мой возраст ${age < 0 ? 'A': 'БМВ Дэ сасать ла Мерс'} лет.`
// console.log(output)
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.toLowerCase())
// console.log(name.charAt(3))
// console.log(name.indexOf('utsa'))
// console.log(name.startsWith('utsa'))
// console.log(name.repeat(3))

// const string = '     Password     '
// console.log(string)
// console.log(string.trim())
// console.log(string.trimLeft())
// console.log(string.trimRight())

function logPerson (s, name, age) {
    if (age < 0) {
        age = 'Сопляк блядь'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
}

const personName = 'Dayanuta'
const personName2 = 'Kristian'
const personAge = 25
const personAge2 = -10

const output = logPerson` Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson` Имя: ${personName2}, Возраст: ${personAge2}!`

console.log(output)
console.log(output2)