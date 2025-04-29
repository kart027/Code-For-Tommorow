// routes/serviceRoutes.js
const router = require('express').Router();
const auth = require('../middleware/middleware.js');
const ctrl = require('../controller/serviceController.js');

router.post('/:categoryId/service', auth, ctrl.addService);
router.get('/:categoryId/services', auth, ctrl.getServices);
router.put('/:categoryId/service/:serviceId', auth, ctrl.updateService);
router.delete('/:categoryId/service/:serviceId', auth, ctrl.deleteService);

module.exports = router;
