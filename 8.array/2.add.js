const fruit = ['π', 'π', 'π', 'π'];

//λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²
console.log(fruit[0]);
console.log(fruit[1]);
console.log(fruit[2]);
console.log(fruit[3]);
console.log(fruit.length);

for (let i = 0; i < fruit.length; i++) {
  console.log(fruit[i]);
}

//μΆκ°, μ­μ  - μ’μ§ μμ λ°©μ (ββ)
fruit[6] = 'π';
console.log(fruit);

delete fruit[1];
console.log(fruit);
//μμ΄νλ§ μ­μ λκ³  μλ¦¬λ λ¨μ μμ 
//[ 'π', <1 empty item>, 'π', 'π', <2 empty items>, 'π' ]
