let consts = {};

//返回结果
consts.ResponseStatus = [{
	id: "Normal",
	code: "E0",
	message: "ok"
}];

//状态
consts.Status = [{
	id: "Disable",
	value: 0,
	name: "disable"
}, {
	id: "Normal",
	value: 1,
	name: "正常"
}];

consts.IsDeleted = [{
	id: "Yes",
	value: 1,
	name: "删除"
}, {
	id: "No",
	value: 0,
	name: "正常"
}];

export default consts;