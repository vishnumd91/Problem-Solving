const rotateLeft = (d, arr) => {
  const arrSlice = arr.slice(d);
  const arrSlice2 = arr.slice(0, d);
  const concatedArray = arrSlice.concat(arrSlice2);
  return concatedArray;
};

console.log(performance.now());
console.log(rotateLeft(4, [1, 2, 3, 4, 5]));
console.log(performance.now());
