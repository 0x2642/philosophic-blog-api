import {
	wrapBody as wrap 
} from '../common/util/helper';
import * as AdminSerivce from './admin.service';

export async function getOneAdmin(ctx, next) {
	let data;
	try {
		let {
			id
		} = ctx.parmas;
		data = await AdminSerivce.getAdminById(id);
	} catch (ex) {
		console.log('getOneAdmin error', ex);
		ctx.body = wrap(ex);
	}
	ctx.body = wrap(null, data);
}

export async function getAdminList(ctx, next) {
	let data;
	try {
		data = await AdminSerivce.getAdminList();
	} catch(ex) {
		console.log('getAdminList error', ex);
		ctx.body = wrap(ex);
	}
	ctx.body = wrap(null, data);
}

export async function addAdmin(ctx, next) {
	let data;
	try {
		data = await AdminSerivce.addAdmin();
	} catch(ex) {
		console.log('getAdminList error', ex);
		ctx.body = wrap(ex);
	}
	ctx.body = wrap(null, data);
}

export async function updateAdmin(ctx, next) {
	let data;
	try {
		let {
			id
		} = ctx.params;
		let body = ctx.reuqest.body;
		data = await AdminSerivce.addAdmin(id, body);
	} catch(ex) {
		console.log('getAdminList error', ex);
		ctx.body = wrap(ex);
	}
	ctx.body = wrap(null, data);
}

export async function removeAdmin(ctx, next) {
	let data;
	try {
		let {
			id
		} = ctx.params;
		data = await AdminSerivce.removeAdmin(id);
	} catch(ex) {
		console.log('getAdminList error', ex);
		ctx.body = wrap(ex);
	}
	ctx.body = wrap(null, data);
}