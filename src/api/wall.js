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
