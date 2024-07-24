const hasLicince = false;
const age = 18;
const isDrunk = false;


const canDrive = age >= 18 && hasLicince &&  !isDrunk;

console.log(`Водитель может управлять транспортным средством: ${canDrive ? 'Да': 'Нет'} `);