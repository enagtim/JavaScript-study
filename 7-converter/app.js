let rate;

function converter (money, currency, orcurrency) {
    if (currency === 'RUB' && orcurrency === 'USD'){
        rate = 0.011;
    } else if (currency === 'USD' && orcurrency === 'RUB'){
        rate = 88.40;
    } else if (currency === 'RUB' && orcurrency === 'EURO') {
        rate = 0.010; 
    } else if (currency === 'EURO' && orcurrency  === 'RUB') {
        rate = 96.35; 
    } else if (currency === 'USD' && orcurrency === 'EURO'){
        rate = 0.92;
    } else if (currency === 'EURO' && orcurrency === 'USD'){
        rate = 1.09;
    } else {
        return null;
    }
    return money * rate;
}

console.log(converter(1000, 'RUB', 'USD'));
console.log(converter(1000, 'USD', 'RUB'));
console.log(converter(1000, 'RUB', 'EURO'));
console.log(converter(1000, 'EURO','RUB'));