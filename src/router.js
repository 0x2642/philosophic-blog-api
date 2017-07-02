'use strict';
//import adminRouter from './modules/admin/router';
import articleRouter from './modules/article/router';

function register(app) {
	app.use(articleRouter.routes());
}

export default register;