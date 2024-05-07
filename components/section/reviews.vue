<template>
	<div id="reviews" class="reviewsSection">
		<div class="firstSectionDescriptionTitleWhite">
			fa<span class="firstSectionDescriptionTitleOrange">q</span>
		</div>
		<div class="faqWrapper">
			<div class="faqChildWrapper" v-for="(item, index) in faq" :key="index">
				<button class="faqChild" @click="toggleRedElement(index)">
					{{ item.title }}
					<div class="wrapperIcon">
						<IconChevronUp v-if="activeButtonIndex === index" color="#000101" />
						<IconChevronDown v-else color="#000101" />
					</div>
				</button>
				<div class="faqDescription" v-if="activeButtonIndex === index">
					{{ item.description }}
				</div>
			</div>
		</div>
		<div class="firstSectionDescriptionTitleWhite">reviews</div>
		<div class="reviewsWrapper">
			<div class="slider">
				<button class="slider-controls" @mouseleave="showEllipsesLeft = false" @mouseenter="showEllipsesLeft = true"
					@click="moveLeft">
					<IconEllipseLeft />
					<IconEllipseLeft v-if="showEllipsesLeft" />
					<IconArrowLeft />
				</button>
				<div class="slider-container">
					<div v-for="(review, index) in visibleReviews" :key="index" class="slider-item">
						<div class="sliderItemHeader">
							<div class="sliderItemHeaderAvatarWrapper">
								<img class="sliderItemHeaderAvatar" :src="review.logoUrl">
								<button class="sliderItemHeaderAvatarClose">
									<IconCross />
								</button>
							</div>
							<div class="sliderItemHeaderTitle">{{ review.name }}</div>
						</div>
						<div class="sliderElementReview">{{ review.review }}</div>
					</div>
				</div>
				<button class="slider-controls" @mouseleave="showEllipsesRight = false" @mouseenter="showEllipsesRight = true"
					@click="moveRight">
					<IconArrowRight />
					<IconEllipseRight v-if="showEllipsesRight" />
					<IconEllipseRight />
				</button>
			</div>
			<div class="animateOrangeLogo"></div>
		</div>
		<div class="rentalServiceWrapper">
			<div class="rentalServiceWhiteTitle">Rental Service</div>
			<div class="registrationWrapper">
				<div class="firstSectionDescriptionTitleWhite noMobileRegistrationSection">
					<div style="display: flex; justify-content: center;">
						<span class="firstSectionDescriptionTitleOrange">welcome</span>
						to our platform <br />
					</div>
					<span class="firstSectionDescriptionTitleOrange">please</span>
					, complete your
					<span class="firstSectionDescriptionTitleOrange">registration</span>
				</div>
				<div class="firstSectionDescriptionTitleWhite mobileRegistrationSection">
					<span class="firstSectionDescriptionTitleOrange">welcome</span>
					to our <br /> platform <br />
					<span class="firstSectionDescriptionTitleOrange">please</span>
					, complete <br /> your
					<span class="firstSectionDescriptionTitleOrange">registration</span>
				</div>
				<button class="signUpButton" @click="router.push('/signup')">sign up</button>
			</div>
			<div class="rentalServiceOrangeTitle">motor life</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

<script lang="ts">
import { defineComponent } from "vue";
import { faq, reviews } from 'public/constants/constants'

export default defineComponent({
	data() {
		return {
			faq: faq,
			reviews: reviews,
			activeButtonIndex: null as number | null,
			currentIndex: 0,
			itemsPerPage: 3,
			showEllipsesLeft: false,
			showEllipsesRight: false
		};
	},
	computed: {
		visibleReviews() {
			return this.reviews.slice(this.currentIndex, this.currentIndex + this.itemsPerPage);
		}
	},
	methods: {
		toggleRedElement(index: number) {
			if (this.activeButtonIndex === index) {
				this.activeButtonIndex = null;
			} else {
				this.activeButtonIndex = index;
			}
		},
		moveLeft() {
			if (this.currentIndex > 0) {
				this.currentIndex--;
			}
			this.showEllipsesLeft = false;
			setTimeout(() => this.showEllipsesLeft = true, 200)
		},
		moveRight() {
			if (this.currentIndex < this.reviews.length - this.itemsPerPage) {
				this.currentIndex++;
			}
			this.showEllipsesRight = false;
			setTimeout(() => this.showEllipsesRight = true, 200)
		}
	},
});
</script>

<style>
.reviewsSection {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
}

.faqWrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 40px;
}

.faqChildWrapper {
	display: flex;
	flex-direction: column;
	gap: 40px;
}

.faqChild {
	width: 100%;
	background: #f4931c;
	padding: 9px 20px;
	display: flex;
	align-items: center;
	color: #000101;
	text-align: start;
	font-family: "GetVoIP Grotesque";
	font-size: 20px;
	font-weight: 700;
	line-height: 30px;
	letter-spacing: 1px;
	text-transform: uppercase;
	border: none;
	cursor: pointer;
}

