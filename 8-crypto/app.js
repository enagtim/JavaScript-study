
function crypto (originalpassword) {
    const array = originalpassword.split('');
    array.splice(4, 1);
    array.unshift('t');
    array.splice(1,1);
    array.push('q');
    const returstringnarray = array.join('')
    return returstringnarray;
}

function checkpassword (originalpassword, cryptopassword) {
    if(originalpassword && cryptopassword === '') {
        return false;
    }
    const checkpassword = crypto(originalpassword);
    return checkpassword === cryptopassword;

}

console.log(checkpassword('qwert','twerq'));