const mongoose = require('mongoose');

main().then(data=>console.log("connection successful")).catch(err => console.log(err));

async function main() {
  var data=await mongoose.connect('mongodb://localhost:27017/contact_list_db');
  return data;
  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}