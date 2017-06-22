'use strict';

import * as controller from './admin.controller';
import * as filter from './admin.fliter';
import Router from 'koa-router';

let router = Router({
	prefix: '/admin'
});

router.get('/:id', controller.getOneAdmin);
router.get('/list', controller.getAdminList);
router.post('/add', controller.addAdmin);
router.put('/:id', controller.updateAdmin);
router.delete('/:id', controller.removeAdmin);

export default router;