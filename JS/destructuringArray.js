let a = 'A'; //B
let b = 'B'; //C
let c = 'C'; //A

const letters = [b,c,a];
[a,b,c] = letters; 
console.log(a,b,c);

const numbers = [1,2,3,4,5];

const [first, second,...rest] = numbers;
console.log(first, second);
console.log(rest);

const [firstAgain, , third, , fifith] = numbers
console.log(firstAgain, third, fifith);

const numbers2 = [ [1,2,3], [4,5,6], [7,8,9] ];
//"i want the number 7"
const [list1, list2, list3] = numbers2;;
console.log(list3[0]);