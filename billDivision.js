/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
  // Write your code here
  const billSplitting = [...bill];
  billSplitting.splice(k, 1);
  const totalBill = billSplitting.reduce((acc, curr) => acc + curr);
  const sharesToBeSplitted = totalBill / 2;
  return sharesToBeSplitted === b
    ? console.log("Bon Appetit")
    : console.log(b - sharesToBeSplitted);
}

bonAppetit([3, 10, 2, 9], 1, 12);
bonAppetit([40, 39, 97, 5, 2, 84, 35, 93, 59, 39], 2, 198);
