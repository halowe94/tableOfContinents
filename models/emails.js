module.exports = function(sequelize, DataTypes) {
    const emails = sequelize.define("emails", {
      // The data cannot be null
      email_address: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
    return emails;
    console.log(email);
  };