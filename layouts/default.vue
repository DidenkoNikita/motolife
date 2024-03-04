<template>
	<div class="layout">
		<Header />
		<main class="content">
			<slot />
		</main>
		<Footer />
	</div>
</template>

<style>
.layout {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.content {
	flex-grow: 1;
}
</style>
