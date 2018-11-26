const {isEmail, isMobilePhone} = require('validator');

console.log('validator.js!')

console.log('isEmail:',isEmail('kiezmi@gmail.com',{}))

const phone = '534567890';
console.log('isMobilePhone:',isMobilePhone(phone,'any'));
console.log('isMobilePhone:',isMobilePhone(phone,'es-ES'));

const phone2 = '605842890';
console.log('isMobilePhone2:',isMobilePhone(phone2,'any'));
console.log('isMobilePhone2:',isMobilePhone(phone2,'es-ES',{strictMode:true}));

const phone3 = '+34625807248';
console.log('isMobilephone3:',isMobilePhone(phone3,'any'));
console.log('isMobilephone3:',isMobilePhone(phone3,'es-ES',{strictMode:true}));

