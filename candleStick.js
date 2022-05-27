function birthdayCakeCandles(candles) {
  // Write your code here
  const tallestCandle = Math.max(...candles);
  const filterTallestCandle = candles.filter(
    (candle) => candle === tallestCandle
  );
  const lengthOfTallestCandle = filterTallestCandle.length;
  return lengthOfTallestCandle;
}

const result = birthdayCakeCandles([3, 2, 1, 3]);
console.log(result);
