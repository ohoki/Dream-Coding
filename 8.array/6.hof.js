//κ³ μ°¨ ν¨μ (higher order function)

const fruits = ['π', 'π', 'π', 'π'];

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
//   }

// λ°°μ΄μ λΉκΈ λΉκΈ λλ©΄μ μνλ κ²(μ½λ°±ν¨μ)μ ν  λ - κ³ μ°¨ν¨μ
// forEach(function(value, index, array){}); - νμμλ λ³μλ μλ΅ κ°λ₯
fruits.forEach(function(value) {
  console.log(value);
});

fruits.forEach((value) => console.log(value)); //νμ΄ν¨μλ‘ μλ΅ κ°λ₯

//μ‘°κ±΄μ λ§λ(μ½λ°±ν¨μ) μμ΄νμ μ°Ύμ λ 
//find: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ λ°ν
//findIndex: μ μΌ λ¨Όμ  μ‘°κ±΄μ λ§λ μμ΄νμ μΈλ±μ€λ₯Ό λ°ν
const item1 = { name: 'π', price: 3 };
const item2 = { name: 'π', price: 1 };
const item3 = { name: 'π£', price: 2 };
const products = [item1, item2, item3, item2];
let found = products.find((value) => value.name === 'π');
console.log(found);

found = products.findIndex((value) => value.name === 'π');
console.log(found);

// λ°°μ΄μ μμ΄νλ€μ΄ λΆλΆμ μΌλ‘ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
let result = products.some((value) => value.name === 'π');
console.log(result); //true

// λ°°μ΄μ μμ΄νλ€μ΄ μ λΆ μ‘°κ±΄(μ½λ°±ν¨μ)μ λ§λμ§ νμΈ
result = products.every((value) => value.name === 'π');
console.log(result); //false

// μ‘°κ±΄μ λ§λ λͺ¨λ  μμ΄νλ€μ μλ‘μ΄ λ°°μ΄λ‘!
result = products.filter((value) => value.name === 'π');
console.log(result); //[ { name: 'π', price: 1 }, { name: 'π', price: 1 } ]

// Map - λ°°μ΄μ μμ΄νλ€μ κ°κ° λ€λ₯Έ μμ΄νμΌλ‘ λ§€νν  μ μλ, λ³νν΄μ μλ‘μ΄ λ°°μ΄ μμ±!

const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item *2);
console.log(result);

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item ;
  }
})
console.log(result);

//flatMap - μ€μ²©λ λ°°μ΄μ μ«μ ν΄μ€
result = nums.map((item) => [1,2]); 
console.log(result);
//[ [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ], [ 1, 2 ] ]

result = nums.flatMap((item) => [1,2]);
console.log(result);
//[1, 2, 1, 2, 1,2, 1, 2, 1, 2]

result = ['dream', 'coding'].map((text) => text.split(''));
console.log(result);
//[ [ 'd', 'r', 'e', 'a', 'm' ], [ 'c', 'o', 'd', 'i', 'n', 'g' ] ]

result =  ['dream', 'coding'].flatMap((text) => text.split(''));
console.log(result);
//['d', 'r', 'e', 'a','m', 'c', 'o', 'd','i', 'n', 'g']

// sort λ°°μ΄μ μμ΄νλ€μ μ λ ¬ν¨
// "λ¬Έμμ΄" ννμ μ€λ¦μ°¨μμΌλ‘ μμλ₯Ό μ λ ¬νκ³ , κΈ°μ‘΄μ λ°°μ΄μ λ³κ²½
const texts = ['hi', 'abc'];
texts.sort();
console.log(texts); //[ 'abc', 'hi' ]

const numbers = [0, 5, 4, 2, 1, 10];
numbers.sort();
console.log(numbers); //[ 0, 1, 10, 2, 4, 5 ]
//λ¬Έμμ΄ κΈ°μ€μΌλ‘ μ λ ¬νκΈ° λλ¬Έμ μ«μμ κ²½μ° μ λ ¬μ΄ μ λλ‘ λμ§ μμ
//κ·Έλμ sortν¨μμ μ½λ°±ν¨μλ₯Ό λΆλ¬μμΌνλ€

numbers.sort((a, b) => a-b); 
// a, b κ°λ€μ νλμ© λΉκ΅νλ©΄μ λμ κ΄κ³λ₯Ό κ΅¬λ³ν¨
// < 0 -> a < b - aκ° μμΌλ‘ μ λ ¬
// > 0 -> a > b - bκ° μμΌλ‘ μ λ ¬
console.log(numbers); //[ 0, 1, 2, 4, 5, 10 ]

// reduce λ°°μ΄μ κ°μ μ μ΄μ μ μ΄μ νλλ‘
result = [1, 2, 3, 4, 5].reduce((sum, value) => (sum += value), 0);
// sumμ κ°μ 0(reduceμ μΈμ)λ‘ μ€μ λκ³  λ°°μ΄ μμ κ°λ€μ΄ νλμ© λν΄μ§λ κ΅¬μ‘°
console.log(result); //15 <- λ°μ΄ν°κ° κ°μΌλ‘ λμ¨λ€

