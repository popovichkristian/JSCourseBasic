const person = {
    name: 'Kristian',
    age: undefined,
    isProgrammer: true,
    languages: ['ru', 'ua', 'ro', 'en'],
    'complex key': 'complex value',
    ['key_' + (1 + 3)]: 'computed key', //key_4
    greet() {
        console.log ('Greet for person')
    }
}

// console.log(person.name)
// const ageKey = 'age'
// console.log(person[ageKey])
// console.log(person['complex key'])

// delete person['key_4']
// console.log(person)

// const name = person.name
// const age = person.age
// const languages = person.languages
// const {name, age: personAge = 10, languages} = person

// for (let key in person) {
//     if (person.hasOwnProperty(key)) {
//         console.log('key:', key)
//         console.log('value:', person[key])
//     }
// }
// console.log(person)

//Context
