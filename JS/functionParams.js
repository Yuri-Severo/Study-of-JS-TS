function anyFunction(){
    console.log(arguments);
}

anyFunction(1,2,3,4);

function anotherFunction(){
    let total = 0;
    for (let argument of arguments){
        total += argument;
    }
    console.log("The total is: "+total);
}
anotherFunction(1,4,7);

//if i want to jump an argument:
function Function(a=1,b=2,c=3){
    console.log(a+b+c);
}
Function(2,undefined,6);

//object destructuring:
function receiveObject({name, lastname, age}){
    console.log("Object: "+name,lastname,age);
}
receiveObject({name: 'Yuri', lastname: 'Pinto', age: 19})