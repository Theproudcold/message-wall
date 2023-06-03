<script setup>
import { getLists } from "../api/api";
import Topbar from "../components/Topbar.vue";
import Footbar from "../components/Footbar.vue";
const arr = {
	type: 1,
	message: "213213",
	name: "resr",
	userId: 110,
	moment: "2023-10-10",
	label: "res",
	color: "red",
	imgurl: "eeeee",
};
async function onClick() {
	let res = await getLists(arr);
	console.log(res);
}
</script>

<template>
	<Topbar />
	<!-- <Footbar /> -->
</template>

<style lang="less" scoped>
.title {
	.top {
		height: 100px;
	}
}
</style>
