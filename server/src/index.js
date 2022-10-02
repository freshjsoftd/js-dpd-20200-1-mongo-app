require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const { Schema } = require('mongoose')
const env = process.env.NODE_ENV || 'development'
const config = require('./config/mongo-config')[env]

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

mongoose.connect(`mongodb://${config.host}:${config.port}/${config.dbName}`)
.then(data => console.log(`Connection to DB <<< ${config.dbName} >>> OK`))
.catch(err => console.log(err));

const roleSchema = new Schema({
  type: String
});
const options = {skip:1, limit: 2};
const Role = mongoose.model('roles', roleSchema);
const roles = [
  {type: 'user'},
  {type: 'moderator'},
  {type: 'admin'}
];
(async () => {
  // Read
  /* const foundedRoles = await Role.find({},{type: 1, _id: 0}, options);
  console.log('foundedRoles', foundedRoles); */
  // Create
  /* const newRoleDoc = {type: 'moderator'};
  const newRole = new Role(newRoleDoc);
  const createdRole = await newRole.save();
  console.log('createdRole', createdRole) */
  /* const insertedRoles = await Role.insertMany(roles);
  console.log('insertedRoles', insertedRoles) */
  // Delete
  /* const deletedRole = await Role.deleteMany({title: /^S/});
  console.log('deletedRole', deletedRole) */
  // Update
  const updatedRole = await Role.updateOne({type: 'admin'}, {type: 'Superadmin'});
  console.log('updatedRole', updatedRole);
})()
// 6336a9cbf51c87f270fbdc53

app.listen(PORT, () => console.log(`Server has been started at ${PORT}`));