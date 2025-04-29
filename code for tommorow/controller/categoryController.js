const { Category, Service } = require('../models');

exports.createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await Category.create({ name });
  res.json(category);
};

exports.getCategories = async (req, res) => {
  const categories = await Category.findAll();
  res.json(categories);
};

exports.updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const { name } = req.body;
  await Category.update({ name }, { where: { id: categoryId } });
  res.json({ message: 'Updated' });
};

exports.deleteCategory = async (req, res) => {
  const { categoryId } = req.params;
  const services = await Service.findAll({ where: { categoryId } });
  if (services.length > 0) return res.status(400).json({ message: 'Category not empty' });
  await Category.destroy({ where: { id: categoryId } });
  res.json({ message: 'Deleted' });
};