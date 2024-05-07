<template>
	<div class="header">
		<Logo />
		<button class="loginBtn" @click="router.push({ path: '/login' })">log in</button>
	</div>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

<style>
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.loginBtn {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 124px;
	padding-top: 7px;
	height: 50px;
	background: #f4931c;
	border: none;
	color: #000101;
	font-size: 20px;
	font-family: "GetVoIP Grotesque";
	font-style: normal;
	font-weight: 700;
	line-height: 30px;
	letter-spacing: 1px;
	text-transform: uppercase;
	z-index: 1;
	cursor: pointer;
}

.loginBtn:hover {
	background: #f6a63f;
}

.loginBtn:active {
	background: #e3881a;
}

@media (min-width: 768px) {
	.header {
		height: 140px;
		padding: 0 100px;
	}
}

@media (max-width: 767px) {
	.header {
		height: 100px;
		padding: 0 24px;
	}
}
</style>
