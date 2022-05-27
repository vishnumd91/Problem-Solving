function dataFinder(data) {
    // Write your code here
    return function find(minRange, maxRange, value) {
        const slicedArray = data.slice(minRange, maxRange+1);
        const check = minRange < slicedArray.length || maxRange > slicedArray.length;
        if (slicedArray.includes(value)) return true;
        // if (minRange < slicedArray.length || maxRange > slicedArray.length) return 'Not found';
        return false;
    }
}

console.log(dataFinder([1,6,3,0,2,15,10])(2,10,10));

// const a = [15, 1, 10, 5, 4, 20]
// console.log(a.slice(1,10))