export function getFormatData() {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	let month = currentDate.getMonth() + 1;
	let day = currentDate.getDate();
	month = month < 10 ? "0" + month : month;
	day = day < 10 ? "0" + day : day;
	return `${year}-${month}-${day}`;
}
export function getFormatDataTime() {
	const currentDate = new Date();
	const year = currentDate.getFullYear();
	let month = currentDate.getMonth() + 1;
	let day = currentDate.getDate();
	let hour = currentDate.getHours();
	let minute = currentDate.getMinutes();
	let second = currentDate.getSeconds();
	month = month < 10 ? "0" + month : month;
	day = day < 10 ? "0" + day : day;
	hour = hour < 10 ? "0" + hour : hour;
	minute = minute < 10 ? "0" + minute : minute;
	return `${year}-${month}-${day} ${hour}:${minute}`;
}
// label 列表
export const labelList = [
	"留言",
	"目标",
	"理想",
	"爱情",
	"学业",
	"家庭",
	"事业",
	"友情",
	"无题",
];

// 卡片背景色
export const cardColor = [
	"rgba(252,175,162,0.30)",
	"rgba(255,227,148,0.30)",
	"rgba(146,230,245,0.30)",
	"rgba(168,237,138,0.30)",
	"rgba(202,167,247,0.30)",
	"rgba(212,212,212,0.30)",
];
export const cardbgColor = [
	"rgba(252,175,162,1)",
	"rgba(255,227,148,1)",
	"rgba(146,230,245,1)",
	"rgba(168,237,138,1)",
	"rgba(202,167,247,1)",
];
