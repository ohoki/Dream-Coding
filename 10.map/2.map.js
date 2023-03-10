const map = new Map([
  ['key1', 'π'],
  ['key2', 'π']
]);
console.log(map);

// μ¬μ΄μ¦
console.log(map.size);
// μ‘΄μ¬νλμ§ νμΈ
console.log(map.has('key1'));
console.log(map.has('key6'));
// μν
map.forEach((value, key) => console.log(key, value));
// μ°ΎκΈ°
console.log(map.get('key1'));
console.log(map.get('key6'));
// μΆκ°
map.set('key3', 'π₯');
console.log(map);
// μ­μ 
map.delete('key3');
console.log(map);
// μ λΆμ­μ 
map.clear();
console.log(map);

//μ€λΈμ νΈμμ ν° μ°¨μ΄μ ??
const key = { name: 'milk', price: 10};
const milk = { name: 'mike', price: 10, description: 'λ§μλμ°μ '};
const obj = {
  [key]: milk,
};
console.log(obj); 
//{ '[object Object]': { name: 'mike', price: 10, description: 'λ§μλμ°μ ' }}
const map2 = new Map([[key, milk]]);
console.log(map2);
//{ name: 'milk', price: 10 } => { name: 'mike', price: 10, description: 'λ§μλμ°μ ' }}

//mapκ³Ό μ€λΈμ νΈλ λΉμ·ν΄λ³΄μ΄μ§λ§ μ¬μ©ν  μ μλ ν¨μ(μΈν°νμ΄μ€)κ° μ΄μ§ λ€λ₯΄λ€