<template>
	<div id="equipment" class="equipmentSection">
		<div class="firstSectionDescriptionTitleWhite">
			<span class="firstSectionDescriptionTitleOrange">most popular</span>
			motorbike rental deals
		</div>
		<div class="bikeCardsContainer">
			<div class="bikeCardsWrapper" v-for="(motorcycle, index) in motorcyclesLanding">
				<BikeCard :key="index" :motorcycle />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { motorcyclesLanding } from '~/public/constants/constants';

export default {
	data() {
		return {
			motorcyclesLanding,
		};
	},
};
</script>

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

.bikeCardsContainer {
	display: flex;
	justify-content: center;
	align-items: center;
}

@media (min-width: 768px) {
	.bikeCardsWrapper {
		width: calc(100% - 200px);
		gap: 40px;
	}

	.bikeCardsContainer {
		gap: 40px;
	}
}

@media (max-width: 767px) {
	.bikeCardsWrapper {
		width: calc(100% - 48px);
		gap: 50px;
		flex-direction: column;
	}

	.bikeCardsContainer {
		flex-direction: column;
		gap: 50px;
		align-items: start;
	}

	.equipmentSection {
		gap: 50px;
		padding: 24px 24px 0px;
	}
}
</style>
