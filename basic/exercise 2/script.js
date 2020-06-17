var numbersOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (var i = 0; i < numbersOne.length; i++) {
    for (var j = 0; j < numbersTwo.length; j++) {
        document.write(numbersTwo[j] + " x " + numbersOne[i] + " = " + numbersTwo[j] * numbersOne[i] + "<br>");
    }
}
