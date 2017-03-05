const bcrypt =  require('bcrypt-nodejs');
const hash = bcrypt.hashSync("harry");
console.log(hash);

//add some stuff on second commit