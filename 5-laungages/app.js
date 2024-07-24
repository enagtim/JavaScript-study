const languageEN = 'en';
const languageRU = 'ru';
const languageDE = 'de';
const languageKOR = 'kor';

const uzerlanguage = 'ru'


switch (uzerlanguage) {
    case languageEN :
        console.log('Hello!');
        break;
    case languageRU : 
        console.log('Привет!');
        break;
    case languageDE : 
        console.log('Hallo!'); 
        break;
    case languageKOR : 
        console.log('안녕하세요');
        break;
    default: 
        console.log ("Error!");
    
}  
