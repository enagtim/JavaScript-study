const arr = [1, 40, -5, 10, 0];
function sort (array) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++ ) {
            if(array[j] > array[j + 1]){
               [array[j], array[j + 1]] = [array[j + 1], array[j]];
            }
        }
    }
    return array
}
console.log(arr);
const sortedArray = sort(arr);
console.log(sortedArray);

