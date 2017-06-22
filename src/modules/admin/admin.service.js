import {
	Admin
} from '../common/models';

export async function getAdminById(id) {
	return Admin.findOne({
		attributes: ['id', 'userName', 'level'],
		where: {
			id: id,
			isDeleted: IsDeleted.No,
			status: Status.Normal
		}
	});
}