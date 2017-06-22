'use strict';
import {
	wrapBody as wrap
} from '../common/util/helper';
import * as ArticleService from './article.service';

export async function create(ctx, next) {
	let data;
	try {
		let body = ctx.request.body;
		data = await ArticleService.create(body);
	} catch (ex) {
		console.log('Article Create Fail', ex);
		ctx.body = wrap(ex);
	}
	ctx.body = wrap(null, data);
}

export async function update(ctx, next) {
	try {
		let {
			id
		} = ctx.params;
		let body = ctx.request.body;
		await ArticleService.update(id, body);
	} catch (ex) {
		console.log('Article Update Fail', ex);
		ctx.body = wrap(ex);
	}
	ctx.body = wrap(null, null);
}

export async function delete(ctx, next) {
	try {
		let {
			id
		} = ctx.params;
		await ArticleService.delete(id);
	} catch (ex) {
		console.log('Article Update Fail', ex);
		ctx.body = wrap(ex);
	}
	ctx.body = wrap(null, null);
}