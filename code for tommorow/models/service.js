// models/Service.js
module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define('Service', {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('Normal', 'VIP'),
        allowNull: false,
      },
    });
  
    return Service;
  };