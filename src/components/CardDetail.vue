<script setup>
import Card from "./Card.vue";
import { onMounted, ref, watch } from "vue";
import HyButton from "./HyButton.vue";
import { getComment, getCard, addComments } from "@/api/wall";
import { getFormatDataTimeSecond } from "@/utils/data";
const props = defineProps({
	cardID: {},
});
const cardID = ref(props.cardID.id);
const getCommentList = async (id) => {
	const { data } = await getComment(id);
	commont.value = data;
	commont.value.sort(function (a, b) {
		return new Date(b.moment) - new Date(a.moment);
	});
	console.log(commont.value);
};
const card = ref({});
const getCardContent = async (id) => {
	const { data } = await getCard(id);
	card.value = data;
};
// 提交评论
const submitComments = () => {
	const comments = {
		wallId: cardID.value,
		userId: "12314",
		imgurl: null,
		comment: message.value,
		name: name.value,
		moment: getFormatDataTimeSecond(),
	};
	console.log(comments);
	addComments(comments).then(() => {
		getCommentList(cardID.value);
	});
};
onMounted(() => {
	getCardContent(cardID.value);
	getCommentList(cardID.value);
});
watch(
	() => props.cardID,
	(newvalue, oldValue) => {
		getCardContent(newvalue.id);
		getCommentList(newvalue.id);
	}
);
const portrait = [
	"linear-gradient(180deg,#FFA9D9 0%,#E83D3D 100%)",
	"linear-gradient(180deg,#FFA7EB 0%,#F026A8 100%)",
	"linear-gradient(180deg,#F5A8FF 0%,#BF23E5 100%)",
	"linear-gradient(180deg,#DFA1FF 0%,#9A36F0 100%)",
	"linear-gradient(180deg,#C9AAFF 0%,#6D3CF5 100%)",
	"linear-gradient(180deg,#9EAAFF 0%,#3846F4 100%)",
	"linear-gradient(180deg,#8CD8FF 0%,#2A6AF0 100%)",
	"linear-gradient(180deg,#7BE7FF 2%,#1E85E2 100%)",
	"linear-gradient(180deg,#92FDFF 0%,#14B2DD 100%)",
	"linear-gradient(180deg,#89FED8 0%,#18C997 100%)",
	"linear-gradient(180deg,#D7FFA7 0%,#5ED52A 100%)",
	"linear-gradient(180deg,#FFED48 0%,#FD9E16 100%)",
	"linear-gradient(180deg,#FFDC83 0%,#F88816 100%)",
	"linear-gradient(180deg,#FFBA8D 1%,#EB6423 100%)",
];
const commont = ref([]);
const message = ref("");
const name = ref("");
</script>

<template>
	<div class="card-detail">
		<div class="card-head">
			<p class="rip">联系撕掉</p>
			<p class="report">举报</p>
		</div>
		<div class="card-main">
			<Card :note="card"></Card>
		</div>
		<div class="form">
			<textarea
				class="message"
				v-model="message"
				placeholder="评论..."
				maxlength="96"></textarea>
			<div class="bt">
				<input
					v-model="name"
					class="name"
					type="text"
					placeholder="签名" />
				<HyButton round="true" @click="submitComments">确定</HyButton>
			</div>
			<p class="title">评论&nbsp;{{ commont.length }}</p>
			<div class="commont">
				<div
					class="commont-item"
					v-for="(item, index) in commont"
					:key="index">
					<div
						class="user-head"
						:style="{
							backgroundImage: portrait[index],
						}"></div>
					<div class="commont-msg">
						<div class="msg-top">
							<p class="name">{{ item.name }}</p>
							<p class="time">{{ item.moment }}</p>
						</div>
						<div class="msg-main">{{ item.comment }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card-detail {
	.card-head {
		display: flex;
		font-size: 16px;
		padding: 20px;
		.rip {
			cursor: pointer;
			color: var(--prinary-color);
		}
		.report {
			margin-left: auto;
			cursor: pointer;
			color: var(--warning-color);
		}
	}
	.card-main {
		padding: 20px;
	}
	.form {
		padding: 0 20px;
		.message {
			border: none;
			resize: none;
			background: none;
			font-size: 18px;
			height: 72px;
			width: 100%;
			padding: 8px;
			border: 1px #000 solid;
		}
		.bt {
			display: flex;
			.name {
				width: 200px;
				height: 36px;
				line-height: 20px;
				padding: 8px;
				margin-right: 6px;
				background: none;
				border: 1px #000 solid;
			}
		}
	}
	.title {
		font-weight: 600;
		padding: 20px 0 12px 0;
	}
	.commont-item {
		display: flex;
		align-items: center;
		padding-bottom: 30px;
		.user-head {
			width: 28px;
			height: 28px;
			border-radius: 50%;
		}
		.commont-msg {
			padding: 8px;
			.msg-top {
				display: flex;
				align-items: center;
				.name {
					font-weight: 600;
					margin-right: 4px;
					color: var(--gray-1);
				}
				.time {
					font-size: 12px;
					color: var(--gray-3);
				}
			}
			.msg-main {
				padding-top: 4px;
			}
		}
	}
}
</style>
