const arr = [1, 40, -5, 10, 0];
function sort (array) {
    for(let i = 0; i < arr.length; i++) {
        for( let j = 0; j < arr.length; j++ ) {
            const res = arr[j];
            if(arr[j] > arr[j + 1]){
                arr[j] = arr[j + 1];
                arr[j + 1] = res;
            }
        }
    }
    return array
}
console.log(sort(arr));
