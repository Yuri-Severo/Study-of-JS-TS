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

const key = 'name';
console.log('Searching the key "'+ key +'":'+user[key]);
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
const array = [1,2,3,4,5,6,7,8,9,10,"a"];
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


//Arrays (obs: all of them can use 'return' like a function)
const newArray = array;
console.log('newArray: '+newArray);
console.log('');

// filter(): returns just a part of the array
console.log('newArray with filter(): ' + newArray.filter(item => item % 2 !== 0))
console.log('');

//map(): returns the same quantity of the array (works like a for)
console.log('newArray with map(): ' + newArray.map(item => item * 10))
console.log('');

//every(): analyzes the every element in array and returns a boolean 
const allItensAreNumbers = newArray.every(item => {
    return typeof item === 'number'
})
console.log('All elements in newArray are numbers? ' + allItensAreNumbers);
console.log('');

//some(): analyzes the every element in array and returns a boolean 
const atLeastOneItemIsANaN = newArray.some(item => {
    return typeof item !== 'number'
})
console.log('There is at least one NaN in newArray? ' + atLeastOneItemIsANaN);
console.log('');

//find(): analyzes the array and returns the VALUE of the first one that satisfies the condition
console.log('The first pair element is: ' + newArray.find(item => item % 2 ))
console.log('');

//findIndex():analyzes the array and returns the INDEX first one that satisfies the condition
console.log('The first pair element index is: ' + newArray.findIndex(item => item % 2 ))
console.log('');

//reduce(): allow to create a new "thing" (object,array,etc) from the initial array 
//(in that case, a number, this is identified by the '},0' wich is the initial value from acumulator 'acc')
//it makes iterations with all items 
const sum = newArray.reduce((acc,item) => {
    return acc + item
},0)
console.log('Sum from reduce(): '+sum);
