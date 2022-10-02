const mongoose = require('mongoose');
const { Schema } = require('mongoose')

const customerSchema = new Schema({
  firstName: {
    type: String,
    required: [true, 'first name is required']
  },
  lastName: {
    type: String,
    required: [true, 'first name is required']
  },
  age: {
    type: Number,
    min: [15, 'It is min age']
  },
  prog_lang: [String],
  role_id: Schema.Types.ObjectId,
  address: {
    country: String,
    city: String,
    street: String,
    building: String,
    app: String,
    zipcode: Number
  }
});

const Customer = mongoose.model('customers', customerSchema)
module.exports = Customer;