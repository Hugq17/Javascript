//-------------- Bài 1 -----------------//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const sumEvenNumbers = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log(sumEvenNumbers); // Output: 30 (2 + 4 + 6 + 8 + 10)

//-------------- Bài 2 -----------------//
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const countOddNumbers = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + (currentValue % 2 !== 0 ? 1 : 0);
// }, 0);

// console.log(countOddNumbers); // Output: 5 (1, 3, 5, 7, 9)

//-------------- Bài 3 -----------------//
// const keyValuePairs = [
//   ["name", "Alice"],
//   ["age", 25],
//   ["city", "Wonderland"],
// ];

// const obj = keyValuePairs.reduce((accumulator, currentValue) => {
//   const key = currentValue[0];
//   const value = currentValue[1];
//   accumulator[key] = value;
//   return accumulator;
// }, {});

// console.log(obj); // Output: { name: 'Alice', age: 25, city: 'Wonderland' }
//-------------- Bài 4 -----------------//
// const numbers = [10, 5, 20, 30, 15, 7];

// const max = numbers.reduce((accumulator, currentValue) => {
//   // Implement the logic here
//   return accumulator = accumulator > currentValue ? accumulator : currentValue
// }, numbers[0]);

// console.log(max); // Output: 30
//-------------- Bài 5 -----------------//
// const words = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape'];

// const groupedByLength = words.reduce((accumulator, currentValue) => {
//  const length = currentValue.length
//  if(!accumulator[length]){
//   accumulator[length] = []
//  }
//  accumulator[length].push(currentValue)
//   return accumulator;
// }, {});

// console.log(groupedByLength);
// // Output: { 3: ['fig'], 4: ['date'], 5: ['apple', 'grape'], 6: ['banana', 'cherry'] }
//-------------- Bài 6 -----------------//
const cart = [
  { name: 'apple', price: 1.5, quantity: 4 },
  { name: 'banana', price: 0.5, quantity: 6 },
  { name: 'cherry', price: 2, quantity: 3 }
];

const totalValue = cart.reduce((accumulator, currentValue) => {
  const value = currentValue.price * currentValue.quantity;
  return accumulator + value
}, 0);

console.log(totalValue); // Output: 15
// Explanation: (1.5 * 4) + (0.5 * 6) + (2 * 3) = 6 + 3 + 6 = 15

