const bcrypt =  require('bcrypt-nodejs');
const hash = bcrypt.hashSync("harry");
console.log(hash);
console.log('hi');

//add some stuff on second commit