<template>
	<div class="logo"></div>
</template>

<style>
.logo {
	background: url("/images/logo.png");
	background-size: contain;
	background-repeat: no-repeat;
}

@media (min-width: 768px) {
	.logo {
		width: 100px;
		height: 100px;
	}
}

@media (max-width: 767px) {
	.logo {
		width: 60px;
		height: 60px;
	}
}
</style>
