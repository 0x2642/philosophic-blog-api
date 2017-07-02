'use strict';
import {
	pick
} from 'lodash';
import {
	Enums,
} from '../../config/consts';
let {
	IsDeleted,
	Status
} = Enums;
import {
	Article
} from '../common/models';

const moment = require('moment');

export async function create(body) {
	let info = pick(body, ["creator", "context"]);
	info.createdTime = info.updatedTime = moment();
	info.status = Status.Normal;
	let article = await Article.create(info);
	let articleId = article.get("id");

	return articleId;
}

export async function count(condition) {
	Object.assign(condition, {
		status: Status.Normal,
		isDeleted: IsDeleted.No
	});
	return Article.count({
		where: condition
	});
}

export async function pages(params) {
	console.log('params: ', params);
	let condition = params.condition;
	Object.assign(condition, {
		status: Status.Normal,
		isDeleted: IsDeleted.No
	});
	let articles = await Article.findAll({
		attributes: ['id', 'creator', 'context'],
		where: condition,
		limit: +params.pageSize,
		offset: params.offset,
		order: [
			[params.orderBy, params.orderType]
		],
		raw: true
	});

	return articles;
}

export async function update(articleId, body) {
	let {
		context
	} = body;
	await Article.update({
		context: context
	}, {
		where: {
			id: articleId,
			status: Status.Normal,
			isDeleted: IsDeleted.No
		}
	});
}

export async function getOne(articleId) {
	let article = await Article.findOne({
		attributes: ['id', 'creator', 'context'],
		where: {
			id: articleId,
			status: Status.Normal,
			isDeleted: IsDeleted.No
		}
	});

	return article;
}

export async function remove(articleId) {
	await Article.update({
		isDeleted: IsDeleted.Yes
	}, {
		where: {
			id: articleId,
			status: Status.Normal,
			isDeleted: IsDeleted.No
		}
	});
}