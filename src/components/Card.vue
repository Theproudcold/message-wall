<script setup></script>
<template>
	<div class="card">
		<div class="card-header">
			<p class="time">06/01 18:58</p>
			<p class="label">留言</p>
		</div>
		<div class="card-main">
			<p>
				山一程，水一程，身向榆关那畔行。夜深千帐灯。
				风一更，雪一更，聒碎乡心梦不成。故园无此声。
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
	width: 288px;
	margin: 6px;
	padding: 10px;
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
