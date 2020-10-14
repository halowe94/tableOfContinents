// Creating our names model
module.exports = function(sequelize, DataTypes) {
  const continent = sequelize.define("continent", {
    // The data cannot be null
    names: {
      type: DataTypes.STRING,
      allowNull: false
    },
    area_km: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    pop: {
      type: DataTypes.STRING,
      allowNull: false
    },
    number_countries: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    largest_country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    popular_dish: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return continent;
};
