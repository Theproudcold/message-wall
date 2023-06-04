<script setup>
const props = defineProps({
	size: {
		default: "base",
	},
	type: {
		default: "primary",
	},
	round: {
		default: false,
	},
});
</script>
<template>
	<button class="hy-button" :class="[size, type, { round: round }]">
		<slot></slot>
	</button>
</template>

<style lang="scss" scoped>
.hy-button {
	width: 100%;
	background: #3b73f0;
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	user-select: none;
	cursor: pointer;
	transition: all 0.2s;
}
.round {
	border-radius: 24px;
}
// size
.max {
	min-width: 100px;
	height: 48px;
	padding: 0 24px;
}
.base {
	min-width: 80px;
	height: 36px;
	padding: 0 20px;
}
.small {
	min-width: 72px;
	height: 32px;
	padding: 0 20px;
}
// type
.primary {
	background: var(--gray-1);
	color: var(--gray-10);
}
.secondary {
	background: none;
	color: var(--gray-1);
	border: 1px solid var(--gray-1);
}
</style>
