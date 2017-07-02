'use strict';
import {
	pick
} from 'lodash';
let {
	ResponseStatusMap
} = OptionMaps;
import {
	OptionMaps
} from '../../../config/consts';
import {
	log
} from '../core/log';

export function wrapBody(error, data) {
	let status = pick(ResponseStatusMap['Normal'], ['code', 'message']);
	if (error) {
		log.error({
			type: "WebApi",
			err: error
		});
		status = {
			code: error.code ? error.code : 'E300',
			message: error.message
		}
		return {
			status: status
		}
	}
	return {
		data: data,
		status: status
	}
}