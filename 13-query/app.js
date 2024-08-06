const query = {
    search: 'Alex', 
    take: 10,
}
function queryParametrs(object){
    const arrOfquery = Object.entries(object);
    const stringOfquery = arrOfquery.map(item => item.join('='))
    const string = stringOfquery.join('&')
    return `?${string}`;
}
console.log(queryParametrs(query));