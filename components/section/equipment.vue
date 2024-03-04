<template>
	<div id="equipment" class="equipmentSection">
		<div class="firstSectionDescriptionTitleWhite">
			<span class="firstSectionDescriptionTitleOrange">most popular</span>
			motorbike rental deals
		</div>
		<div class="bikeCardsWrapper">
			<BikeCard />
		</div>
	</div>
</template>

<style>
.equipmentSection {
	width: 100vw;
	padding: 100px 100px 50px;
	display: flex;
	flex-direction: column;
	gap: 50px;
	box-sizing: content-box;
	justify-content: flex-start;
	align-items: flex-start;
	box-sizing: border-box;
}

.bikeCardsWrapper {
	height: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: flex-start;
}

@media (min-width: 768px) {
	.bikeCardsWrapper {
		width: calc(100% - 200px);
		gap: 40px;
	}
}

@media (max-width: 767px) {
	.bikeCardsWrapper {
		width: calc(100% - 48px);
		gap: 50px;
		flex-direction: column;
	}

	.equipmentSection {
		gap: 50px;
		padding: 24px 24px 0px;
	}
}
</style>
