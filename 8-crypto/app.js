
function crypto (password) {
    const array  = password.split('');
    array.splice(4, 1);
    array.unshift('t');
    array.splice(1,1);
    array.push('q');
    const strreturn = array.join('')
    return strreturn;
}

function check (cryptopassword, password) {
    const cryptoarray = cryptopassword.split('');
    cryptoarray.splice(0,1);
    cryptoarray.push('t')
    cryptoarray.splice(3,1);
    cryptoarray.unshift('q');
    const strcryptoarray = cryptoarray.join('');
    if (strcryptoarray === password) {
        return true;
    } else {
        return false;
    }
}

console.log(crypto('qwert'));
console.log(check('twerq', 'qwert'));