const person = {
    name: 'Severo',
    lastName: 'Pinto',
    //age: 18,
    adress: {
        street: 'Br 365',
        number: 257
    }
}

const {name} = person;
console.log(name);

const {lastName: testing} = person;
console.log(testing);

const {age = 0} = person;
console.log(age);

const {adress: {street, number}} = person;
console.log(street)

const {name: n, ...rest} = person;
console.log(n, rest);