.faqDescription {
	width: calc(100% - 40px);
	padding: 9px 20px;
	border-left: 1px solid #fbfcfc;
	border-right: 1px solid #fbfcfc;
	color: var(--Style, #fbfcfc);
	text-align: start;
	font-family: "Altone Trial";
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0.36px;
	text-transform: uppercase;
}

.wrapperIcon {
	width: 32px;
	height: 32px;
}

.reviewsWrapper {
	height: 63.89vh;
	position: relative;
}

.animateOrangeLogo {
	width: 35vw;
	height: 63.89vh;
	background-image: url("/images/motorlifeOrange.png");
	background-repeat: no-repeat;
	background-size: contain;
	background-position: center;
	margin-right: -40px;
	animation: spinOrange 20s linear infinite;
	position: absolute;
	right: -40px;
}

.slider {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 95%;
	position: absolute;
	gap: 74px;
	top: 150px;
	z-index: 1;
}

.slider-controls {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 10px;
	width: 73px;
	background: transparent;
	border: none;
	cursor: pointer;
}

.slider-container {
	display: flex;
	width: 80%;
	justify-content: space-between;
}

.slider-item {
	transition: all 1s;
	padding: 30px;
	border-top: 1px solid #F4931C;
	border-left: 1px solid #F4931C;
	background: #000101;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	gap: 30px;
}

.sliderItemHeader {
	width: 100%;
	height: 60px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 15px;
}

.sliderItemHeaderAvatarWrapper {
	width: 60px;
	height: 60px;
	border: 1px solid #F4931C;
	border-radius: 50%;
	padding: 5px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
}

.sliderItemHeaderAvatar {
	width: 100%;
	height: 100%;
	border-radius: 50%;
	object-fit: cover;
	border: 1px solid #F4931C;
}

.sliderItemHeaderAvatarClose {
	width: 16px;
	height: 16px;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0;
	margin: 0;
	position: absolute;
	right: 0;
	bottom: 0;
	background: #F4931C;
	border: none;
	border-radius: 50%;
}

.sliderItemHeaderTitle {
	color: #FBFCFC;
	font-family: "GetVoIP Grotesque";
	font-size: 16px;
	font-weight: 700;
	line-height: 25px;
	letter-spacing: 0.8px;
	text-transform: uppercase;
}

.sliderElementReview {
	color: #FBFCFC;
	text-overflow: ellipsis;
	text-wrap: wrap;
	font-family: "Altone Trial";
	font-size: 18px;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0.36px;
	text-transform: uppercase;
}

.rentalServiceWrapper {
	width: 50vw;
	height: 39.35vh;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 10px;
}

.rentalServiceWhiteTitle {
	color: #FBFCFC;
	font-family: "Altone Trial";
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0.36px;
	text-transform: uppercase;
}

.rentalServiceOrangeTitle {
	color: #F4931C;
	font-family: "GetVoIP Grotesque";
	font-size: 20px;
	font-style: normal;
	font-weight: 700;
	line-height: 30px;
	letter-spacing: 1px;
	text-transform: uppercase;
	margin-top: 20px;
}

.registrationWrapper {
	width: 100%;
	height: 100%;
	border-left: 3px solid #F4931C;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 30px;
}

@keyframes spinOrange {
	0% {
		transform: rotate(0deg);
	}

	100% {
		transform: rotate(360deg);
	}
}

@media (min-width: 768px) {
	.reviewsSection {
		width: calc(100vw - 200px);
		padding: 100px;
		gap: 100px;
	}

	.faqWrapper {
		width: calc(100vw - 200px);
	}

	.reviewsWrapper {
		width: calc(100vw - 100px);
	}

	.faqChildWrapper {
		width: 70%;
	}

	.faqChild {
		justify-content: space-between;
	}

	.slider-item {
		width: 340px;
		height: 340px;
	}

	.mobileRegistrationSection {
		display: none;
	}
}

@media (max-width: 767px) {

	html,
	body {
		max-height: 1000vh;
	}

	.reviewsSection {
		width: calc(100vw - 24px);
		padding: 50px 0 50px 24px;
		gap: 50px;
	}

	.faqWrapper {
		width: calc(100vw - 48px);
	}

	.reviewsWrapper {
		width: calc(100vw - 24px);
	}

	.faqChildWrapper {
		width: 100%;
	}

	.faqChild {
		justify-content: center;
		gap: 80px;
	}

	.slider {
		width: 100%;
		top: 0;
	}

	.slider-controls {
		display: none;
	}

	.slider-container {
		width: 100%;
		justify-content: flex-start;
		overflow-y: hidden;
		overflow-x: auto;
		gap: 20px;
	}

	.slider-item {
		min-width: 90%;
		max-width: 95%;
	}

	.animateOrangeLogo {
		width: 200%;
		height: 110%;
		margin-right: 0px;
		top: -150px;
		right: -350px;
	}

	.rentalServiceWrapper {
		width: 100%;
		margin-top: -100px;
	}

	.noMobileRegistrationSection {
		display: none;
	}

	.mobileRegistrationSection {
		display: initial;
		gap: 0;
		text-align: center;
	}

	.rentalServiceWrapper {
		height: 46.36vh;
	}
}
</style>
