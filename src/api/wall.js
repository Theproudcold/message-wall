import request from "@/utils/https";

export function getLabelList(label) {
	return request({
		url: "/label",
		params: {
			label: label,
		},
	});
}
