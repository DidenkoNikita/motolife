<template>
	<div class="bikeCard">
		<div class="nameAndImageBikeCardContainer">
			<div class="typeOfBikeCard">road motorbikes</div>
			<img class="imageOfBikeCard" src="/images/bike1.png" />
			<div class="imageOfBikeCardOverlay" />
			<button class="iconButtonHeart">
				<IconHeart />
			</button>
		</div>
		<div class="motorcycleNameBikeCard">Yamaha FZ6N</div>
		<div class="characteristicsContainerBikeCard">
			<div class="typeOfBikeCard">one hour rental</div>
			<div class="delimiterBikeCard" />
			<div class="priceBikeCard">100$</div>
		</div>
		<div class="characteristicsContainerBikeCard">
			<div class="typeOfBikeCard">rental day</div>
			<div class="delimiterBikeCard" />
			<div class="priceBikeCard">500$</div>
		</div>
		<div class="characteristicsContainerBikeCard">
			<div class="typeOfBikeCard">deposit</div>
			<div class="delimiterBikeCard" />
			<div class="priceBikeCard">2000$</div>
		</div>
		<div class="buttonContainerBikeCard">
			<button class="addButtonBikeCard">add</button>
		</div>
	</div>
</template>

<style>
.bikeCard {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: flex-start;
	gap: 30px;
}

.nameAndImageBikeCardContainer {
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: flex-start;
	align-items: flex-start;
	position: relative;
}

.typeOfBikeCard {
	color: #fbfcfc;
	font-family: "Altone Trial";
	font-size: 18px;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0.36px;
	text-transform: uppercase;
	text-align: center;
}

.imageOfBikeCard {
	width: 100%;
	box-sizing: border-box;
}

.imageOfBikeCardOverlay {
	position: absolute;
	top: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	opacity: 0.6;
	background: var(--Style, #000101);
	mix-blend-mode: overlay;
}

.iconButtonHeart {
	position: absolute;
	top: 50px;
	right: 10px;
	width: 50px;
	height: 50px;
	background-color: #000101;
	border: none;
	border-radius: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
}

.iconButtonHeart:hover {
	border: 1px solid #f6a63f;
}

.iconButtonHeart:active {
	border: 1px solid #e3881a;
}

.motorcycleNameBikeCard {
	color: #f4931c;
	font-family: "GetVoIP Grotesque";
	font-size: 20px;
	font-weight: 700;
	line-height: 30px;
	letter-spacing: 1px;
	text-transform: uppercase;
}

.characteristicsContainerBikeCard {
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
}

.delimiterBikeCard {
	width: 30px;
	height: 1px;
	background: #fbfcfc;
}

.priceBikeCard {
	color: #fbfcfc;
	font-family: "GetVoIP Grotesque";
	font-size: 20px;
	font-weight: 700;
	line-height: 30px;
	letter-spacing: 1px;
	text-transform: uppercase;
}

.buttonContainerBikeCard {
	width: 100%;
	display: flex;
	justify-content: flex-end;
	align-items: center;
}

.addButtonBikeCard {
	border: none;
	background-color: #f4931c;
	height: 50px;
	padding: 6px 20px 0;
	color: #000101;
	text-align: center;
	font-family: "GetVoIP Grotesque";
	font-size: 20px;
	font-weight: 700;
	line-height: 30px;
	letter-spacing: 1px;
	text-transform: uppercase;
	cursor: pointer;
}

.addButtonBikeCard:hover {
	background-color: #f6a63f;
}

.addButtonBikeCard:active {
	background-color: #e3881a;
}

@media (min-width: 768px) {
	.bikeCard {
		width: 28.49vw;
	}

	.imageOfBikeCard {
		height: 37.04vh;
		border-left: 3px solid #f4931c;
	}

	.imageOfBikeCardOverlay {
		width: calc(100% - 3px);
		left: 2.7px;
		height: 37.04vh;
	}
}

@media (max-width: 767px) {
	.nameAndImageBikeCardContainer {
		gap: 10px;
	}

	.bikeCard {
		width: 87.79vw;
	}

	.imageOfBikeCard {
		height: 29.58vh;
		border-left: 1.892px solid #f4931c;
	}

	.imageOfBikeCardOverlay {
		width: calc(100% - 1.892px);
		left: 1.892px;
		height: 29.58vh;
	}
}
</style>
