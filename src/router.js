'use strict';
import adminRouter from './modules/admin/router';

function register(app) {
	app.use(adminRouter.routes());
}

export default register;