var jwt = require('jsonwebtoken');
var jwtSecret = sails.config.secrets.jwtSecret;

module.exports = {
  friendlyName: 'Jwt',

  description: 'Jwt something.',

  inputs: {},

  exits: {
    success: {
      description: 'All done.'
    }
  },

  issue: function(payload) {
    token = jwt.sign(payload, jwtSecret, { expiresIn: 180 * 60 });
    return token;
  },

  verify: function(token, callback) {
    return jwt.verify(token, jwtSecret, callback);
  },

  fn: async function(inputs) {
    // TODO
  }
};
