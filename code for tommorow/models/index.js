const Sequelize = require('sequelize');
const sequelize = require('../db/mySql.js');

const Category = require('./category.js')(sequelize, Sequelize.DataTypes);
const Service = require('./service.js')(sequelize, Sequelize.DataTypes);
const ServicePriceOption = require('./ServicePriceOption.js')(sequelize, Sequelize);

Category.hasMany(Service, { foreignKey: 'categoryId', onDelete: 'CASCADE' });
Service.belongsTo(Category, { foreignKey: 'categoryId' });

Service.hasMany(ServicePriceOption, { foreignKey: 'serviceId', onDelete: 'CASCADE' });
ServicePriceOption.belongsTo(Service, { foreignKey: 'serviceId' });

module.exports = {
  sequelize,
  Category,
  Service,
  ServicePriceOption,
};