const mongoos = require('mongoose');

const userSchema = new mongoos.Schema({
    name:{ type : String , required : true },
    email:{ type : String , unique : true, required : true },
    password:{ type : String , required : true }
});

userSchema.post('save', function(error, doc, next) {
    if (error.name === 'MongoError' && error.code === 11000) {
      next(new Error('Email must be unique'));
    } else {
      next();
    }
  })
module.exports = mongoos.model("users", userSchema);