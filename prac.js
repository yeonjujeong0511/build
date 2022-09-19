let a = 1;
let b = 2;

let c = [3,4,5];

function sum(first,second){
  return first + second;
}

console.log(sum(a,b));
let test = sum(a, b);


const sumFunction = c.map(function(num){
  return num + a + b;
});

console.log(sumFunction);