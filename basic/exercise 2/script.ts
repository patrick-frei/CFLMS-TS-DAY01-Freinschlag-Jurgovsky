let numbersOne: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numbersTwo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbersOne.length; i++) {
  for (let j = 0; j < numbersTwo.length; j++) {
    document.write(`${numbersTwo[j]} x ${numbersOne[i]} = ${numbersTwo[j] * numbersOne[i]}<br>`);
  }
}