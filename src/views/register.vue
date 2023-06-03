<script setup>
import { ref } from "vue";
import HyButton from "../components/HyButton.vue";
const username = ref("");
const password = ref("");
const mail = ref("");
let showPsw = ref(true);
let type = ref("password");
const show = (id) => {
	const arr = ["password", "text"];
	showPsw.value = !showPsw.value;
	type = arr[id];
};
</script>
<template>
	<div class="register">
		<div class="content">
			<div class="header">
				<h1>Hypo</h1>
			</div>
			<div class="main">
				<h2 class="title">账号注册</h2>
				<p class="hint">该账号可登录 hypo 开发的所有产品</p>
				<div class="inputs">
					<input
						v-model="username"
						placeholder="请输入你优雅的用户名"
						type="text"
						name="" />
				</div>
				<div class="inputs psw">
					<input
						v-model="password"
						placeholder="请输入你复杂到极致的密码"
						:type="type"
						name="" />
					<i
						v-if="showPsw"
						class="iconfont icon-eye-close"
						@click="show(0)"></i>
					<i v-else class="iconfont icon-eye" @click="show(1)"></i>
				</div>
				<div class="inputs">
					<input
						v-model="mail"
						placeholder="请输入你板板正正的邮箱"
						type="text"
						name="" />
				</div>
				<div class="button">
					<HyButton size="max" round="true">注册</HyButton>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.register {
	height: 100vh;
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.header {
			letter-spacing: 6px;
			color: var(--prinary-color);
			margin: 40px;
		}
		.main {
			background: var(--gray-10);
			width: 390px;
			min-height: 400px;
			border-radius: 8px;
			padding: 40px;
			.title {
				letter-spacing: 2px;
				color: var(--gray-1);
			}
			.hint {
				font-size: 14px;
				letter-spacing: 2px;
				color: var(--gray-3);
				margin-bottom: 20px;
			}
			.inputs {
				margin-top: 12px;
				input {
					width: 100%;
					text-align: left;
					padding: 20px;
					height: 42px;
					border-radius: 20px;
					border: 1px solid var(--gray-3);
					background: none;
					outline: none;
					color: var(--gray-1);
					&:focus {
						border-color: var(--gray-1);
					}
				}
			}
			.psw {
				position: relative;
				i {
					color: var(--gray-3);
					font-size: 26px;
					position: absolute;
					right: 10px;
					bottom: 8px;
				}
			}
			.button {
				margin-top: 22px;
			}
		}
	}
}
</style>
