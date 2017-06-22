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