const arr = [1, 40, -5, 10, 0];
function sort (array) {
    let newarray = array.slice();
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - 1; j++ ) {
            if(newarray[j] > newarray[j + 1]){
               [newarray[j], newarray[j + 1]] = [newarray[j + 1], newarray[j]];
            }
        }
    }
    return newarray;
}
const sortedArray = sort(arr);
console.log(sortedArray);
console.log(arr);

