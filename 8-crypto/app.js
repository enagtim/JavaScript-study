function crypto(password) {
    let arr = password.split('');
    [arr[0], arr[4]] = [arr[4], arr[0]];
    [arr[2], arr[3]] = [arr[3], arr[2]];
    return arr.join('');
}
function checkpassword(password) {
    const originalpassword = password;
    const cryptopassword = crypto(originalpassword);
    const reversecryptopassword = crypto(cryptopassword); 
    if(password === '' || password.length < 5) {
        return false;
    }else if(originalpassword === reversecryptopassword) {
        return true;
    }
}
console.log(checkpassword('qwert'));