// const apple = {
//   name: 'apple',
//   display: function() {
//     console.log(`${this.name}: π`); 
//   }
// }

// const orange = {
//   name: 'orange',
//   display: function() {
//     console.log(`${this.name}: π`); 
//   }
// }


//μμ±μ ν¨μ (ν¨μμ μ΄λ¦μ λλ¬Έμλ‘ μμν΄μΌνλ€)
//ννλ¦Ώμ λ§λ€μ΄λκ³  νμμ΄ κ°μ(μμ±μ λ€λ₯Έ)ν¨μλ₯Ό μ°μ΄λΌ μ μλ€.

function Fruit (name, emoji) {
  this.name = name,
  this.emoji = emoji;
  this.display = function() {
    console.log(`${this.name}: ${this.emoji}`);
  };
  return this;   //μλ΅κ°λ₯ν¨ (μλ΅νλ©΄ μλμΌλ‘ return this; λΌκ³  μΈμν¨)
};

const apple = new Fruit('apple', 'π');
const orange = new Fruit('orange', 'π');


console.log(apple);
console.log(orange);

//ν΄λμ€λ‘ μ’ λ μ°μνκ² λ§λ€μ μλ€~!