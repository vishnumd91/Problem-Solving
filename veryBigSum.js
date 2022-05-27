function aVeryBigSum(arr) {
    // Write your code here
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });
    return [sum];
}


const arr = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(arr));