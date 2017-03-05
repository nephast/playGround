const bcrypt =  require('bcrypt-nodejs');
const hash = bcrypt.hashSync("harry");
console.log(hash);

