import request from "@/utils/https";

// 获取全部标签
export function getLabelList(label) {
	return request({
		url: "/label",
		params: {
			label: label,
		},
	});
}
// 添加数据
export function addWall(wall) {
	return request({
		url: "/addWall",
		method: "post",
		data: wall,
	});
}
// 获取卡片详情
export function getCard(id) {
	return request({
		url: "/getCard",
		params: {
			id: id,
		},
	});
}
// 获取评论数据
export function getComment(id) {
	return request({
		url: "/getComment",
		params: {
			id: id,
		},
	});
}
