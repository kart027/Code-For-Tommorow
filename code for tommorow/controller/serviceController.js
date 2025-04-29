const { Service, ServicePriceOption } = require('../models');

exports.addService = async (req, res) => {
  const { categoryId } = req.params;
  const { name, type, priceOptions } = req.body;
  const service = await Service.create({ categoryId, name, type });
  if (priceOptions?.length) {
    for (const option of priceOptions) {
      await ServicePriceOption.create({ ...option, serviceId: service.id });
    }
  }
  res.json(service);
};

exports.getServices = async (req, res) => {
  const { categoryId } = req.params;
  const services = await Service.findAll({ where: { categoryId }, include: ServicePriceOption });
  res.json(services);
};

exports.updateService = async (req, res) => {
  const { categoryId, serviceId } = req.params;
  const { name, type, priceOptions } = req.body;
  await Service.update({ name, type }, { where: { id: serviceId, categoryId } });
  await ServicePriceOption.destroy({ where: { serviceId } });
  if (priceOptions?.length) {
    for (const option of priceOptions) {
      await ServicePriceOption.create({ ...option, serviceId });
    }
  }
  res.json({ message: 'Service updated' });
};

exports.deleteService = async (req, res) => {
  const { serviceId } = req.params;
  await Service.destroy({ where: { id: serviceId } });
  res.json({ message: 'Service deleted' });
};