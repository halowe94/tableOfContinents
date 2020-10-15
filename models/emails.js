module.exports = function(sequelize, DataTypes) {
    const email = sequelize.define("email", {
      // The data cannot be null
      email_address: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return email;
    console.log(email);
  };