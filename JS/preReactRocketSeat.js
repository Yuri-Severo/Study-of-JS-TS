// Nullish coalescing operator 
const age = null; 
console.log('Your age is: ' + (age ?? 'Not informed'));
console.log('');
// Objects
const user = {
    name: 'Yuri',
    age: 19,
    addres: {
        street: 'marques',
        number: '188',
        zip: {
            code: '1723489',
            city: 'Belem'
        },
        showFullAddress(){
            return 'funcao ok';
        }
    },
};
//optional chaining
console.log('código zip: '+ user.addres?.zip?.code ?? 'Não informado'); 
console.log('');

console.log(user.addres?.showFullAddress?.()); 
console.log('');
//search the 'item' in the object
console.log('name' in user); //true
console.log('gender' in user); //false
console.log('');  
//vector with all elements in the object
console.log(Object.keys(user));
console.log('');
//vector with all element values in the object
console.log(Object.values(user)); 
console.log('');
//vector with vectors of the keys and their values
console.log(Object.entries(user));
console.log('');


//Destructuring
const {name, age: idade, nickName = 'Severo'} = user;
console.log({name, idade, nickName});
console.log('');

function getInfo({name}){
    return name
}
console.log(getInfo(user));

//Rest
const array = [1,2,3,4,5,6,7,8,9,10];
const [first,second,...rest] = array;

console.log({first,second,rest});

//Short Syntax
const nome = 'Yuri'
const sobrenome = 'Costa';

const user2 = {
    nome,
    idade
};
console.log(user2);