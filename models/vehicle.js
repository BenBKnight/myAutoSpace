// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
// const Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
// const sequelize = require("../config/config.json");

module.exports = function(sequelize, DataTypes) {
  const Vehicle = sequelize.define("Vehicle", {
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    make: {
      type: DataTypes.STRING
    },
    model: {
      type: DataTypes.STRING
    },
    year: {
      type: DataTypes.INTEGER
    },
    vin: {
      type: DataTypes.STRING
    },
    mileage: {
      type: DataTypes.INTEGER
    },
    yearPurchased: {
      type: DataTypes.INTEGER
    },
    condition: {
      type: DataTypes.STRING
    },
    accidents: {
      type: DataTypes.INTEGER
    },
    numOfOwners: {
      type: DataTypes.INTEGER
    },
    locationLastOwned: {
      type: DataTypes.STRING
    },
    imageUrl: {
      type: DataTypes.STRING
    }
  });

  //Vehicles Association
  Vehicle.associate = models => {
    Vehicle.belongsTo(models.User, { foreignKey: { allowNull: false } });
    Vehicle.hasMany(models.Maintenance, {
      onDelete: "cascade"
    });
  };
  return Vehicle;
};
