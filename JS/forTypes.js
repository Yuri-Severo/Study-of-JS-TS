const names = ['Yuri','Leonan','Ingrid','Marcos'];

for(let i in names){
    console.log(names[i]);
}

console.log('#####');

for(let value of names){
    console.log(value);
}

console.log('#####');

names.forEach(function(value, i, array){
    console.log(value, i, array)
})