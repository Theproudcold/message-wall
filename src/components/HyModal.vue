<script setup>
const props = defineProps({
	title: {
		type: String,
	},
	isShow: {
		type: Boolean,
		default: false,
	},
});
const emit = defineEmits(["cloose"]);
const clooseModal = () => {
	emit("cloose");
};
</script>

<template>
	<transition name="modal">
		<div class="hy-modal" v-if="isShow">
			<div class="modal-inner">
				<div class="hy-modal-head">
					<p class="modal-title">{{ title }}</p>
					<i
						class="quit iconfont icon-close"
						@click="clooseModal"></i>
				</div>
				<div class="modal-main">
					<slot></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<style lang="scss" scoped>
.modal {
	&-enter {
		&-from {
			transform: translateX(360px);
		}
		&-active {
			transition: all 0.3s ease-in;
		}
		&-to {
			transform: translateX(0);
		}
	}
	&-leave {
		&-from {
			transform: translateX(0);
		}
		&-active {
			transition: all 0.3s ease-out;
		}
		&-to {
			transform: translateX(360px);
		}
	}
}
.hy-modal {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 52px;
	right: 180px;
	height: 100%;
	z-index: 1001;
	.modal-inner {
		position: absolute;
		height: 100%;
		width: 360px;
		background: hsla(0, 0%, 100%, 0.8);
		box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
		-webkit-backdrop-filter: blur(20px);
		backdrop-filter: blur(20px);
		.hy-modal-head {
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 18px;
			padding: 20px;
			.modal-title {
				color: var(--gray-1);
				font-weight: 600;
			}
			i {
				font-size: 18px;
				cursor: pointer;
			}
		}
		.modal-main {
			height: 100%;
			overflow-y: auto;
			margin: 2px;
			&::-webkit-scrollbar {
				/*滚动条整体样式*/
				width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
				height: 4px;
			}
			&::-webkit-scrollbar-thumb {
				/*滚动条里面小方块*/
				border-radius: 4x;
				background: rgba($color: #3b73f0, $alpha: 0.8);
			}
			&::-webkit-scrollbar-track {
				/*滚动条里面轨道*/
				border-radius: 4px;
				background: rgba($color: #000000, $alpha: 0);
			}
		}
	}
}
</style>
