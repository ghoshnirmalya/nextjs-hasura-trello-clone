// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function(app) {
  const sequelizeClient = app.get('sequelizeClient');
  const user = sequelizeClient.define(
    'user',
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false
      },
      createdAt: {
        field: 'created_at',
        type: DataTypes.DATE
      },
      updatedAt: {
        field: 'updated_at',
        type: DataTypes.DATE
      }
    },
    {
      hooks: {
        beforeCount(options) {
          options.raw = true;
        }
      },
      timestamps: true,
      underscored: true
    }
  );

  // eslint-disable-next-line no-unused-vars
  user.associate = function(models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return user;
};
