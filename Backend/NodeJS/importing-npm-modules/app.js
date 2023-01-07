const validator = require('validator');

//validates if its an email
console.log(validator.isEmail('janu'));
console.log(validator.isEmail('janu123'));
console.log(validator.isEmail('janu@'));
console.log(validator.isEmail('janu.com'));
console.log(validator.isEmail('janu.com@'));
console.log(validator.isEmail('janu@12.com'));
console.log(validator.isEmail('12@.com'));

//validates if its a url
console.log(validator.isURL('https://abc.com'));