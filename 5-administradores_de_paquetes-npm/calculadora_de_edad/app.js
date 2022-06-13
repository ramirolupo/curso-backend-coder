const moment = require("moment");

const born = moment('26/09/1985', 'DD/MM/YYYY');
const today = moment();

const diffYears = today.diff(born, 'years');
const diffDays = today.diff(born, 'days');

console.log(`Hoy es ${today.format('DD/MM/YYYY')}`);
console.log(`Nací el ${born.format('DD/MM/YYYY')}`);
console.log(`Desde mi nacimiento han pasado ${diffYears} años`);
console.log(`Desde mi nacimiento han pasado ${diffDays} días`);