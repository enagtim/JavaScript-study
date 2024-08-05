const cardNumber = '4561-1213-4367-2612';
function algoritmLuna(cardnum) {
    let sum = 0;
    const cleanCardNumber = cardnum.replaceAll('-','');
    const arr = cleanCardNumber.split('');
    for(let i = 0; i < arr.length; i++){
        let num = Number(arr[i]);
        if((arr.length % 2 !== 0 && i % 2 !== 0 ) || (arr.length % 2 == 0 && i % 2 == 0)){
            num = num * 2;
            if(num > 9){
                num = num - 9; 
            }
        }
        sum = sum + num;
    } 
    return sum % 10 === 0;
}
console.log(algoritmLuna(cardNumber));
