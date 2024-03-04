<template>
	<div id="rent_terms" class="rentTermsSection">
		<div class="bikeRentTerms">
			<div class="bikeGradientRentTerms">
				<div class="bikeOpacityRentTerms" />
			</div>
		</div>
		<div class="wrapperTitleRemntTerms">
			<div class="firstSectionDescriptionTitleWhite">
				rent
				<span class="firstSectionDescriptionTitleOrange">terms</span>
			</div>
		</div>
		<div class="rentTermsWrapper">
			<div class="rentTermsCardWrapper">
				<div class="rentTermsCard">
					<IconPass />
					<div class="priceBikeCard">passport</div>
					<div class="typeOfBikeCard">
						Tenant age from <span class="priceBikeCard">21</span> years old
					</div>
				</div>
				<div class="dividerRentTermsWrapperThree">
					<div class="dividerRentTerms" />
				</div>
				<div class="rentTermsCard">
					<IconCard />
					<div class="priceBikeCard">driver license</div>
					<div class="typeOfBikeCard">Category A driving license</div>
				</div>
			</div>
			<div class="dividerRentTermsWrapperTwo">
				<div class="dividerRentTerms" />
			</div>
			<div class="rentTermsCardWrapper">
				<div class="rentTermsCard">
					<IconHelmet />
					<div class="priceBikeCard">equipment</div>
					<div class="typeOfBikeCard">
						required set of equipment:<br />
						helmet / gloves / jacket
					</div>
				</div>
				<div class="dividerRentTermsWrapperThree">
					<div class="dividerRentTerms" />
				</div>
				<div class="rentTermsCard">
					<IconMoney />
					<div class="priceBikeCard">cash deposit</div>
					<div class="typeOfBikeCard">
						the cash deposit is returned in full upon the return of the
						motorbike
					</div>
				</div>
			</div>
			<div class="dividerRentTermsWrapper">
				<div class="dividerRentTerms" />
			</div>
			<div class="descriptionRentTermsWrapper">
				<div class="descriptionRentTerms">
					For the rental of motorcycles, we conclude a lease agreement, the
					motorcycle is inspected, and an acceptance certificate is drawn up.
					You pay a deposit and rent. At the end of the rental, the motorcycle
					is returned, the act is signed, and the deposit is returned.
				</div>
			</div>
		</div>
	</div>
</template>

<style>
.rentTermsSection {
	width: 100vw;
	height: 100vh;
	position: relative;
}

.bikeRentTerms {
	position: absolute;
	top: 0;
	right: -90px;
	background: no-repeat url("/images/motorbike.png");
	width: 32.6%;
	height: 100%;
	background-size: 100% 100%;
}

.bikeGradientRentTerms {
	width: 85%;
	height: 100%;
	background: linear-gradient(270deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%),
		linear-gradient(-270deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%),
		linear-gradient(-180deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%),
		linear-gradient(0deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%);
}

.bikeOpacityRentTerms {
	background: no-repeat url("/images/opacity.png");
	width: 100%;
	height: 100%;
	opacity: 0.6;
	background: #000101;
	mix-blend-mode: overlay;
}

.rentTermsWrapper {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
}

.rentTermsCardWrapper {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	padding: 0 40px;
	gap: 40px;
	box-sizing: border-box;
}

.rentTermsCard {
	width: 100%;
	height: 100%;
	border-right: 1px solid #fbfcfc;
	border-left: 1px solid #fbfcfc;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
	padding: 0 40px;
}

.dividerRentTerms {
	width: 100%;
	height: 1px;
	background: #f4931c;
}

.descriptionRentTerms {
	color: #fbfcfc;
	font-family: "Altone Trial";
	font-weight: 400;
	font-size: 18px;
	line-height: 30px;
	letter-spacing: 0.36px;
	text-transform: uppercase;
	text-align: center;
}

.dividerRentTermsWrapper {
	width: 79.41%;
}

.dividerRentTermsWrapperTwo {
	width: 100%;
}

.wrapperTitleRemntTerms {
	padding: 50px 100px;
}

@media (min-width: 768px) {
	.rentTermsWrapper {
		width: 63.23vw;
		height: 54.91vh;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}

	.dividerRentTermsWrapperThree {
		display: none;
	}
}

@media (max-width: 767px) {
	.rentTermsSection {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: flex-start;
		padding: 50px 24px 0;
		height: 100%;
		gap: 50px;
		box-sizing: border-box;
	}

	.wrapperTitleRemntTerms {
		padding: 0;
	}

	.bikeRentTerms {
		display: none;
	}

	.rentTermsWrapper {
		width: 100% - 48px;
		height: 100%;
	}

	.rentTermsCardWrapper {
		gap: 30px;
		flex-direction: column;
	}

	.descriptionRentTermsWrapper {
		padding: 0 40px;
		border-right: 1px solid #fbfcfc;
		border-left: 1px solid #fbfcfc;
	}

	.dividerRentTermsWrapper {
		width: 100%;
	}

	.dividerRentTermsWrapperThree {
		width: 127%;
	}
}
</style>
