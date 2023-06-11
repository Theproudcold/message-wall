<script setup>
import { ref } from "vue";
import HyButton from "./HyButton.vue";
import { login } from "@/api/user";
import { mainStore } from "@/store/index";
import { useRouter } from "vue-router";

const store = mainStore();
const nav = ref([]);
nav.value = [
	{
		type: 0,
		title: "留言墙",
	},
	{
		type: 1,
		title: "照片墙",
	},
];
const active = ref(0);
const onClick = (type) => {
	active.value = type;
	console.log(achive.value);
};
// 登录页的显示与隐藏
const show = ref(false);
const showLogin = () => {
	if (store.token == "") {
		show.value = !show.value;
	}
};

// 登录
const username = ref("");
const password = ref("");
const goLogin = async () => {
	const user = {
		username: username.value,
		password: password.value,
	};
	const { data } = await login(user);
	if (data) {
		store.$patch((state) => {
			state.token = data;
		});
		show.value = !show.value;
		alert("登录成功");
	}
};
const userNav = ref(false);
// 注册
const router = useRouter();
const register = () => {
	router.push("/register");
};
</script>
<template>
	<div class="topbar">
		<div class="logo"><h1>Hypo</h1></div>
		<div class="nav">
			<hy-button
				class="nav-item button"
				v-for="item in nav"
				:round="true"
				:class="{ active: item.type == active }"
				:key="item.type"
				@click="onClick(item.type)"
				>{{ item.title }}
			</hy-button>
		</div>
		<div
			class="topbar-right"
			@mouseenter="userNav = true"
			@mouseleave="userNav = false">
			<div class="moon"></div>
			<div class="user" @click="showLogin">
				<div class="nouser">
					<img v-if="store.token" src="../assets/logo.png" alt="" />
					<ul
						class="dropDown-nav"
						v-if="store.token && userNav"
						@mouseleave="userNav = true">
						<li>退出</li>
					</ul>
				</div>
			</div>
		</div>
		<transition name="showsignin">
			<div class="signin" v-show="show">
				<i class="quit iconfont icon-close" @click="showLogin"></i>
				<p class="welcome">欢迎登录</p>
				<h2 class="title">留言墙</h2>
				<div class="signin-body">
					<input
						class="inputs"
						v-model="username"
						type="text"
						placeholder="用户名" />
					<input
						class="inputs"
						v-model="password"
						type="password"
						placeholder="密码" />
				</div>
				<hy-button class="login" @click="goLogin">登录</hy-button>
				<div class="signin-bottom">
					<p class="forget">忘记密码？</p>
					<p class="register" @click="register">注册</p>
				</div>
			</div>
		</transition>
	</div>
</template>

<style lang="scss" scoped>
.topbar {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 30px;
	width: 100%;
	box-sizing: border-box;
	height: 52px;
	background: var(--gray-10, hsla(0, 0%, 100%, 0.8));
	box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1001;
	-webkit-backdrop-filter: blur(20px);
	backdrop-filter: blur(20px);
	.logo {
		user-select: none;
		letter-spacing: 2px;
		color: var(--prinary-color);
	}
	.nav {
		display: flex;
		align-items: center;
		.nav-item {
			font-weight: 700;
			padding: 0 20px;
			margin: 10px;
			color: var(--gray-1);
			background: var(--gray-10);
		}
		.active {
			color: var(--gray-10);
			background-color: var(--prinary-color);
		}
	}
	.topbar-right {
		display: flex;
		align-items: center;
		height: 100%;
		.user {
			position: relative;
			height: 36px;
			width: 36px;
			.nouser {
				width: 100%;
				height: 100%;
				cursor: pointer;
				border-radius: 20px;
				background-image: linear-gradient(
					180deg,
					rgba(81, 169, 255, 0.5),
					#51a9ff
				);
				img {
					width: 100%;
					height: 100%;
				}
				.dropDown-nav {
					position: absolute;
					top: 44px;
					left: -4px;
					background-color: #fff;
					li {
						position: relative;
						font-size: 14px;
						width: 44px;
						padding: 4px 8px;
					}
				}
			}
		}
	}
	.showsignin {
		&-enter {
			&-from {
				opacity: 0;
			}
			&-active {
				transition: all 0.3s ease-in;
			}
			&-to {
				opacity: 1;
			}
		}
		&-leave {
			&-from {
				opacity: 1;
			}
			&-active {
				transition: all 0.3s ease-out;
			}
			&-to {
				opacity: 0;
			}
		}
	}
	.signin {
		position: fixed;
		top: 62px;
		right: 14px;
		width: 260px;
		height: 320px;
		background: hsla(0, 0%, 100%, 0.8);
		box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.1);
		-webkit-backdrop-filter: blur(20px);
		backdrop-filter: blur(20px);
		text-align: center;
		padding: 0 30px;
		.quit {
			position: absolute;
			right: 16px;
			top: 14px;
			color: var(--fontColorBase, #5b5b5b);
			cursor: pointer;
		}
		.welcome {
			padding-top: 40px;
			font-weight: 700;
			font-size: 14px;
			color: var(--prinary-color);
		}
		.title {
			margin: 10px 0;
			font-size: 24px;
			color: var(--gray-1);
		}
		.signin-body {
			.inputs {
				width: 100%;
				margin-top: 12px;
				text-align: center;
				padding: 8px;
				height: 36px;
				border: 1px solid var(--gray-3);
				background: none;
				outline: none;
				color: var(--gray-1);
				&:focus {
					border-color: var(--gray-1);
				}
			}
		}
		.login {
			margin-top: 20px;
		}
		.signin-bottom {
			display: flex;
			justify-content: space-between;
			margin-top: 10px;
			p {
				cursor: pointer;
			}
			.forget {
				color: var(--gray-3);
			}
			.register {
				color: var(--link-color);
			}
		}
	}
}
</style>
