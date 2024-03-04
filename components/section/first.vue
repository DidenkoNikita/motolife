<template>
	<div id="motorbikes" class="firstSection">
		<div class="firstSectionDescription">
			<div class="firstSectionDescriptionTitleWhite">
				Motorcycle
				<span class="firstSectionDescriptionTitleOrange">Rental</span>
				<span class="firstSectionDescriptionTitleOrange">Service</span>
				and everything you need for driving
			</div>
			<div class="firstSectionDescriptionTitleWhiteThin">
				Drive into the world of fast and comfortable driving
			</div>
			<div class="firstSectionSignUpButtonWrapper">
				<button class="signUpButton">sign up</button>
			</div>
		</div>
		<div class="bikeFirstSection">
			<div class="bikeGradient">
				<div class="bikeOpacity" />
			</div>
			<div class="firstSectionSelectWrapper">
				<div class="selectFirstSection">
					motorbikes<IconChevronDown color="#F4931C" />
				</div>
				<div class="motolifeFirstSection">motolife</div>
				<div class="selectFirstSection">
					equipment<IconChevronDown color="#F4931C" />
				</div>
			</div>
		</div>
		<div class="animateLogoFirstSection"></div>
	</div>
</template>

<style>
.firstSection {
	width: 100vw;
	height: 1081px;
	display: flex;
	align-items: center;
	margin-top: -140px;
}

.bikeFirstSection {
	background: no-repeat url("/images/motorbike.png");
	width: 32.6%;
	height: 100%;
	background-size: 100% 100%;
}

.bikeGradient {
	width: 100%;
	height: 100%;
	background: linear-gradient(270deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%),
		linear-gradient(-270deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%),
		linear-gradient(-180deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%),
		linear-gradient(0deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%);
}

.bikeOpacity {
	background: no-repeat url("/images/opacity.png");
	width: 100%;
	height: 100%;
	opacity: 0.6;
	background: #000101;
	mix-blend-mode: overlay;
}

.firstSectionDescription {
	width: 33.6%;
	height: 100%;
	display: flex;
	flex-direction: column;
	/* gap: 40px; */
	justify-content: center;
	align-items: flex-start;
	padding-left: 96px;
}

.animateLogoFirstSection {
	width: 36%;
	height: 63%;
	background-image: url("/images/animateLogo.png");
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	margin-right: -40px;
	animation: spin 20s linear infinite;
}

.firstSectionDescriptionTitleWhite {
	color: #fff;
	font-family: "GetVoIP Grotesque";
	font-weight: 700;
	text-transform: uppercase;
}

.firstSectionDescriptionTitleOrange {
	color: #f4931c;
	font-family: "GetVoIP Grotesque";
	font-weight: 700;
	text-transform: uppercase;
}

.firstSectionDescriptionTitleWhiteThin {
	color: #fbfcfc;
	font-family: "Altone Trial";
	font-weight: 400;
	text-transform: uppercase;
}

.firstSectionSignUpButtonWrapper {
	width: 100%;
	display: flex;
	justify-content: flex-end;
}

.signUpButton {
	display: flex;
	height: 50px;
	padding: 0px 20px;
	justify-content: center;
	align-items: center;
	border: 1px solid #f4931c;
	background-color: transparent;
	color: #f4931c;
	font-family: "GetVoIP Grotesque";
	font-size: 20px;
	font-weight: 700;
	padding-top: 5px;
	text-transform: uppercase;
	cursor: pointer;
}

.signUpButton:hover {
	color: #f6a63f;
	border-color: #f6a63f;
}

.signUpButton:active {
	color: #e3881a;
	border-color: #e3881a;
}

.firstSectionSelectWrapper {
	width: 50%;
	position: absolute;
	z-index: 10;
	top: 90%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.motolifeFirstSection {
	color: #fbfcfc;
	font-family: "GetVoIP Grotesque";
	font-size: 60px;
	font-weight: 700;
	letter-spacing: 3px;
	text-transform: uppercase;
}

.selectFirstSection {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	color: #f4931c;
	font-family: "Altone Trial";
	font-size: 18px;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0.36px;
	text-transform: uppercase;
	cursor: pointer;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

@media (min-width: 768px) {
	.firstSectionDescriptionTitleWhite {
		font-size: 30px;
		line-height: 90px;
		letter-spacing: 1.5px;
	}

	.firstSectionDescriptionTitleOrange {
		font-size: 30px;
		line-height: 90px;
		letter-spacing: 1.5px;
	}

	.firstSectionDescriptionTitleWhiteThin {
		font-size: 20px;
		line-height: 90px;
		letter-spacing: 0.4px;
		width: 80%;
	}
}

@media (max-width: 767px) {
	.firstSection {
		height: 50vh;
		margin-top: 0;
		align-items: flex-start;
	}

	.firstSectionDescription {
		width: 80%;
		padding-left: 0;
		z-index: 5;
		position: absolute;
		justify-content: flex-start;
		align-items: flex-start;
		text-wrap: wrap;
		box-sizing: content-box;
		margin-left: 24px;
	}

	.bikeFirstSection {
		width: 100%;
		/* height: 55%; */
		background-size: 150% 100%;
		background-position: top left;
		margin-left: 50%;
	}

	.bikeGradient {
		background: linear-gradient(-270deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%),
			linear-gradient(-180deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%),
			linear-gradient(0deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%);
	}
	.animateLogoFirstSection {
		display: none;
	}

	.firstSectionDescriptionTitleWhite {
		font-size: 20px;
		line-height: 60px;
		letter-spacing: 1px;
	}

	.firstSectionDescriptionTitleOrange {
		font-size: 20px;
		line-height: 60px;
		letter-spacing: 1px;
	}

	.firstSectionDescriptionTitleWhiteThin {
		font-size: 18px;
		line-height: 60px;
		letter-spacing: 0.36px;
	}

	.firstSectionSignUpButtonWrapper {
		width: 110%;
	}

	.firstSectionSelectWrapper {
		display: none;
	}
}
</style>
