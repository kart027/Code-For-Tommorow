module.exports = (sequelize, DataTypes) => {
    const ServicePriceOption = sequelize.define('ServicePriceOption', {
      duration: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM('Hourly', 'Weekly', 'Monthly'),
        allowNull: false,
      },
    });
  
    return ServicePriceOption;
  };