import Router from 'koa-router';
import * as controller from './article.controller';

let router = Router({
	prefix: '/article'
});

router.get('/list', controller.list);
router.get('/pages', controller.pages);

router.post('/', controller.create);
router.put('/:articleId', controller.update);
router.delete('/:articleId', controller.remove);

export default router;