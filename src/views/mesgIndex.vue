<script setup>
import Topbar from "../components/Topbar.vue";
import Footbar from "../components/Footbar.vue";
import Card from "@/components/Card.vue";
import HyModal from "@/components/HyModal.vue";
import NewCard from "@/components/NewCard.vue";
import CardDetail from "@/components/CardDetail.vue";
import { onMounted, ref } from "vue";
import { getLabelList } from "@/api/wall.js";

import { labelList } from "@/utils/data";
const title = ref("留言");
// 获取对应标签列表数据
const getCardList = async (id) => {
	const { data } = await getLabelList(id);
	cardList.value = data;
	cardList.value.sort(function (a, b) {
		return new Date(b.moment) - new Date(a.moment);
	});
};
onMounted(() => {
	getCardList();
});
const cardList = ref([]);
// 当前选中的卡片
const currentcard = ref(-1);
// 编辑卡片
const changeCard = (index) => {
	if (currentcard.value != index) {
		title.value = "详情";
		currentcard.value = index;
		isShowModel.value = true;
	} else {
		currentcard.value = -1;
		isShowModel.value = false;
	}
};
const selected = ref(-1);
const toList = (index) => {
	selected.value = index;
	getCardList(selected.value);
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
const createCard = () => {
	showModel();
	getCardList();
};
const showModel = () => {
	if (currentcard.value != -1) {
		currentcard.value = -1;
	}
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
				v-for="(item, index) in labelList"
				:key="index"
				@click="toList(index)">
				{{ item }}
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
				:labels="labelList"
				@quit="createCard"
				v-if="currentcard == -1"></NewCard>
			<CardDetail v-else :cardID="cardList[currentcard]"></CardDetail>
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
