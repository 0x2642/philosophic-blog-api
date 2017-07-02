'use strict';
import {
	wrapBody as wrap
} from '../common/util/helper';
import * as ArticleService from './article.service';

export async function pages(ctx, next) {
	let data;
	try {
		let {
			pageSize, 
			pageIndex,
			orderBy, 
			orderType, 
			keyword
		} = ctx.query;

		orderBy = orderBy ? orderBy : "id";
		orderType = orderType ? orderType : "asc";

		let condition = {};
		if (keyword) {
            condition["$or"] = {
                id: {
                    $like: '%' + keyword + '%'
                },
                name: {
                    $like: '%' + keyword + '%'
                }
            }
        }

        let offset = (pageIndex - 1) * pageSize;
        let params = {
        	pageSize: pageSize,
        	offset: offset,
        	orderBy: orderBy,
        	orderType: orderType,
        	condition: condition
        }

        let count = await ArticleService.count(condition);
		let list  = await ArticleService.pages(params);

		data = {
			list: list,
			pageSize: pageSize,
			pageIndex: pageIndex,
			total: count
		}
	} catch (ex) {
		console.log('Pages Get Fail', ex);
		ctx.body = wrap(ex);
	}
	ctx.body = wrap(null, data);
}

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
		await ArticleService.update(body, id);
	} catch (ex) {
		console.log('Article Update Fail', ex);
		ctx.body = wrap(ex);
	}
	ctx.body = wrap(null, null);
}

export async function remove(ctx, next) {
	try {
		let {
			id
		} = ctx.params;
		await ArticleService.remove(id);
	} catch (ex) {
		console.log('Article Update Fail', ex);
		ctx.body = wrap(ex);
	}
	ctx.body = wrap(null, null);
}


export async function getOne(ctx, next) {
	let data;
	try {
		let {
			id
		} = ctx.params;
		data = ArticleService.getOne(id);
	} catch (ex) {
		console.log('Article Create Fail', ex);
		ctx.body = wrap(ex);
	}
	ctx.body = wrap(null, data);
}