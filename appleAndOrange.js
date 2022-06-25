function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Write your code here
  const numberOfApplesLanded = [];
  const numberOfOrangesLanded = [];
  // should add apples array with a
  const appleLanded = addFruitWithTreePoint(apples, numberOfApplesLanded, a);
  // should add oranges array with b
  const orangeLanded = addFruitWithTreePoint(oranges, numberOfOrangesLanded, b);
  // compare the new arrays with the range of s and t
  const landedApples = numberOfApplesLanded.filter(
    (apple) => apple >= s && apple <= t
  );
  const landedOranges = numberOfOrangesLanded.filter(
    (orange) => orange >= s && orange <= t
  );
  // return the count that matches the range of s and t from new arrrays.
  console.log(`${landedApples.length} 
${landedOranges.length}`);
}

function addFruitWithTreePoint(fruits, numberOfFruitsLanded, treePoint) {
  return fruits.forEach((fruit) => {
    const addedFruit = fruit + treePoint;
    numberOfFruitsLanded.push(addedFruit);
  });
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);
