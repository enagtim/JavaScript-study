const arr = [3, 6, 9, 2];

function del(element) {
    if (element > 5) {
        return false;
    }
    return true;
}
function arrayCleanFunction(array, instruction) {
    const newarray = [];
    for(let i = 0; i < arr.length; i++) {
        if(instruction(array[i])) {
            newarray.push(array[i]);
        }
    }
    return newarray;
}
const result = arrayCleanFunction(arr, del);

console.log(result);