const positionLat = 1;
const positionLong = 1;
const destinationLat = 8;
const destinationLong = 10;

const newLat =  destinationLat - positionLat;
const newLong = destinationLong - positionLong;

const allWay = Math.sqrt((newLat**2) + (newLong**2));
console.log(allWay);