<script setup>
import { getLists } from "../api/api";
import Topbar from "../components/Topbar.vue";
import Footbar from "../components/Footbar.vue";
import Card from "@/components/Card.vue";
import HyModal from "@/components/HyModal.vue";
import NewCard from "@/components/NewCard.vue";
import CardDetail from "@/components/CardDetail.vue";
import { ref } from "vue";
const title = ref("留言");
const cardList = [
	{
		type: 1,
		message:
			"山一程，水一程，身向榆关那更，雪一更，聒碎乡心梦不成。故园无此声。",
		name: "resr",
		userId: 110,
		moment: "2023-10-10",
		label: "留言",
		color: "red",
		imgurl: "eeeee",
	},
	{
		type: 1,
		message:
			"山一程，水一程，身。风一更，雪一更，聒碎乡心梦不成。故园无此声。",
		name: "resr",
		userId: 110,
		moment: "2023-10-10",
		label: "留言",
		color: "red",
		imgurl: "eeeee",
	},
	{
		type: 1,
		message:
			"山一程，榆关那畔行。夜深千帐灯。风一更，雪一更，聒碎乡心梦不成。故园无此声。",
		name: "resr",
		userId: 110,
		moment: "2023-10-10",
		label: "留言",
		color: "red",
		imgurl: "eeeee",
	},
	{
		type: 1,
		message:
			"山一程，水一程，身向榆关深千帐灯。风一更，雪一更，聒碎乡心梦不成。故园无此声。",
		name: "resr",
		userId: 110,
		moment: "2023-10-10",
		label: "留言",
		color: "red",
		imgurl: "eeeee",
	},
	{
		type: 1,
		message:
			"一程，水一程，身向榆关那畔行。夜深千帐灯。风一更，雪一更，聒碎乡心梦不成。故园无此声。",
		name: "resr",
		userId: 110,
		moment: "2023-10-10",
		label: "留言",
		color: "red",
		imgurl: "eeeee",
	},
	{
		type: 1,
		message:
			"山一，水一程，身向榆关那畔行。夜深千帐灯。风一更，雪一更，聒碎乡心梦不成。故园无此声。",
		name: "resr",
		userId: 110,
		moment: "2023-10-10",
		label: "留言",
		color: "red",
		imgurl: "eeeee",
	},
	{
		type: 1,
		message:
			"山一程，水一程，身向榆关那畔行。夜深千帐灯。风一更，雪一更，聒碎乡心梦不成。故园无此声。",
		name: "resr",
		userId: 110,
		moment: "2023-10-10",
		label: "留言",
		color: "red",
		imgurl: "eeeee",
	},
];
// 当前选中的卡片
const currentcard = ref(-1);
// 编辑卡片
const changeCard = (index) => {
	if (currentcard.value != index) {
		title.value = "留言";
		currentcard.value = index;
		isShowModel.value = true;
	} else {
		currentcard.value = -1;
		isShowModel.value = false;
	}
};

const selected = ref(-1);
const list = [
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
const toList = (index) => {
	selected.value = index;
};
async function onClick() {
	let res = await getLists(arr);
	console.log(res);
}

// 显示隐藏
const isShowModel = ref(false);
const addCard = () => {
	title.value = "写留言";
	showModel();
};
const showModel = () => {
	isShowModel.value = !isShowModel.value;
};
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
			<Card
				@click="changeCard(index)"
				class="node-list"
				v-for="(item, index) in cardList"
				:key="index"
				:note="item"
				:class="{ cardselect: index == currentcard }">
			</Card>
		</div>
		<HyModal :isShow="isShowModel" :title="title" @cloose="showModel">
			<NewCard
				:labels="list"
				@quit="showModel"
				v-if="currentcard == -1"></NewCard>
			<CardDetail v-else :card="cardList[currentcard]"></CardDetail>
		</HyModal>
		<div v-if="!isShowModel" class="add" @click="addCard">
			<i class="iconfont icon-plus"></i>
		</div>
	</div>
	<!-- <Footbar /> -->
</template>

<style lang="scss" scoped>
.content {
	width: 1200px;
	margin: 0 auto;
	padding-top: 52px;
	.title {
		user-select: none;
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
		user-select: none;
		.label-item {
			padding: 0 14px;
			margin: 0 4px;
			min-width: 16px;
			border: 2px solid transparent;
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
		.cardselect {
			border: 1px solid var(--prinary-color);
		}
		.node-list {
			height: 240px;
		}

		::v-deep(.card:hover) {
			margin-top: 0;
		}
	}
	.add {
		position: fixed;
		bottom: 20px;
		right: 20px;
		background-color: var(--gray-1);
		width: 60px;
		height: 60px;
		text-align: center;
		line-height: 60px;
		border-radius: 50%;
		i {
			font-size: 24px;
			color: var(--gray-10);
		}
	}
}
</style>
