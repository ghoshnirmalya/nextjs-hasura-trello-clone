/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var _ = require('lodash');

module.exports = {
  create: async function(req, res) {
    if (req.body.password !== req.body.confirmPassword) {
      return res.status(401);
    }

    var allowedParameters = ['email', 'password'];
    var data = _.pick(req.body, allowedParameters);

    try {
      var user = await User.create(data);

      console.log(user);

      return res.status(200).json({
        user: user
        // token: sails.helpers.jwt.issue({ id: user.id })
      });
    } catch (error) {
      console.log(error);

      return res.status(401).json({
        error: error.Errors
      });
    }
  }
};
