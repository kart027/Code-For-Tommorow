const router = require('express').Router();
const auth = require('../middleware/middleware.js');
const ctrl = require('../controller/categoryController.js');

router.post('/', auth, ctrl.createCategory);
router.get('/categories', auth, ctrl.getCategories);
router.put('/:categoryId', auth, ctrl.updateCategory);
router.delete('/:categoryId', auth, ctrl.deleteCategory);

module.exports = router;