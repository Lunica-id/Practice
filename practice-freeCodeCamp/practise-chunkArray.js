function chunkArrayInGroups(arr, size) {
    let result = [];
    for(let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }
    return result;
}

console.log(chunkArrayInGroups([1,2,3,4,5,6], 2)); // [[1,2],[3,4],[5,6]]
console.log(chunkArrayInGroups([1,2,3,4,5], 3));   // [[1,2,3],[4,5]]
