<template>
	<NuxtLayout>
		<SectionFirst />
		<SectionEquipment />
		<SectionRentTerms />
		<SectionReviews />
	</NuxtLayout>
</template>

<style>
@font-face {
	font-family: "GetVoIP Grotesque";
	src: url("/fonts/ofont.ru_GetVoIP Grotesque.ttf") format("truetype");
}

@font-face {
	font-family: "Altone Trial";
	src: url("/fonts/AltoneTrial-Regular.ttf") format("truetype");
}

body {
	width: 100vw;
	height: 100vh;
	background-color: #000101;
	padding: 0;
	margin: 0;
	overflow-y: scroll;
	overflow-x: hidden;
	font-family: "GetVoIP Grotesque";
}

body::-webkit-scrollbar {
	display: none;
}
</style>
