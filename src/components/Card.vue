<script setup>
const props = defineProps({
	note: {
		default: {},
	},
});
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
</script>
<template>
	<div class="card">
		<div class="card-header">
			<p class="time">{{ note.moment }}</p>
			<p class="label">{{ list[note.label] }}</p>
		</div>
		<div class="card-main">
			<p>
				{{ note.message }}
			</p>
		</div>
		<div class="card-bottom">
			<div class="state">点赞</div>
			<div class="name">张三</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.card {
	margin: 6px;
	padding: 10px;
	// LEARN:解决抖动问题
	border: 1px solid transparent;
	background-color: rgba($color: #fcafa2, $alpha: 0.4);
	transition: all 0.3s;
	.card-header {
		display: flex;
		justify-content: space-between;
		p {
			font-size: 16px;
			color: var(--gray-2);
		}
	}
	.card-main {
		max-width: 260px;
		padding: 20px 0;
		p {
			font-size: 14px;
			line-height: 1.4;
			height: 140px;
			cursor: pointer;
		}
	}
	.card-bottom {
		display: flex;
		justify-content: space-between;
		.name {
			font-weight: 600;
			color: var(--gray-1);
		}
	}
}
</style>
