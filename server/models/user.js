var mongoose = require ('mongoose');

var User = mongoose.model('User', {
    email: {
      type: String,
      required: true,
      minength: 1,
      trim: true
    }
});

module.exports = {User};
