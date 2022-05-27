function compareTriplets(a, b) {
    // Write your code here
    let i;
    let pointA = 0;
    let pointB = 0;
    for (i = 0; i< a.length; i++) {
        if (a[i] > b[i]) pointA++;
        if (a[i] < b[i]) pointB++;
    }
    return [pointA, pointB];
}

const a = [5, 6, 7];
const b = [3, 6, 10];

console.log(compareTriplets(a, b));