function plusMinus(arr) {
  // Write your code here
  const positiveNumbers = [];
  const negativeNumbers = [];
  const zero = [];
  arr.forEach((element) => {
    if (element > 0) positiveNumbers.push(element);
    if (element < 0) negativeNumbers.push(element);
    if (element === 0) zero.push(element);
  });
  const ratioOfPositiveNumbers = (
    positiveNumbers.length / arr.length
  ).toPrecision(6);
  const ratioOfNegativeNumbers = (
    negativeNumbers.length / arr.length
  ).toPrecision(6);
  const ratioOfZeroes = (zero.length / arr.length).toPrecision(6);
  console.log(
    ratioOfPositiveNumbers,
    "\n",
    ratioOfNegativeNumbers,
    "\n",
    ratioOfZeroes
  );
}

const arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
