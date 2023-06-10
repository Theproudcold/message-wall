<script setup>
import { ref } from "vue";
import { addWall } from "@/api/wall.js";
import { getFormatDataTime, cardColor, cardbgColor } from "@/utils/data";
import HyButton from "@/components/HyButton.vue";
const props = defineProps({
	labels: {
		type: Array,
	},
});
const emit = defineEmits(["quit"]);
const close = () => {
	emit("quit");
};
// 提交
const submit = () => {
	const wall = {
		type: 0,
		message: message.value,
		name: name.value,
		userId: "213123",
		moment: getFormatDataTime(),
		label: isSelect.value,
		color: labelColor.value,
	};
	// 添加
	addWall(wall).then(() => {
		emit("quit");
	});
};

const isSelect = ref(0);
const chooseColor = (index) => {
	isSelect.value = index;
};
// 标签颜色
const labelColor = ref(0);
const changeLabel = (index) => {
	labelColor.value = index;
};
//
const message = ref("");
const name = ref("");
</script>
<template>
	<div class="new-card">
		<div class="colors">
			<div
				class="colors-item"
				:class="{ selected: isSelect === index }"
				v-for="(item, index) in cardbgColor"
				:key="index"
				:style="{ background: item }"
				@click="chooseColor(index)"></div>
		</div>
		<div class="card-main" :style="{ background: cardColor[isSelect] }">
			<textarea
				class="message"
				v-model="message"
				placeholder="留言..."
				maxlength="96"></textarea>
			<input v-model="name" class="name" type="text" placeholder="签名" />
		</div>
		<h3 class="title">选择标签</h3>
		<div class="labels">
			<p
				class="label-item"
				v-for="(item, index) in labels"
				:key="index"
				:class="{ labelselected: labelColor == index }"
				@click="changeLabel(index)">
				{{ item }}
			</p>
		</div>
		<h3 class="title">免责声明</h3>
		<p class="mzsm">
			本产品本人独自开发的，为便于与用户交流的留言平台。请不要利用此平台服务制作、上传、下载、复制、发布、传播或者转载如下内容：<br />
			1、反对宪法所确定的基本原则的；<br />
			2、危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家 统一的；<br />
			3、损害国家荣誉和利益的；<br />
			4、煽动民族仇恨、民族歧视，破坏民族团结的；<br />
			5、破坏国家宗教政策，宣扬邪教和封建迷信的；<br />
			6、散布谣言，扰乱社会秩序，破坏社会稳定的；<br />
			7、散布淫秽、色情、赌博、暴力、凶杀、恐怖或者教唆犯罪的；<br />
			8、侮辱或者诽谤他人，侵害他人合法权益的；<br />
			9、含有法律、行政法规禁止的其他内容的信息。<br />
		</p>
		<div class="card-footer">
			<HyButton
				class="abandon"
				size="max"
				round="true"
				type="secondary"
				@click="close">
				丢弃
			</HyButton>
			<HyButton class="sure" size="max" round="true" @click="submit"
				>确定</HyButton
			>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.new-card {
	padding: 20px;
	.colors {
		display: flex;
		height: 36px;
		.colors-item {
			width: 24px;
			height: 24px;
			margin-right: 8px;
		}
		.selected {
			border: 1px solid rgba(59, 115, 240, 1);
		}
	}
	.card-main {
		width: 100%;
		height: 240px;
		padding: 12px;
		transition: all 0.3s;
		.message {
			border: none;
			resize: none;
			background: none;
			font-size: 18px;
			height: 172px;
			width: 100%;
			padding: 8px;
		}
		.name {
			width: 100%;
			height: 36px;
			line-height: 20px;
			padding: 8px;
			background: none;
			border: 1px #fff solid;
		}
	}
	.title {
		color: var(--gray-1);
		padding-top: 30px;
	}
	.labels {
		display: flex;
		flex-wrap: wrap;
		.label-item {
			padding: 4px 10px;
			border-radius: 10px;
			margin: 16px 4px 0 0;
			user-select: none;
			cursor: pointer;
		}
		.labelselected {
			background-color: #ebebeb;
			font-weight: 600;
		}
	}
	.mzsm {
		font-size: 14px;
		letter-spacing: 1px;
		color: var(--gray-3);
	}
	.card-footer {
		height: 88px;
		display: flex;
		align-items: center;
		position: absolute;
		left: 0;
		bottom: 48px;
		box-sizing: border-box;
		background: var(--other1, hsla(0, 0%, 100%, 0.8));
		width: 100%;
		padding: 0 20px;
		-webkit-backdrop-filter: blur(10px);
		backdrop-filter: blur(10px);
		.abandon {
			margin-right: 20px;
		}
		.sure {
			width: 600px;
		}
	}
}
</style>
