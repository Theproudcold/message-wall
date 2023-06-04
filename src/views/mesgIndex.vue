<script setup>
import { getLists } from "../api/api";
import Topbar from "../components/Topbar.vue";
import Footbar from "../components/Footbar.vue";
import Card from "@/components/Card.vue";
import { ref } from "vue";
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
const selected = ref(-1);
const list = ["留言", "目标", "理想", "爱情", "学业"];
const toList = (index) => {
	selected.value = index;
};
async function onClick() {
	let res = await getLists(arr);
	console.log(res);
}
</script>

<template>
	<Topbar />
	<div class="content">
		<div class="title">
			<h1 class="name">留言墙</h1>
			<p class="slogan">“不计划太多反而会勇敢冒险”</p>
		</div>
		<ul class="label">
			<li
				class="label-item"
				:class="{ selected: selected == -1 }"
				@click="toList(-1)">
				全部
			</li>
			<li
				class="label-item"
				:class="{ selected: selected == index }"
				v-for="index in list"
				:key="index"
				@click="toList(index)">
				{{ index }}
			</li>
		</ul>
		<div class="main">
			<Card class="node-list" v-for="index in 12" :key="index"></Card>
		</div>
		.
	</div>
	<!-- <Footbar /> -->
</template>

<style lang="scss" scoped>
.content {
	width: 1200px;
	margin: 0 auto;
	padding-top: 52px;
	.title {
		display: flex;
		flex-direction: column;
		text-align: center;
		.name {
			font-size: 48px;
			padding-top: 30px;
			color: var(--gray-1);
		}
		.slogan {
			padding: 10px 0;
			color: var(--gray-3);
		}
	}
	.label {
		display: flex;
		justify-content: center;
		.label-item {
			padding: 0 14px;
			margin: 0 4px;
			min-width: 16px;
			color: var(--gray-2);
			height: 28px;
			line-height: 28px;
			border-radius: 16px;
			cursor: pointer;
		}
		.selected {
			color: var(--prinary-color);
			font-weight: 600;
			border: 2px solid var(--prinary-color);
		}
	}
	.main {
		padding-top: 20px;
		display: flex;
		flex-wrap: wrap;
		margin: auto;
		.node-list {
			height: 240px;
		}

		::v-deep(.card:hover) {
			margin-top: 0;
		}
	}
}
</style>
