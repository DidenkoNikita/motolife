<template>
	<div class="footer">
		<div class="footerChild">
			<div class="logoContainer">
				<Logo />
				<div class="logoContainerWrapperTitles">
					<span class="logoContainerLifeTitle">motor life</span>
					<span class="logoContainerRentalTitle">motorbike rental</span>
				</div>
			</div>
			<div class="navigateContainer">
				<a
					v-for="(item, index) in navigateLinks"
					:key="index"
					:href="item.link"
					class="navigateLink"
				>
					{{ item.title }}
				</a>
			</div>
			<div class="contactsContainerWrapper">
				<div class="contactsContainer">
					<IconPhone />
					<div class="footerContactsWrapper">
						<span class="orangeFooterTitle">telephone:</span>
						<span class="whiteFooterTitle">+7 (985) 566-9134</span>
					</div>
				</div>
				<div class="contactsContainer">
					<IconMail />
					<div class="footerContactsWrapper">
						<span class="orangeFooterTitle">mail:</span>
						<span class="whiteFooterTitle">moto.life@gmail.com</span>
					</div>
				</div>
			</div>
			<div class="contactsContainerWrapper">
				<div class="contactsContainer">
					<IconClock />
					<div class="footerContactsWrapper">
						<span class="orangeFooterTitle">schedule:</span>
						<span class="whiteFooterTitle">mon - fr 8:00 am - 10 pm</span>
						<span class="whiteFooterTitle">Sat - Sun 10:00 am - 10 pm</span>
					</div>
				</div>
				<div class="contactsContainer">
					<IconMapMarker />
					<div class="footerContactsWrapper">
						<span class="orangeFooterTitle">location:</span>
						<span class="whiteFooterTitle">New Delhi</span>
						<span class="whiteFooterTitle">87 Dahle Way</span>
					</div>
				</div>
			</div>
			<div class="messengersContainer">
				<IconTelegram />
				<IconInstagram />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

const navigateLinks = [
	{
		title: "motorbikes",
		link: "#motorbikes",
	},
	{
		title: "equipment",
		link: "#equipment",
	},
	{
		title: "rent terms",
		link: "#rent_terms",
	},
	{
		title: "reviews",
		link: "#reviews",
	},
	{
		title: "contacts",
		link: "#contacts",
	},
];

export default defineComponent({
	data() {
		return {
			navigateLinks: navigateLinks,
		};
	},
});
</script>

<style>
.footer {
	display: flex;
}

.footerChild {
	display: flex;
	width: 100%;
	height: 100%;
	border-top: 3px solid #f4931c;
	border-bottom: 3px solid #f4931c;
	padding: 30px 0;
}

.logoContainer {
	display: flex;
	justify-content: center;
	align-items: center;
}

.logoContainerWrapperTitles {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
}

.logoContainerLifeTitle {
	color: #fbfcfc;
	font-family: "GetVoIP Grotesque";
	font-weight: 700;
	text-transform: uppercase;
}

.logoContainerRentalTitle {
	color: #fbfcfc;
	font-family: "Altone Trial";
	font-weight: 400;
	font-size: 18px;
	line-height: 30px;
	letter-spacing: 0.36px;
	text-transform: uppercase;
}

.navigateContainer {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	border-left: 1px solid #fbfcfc;
	padding-left: 30px;
}

.navigateLink {
	color: #f4931c;
	font-family: "Altone Trial";
	font-size: 18px;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0.36px;
	text-transform: uppercase;
	text-decoration: none;
	box-sizing: border-box;
}

.navigateLink:hover {
	color: #f6a63f;
	text-decoration: underline;
}

.navigateLink:active {
	color: #e3881a;
	text-decoration: underline;
}

.contactsContainer {
	display: flex;
	gap: 20px;
	border-left: 1px solid #fbfcfc;
	padding-left: 30px;
	height: 100% !important;
}

.contactsContainerWrapper {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 30px;
	height: 100% !important;
}

.footerContactsWrapper {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 15px;
}

.orangeFooterTitle {
	color: #f4931c;
	font-family: "Altone Trial";
	font-size: 18px;
	font-weight: 400;
	line-height: 30px;
	letter-spacing: 0.36px;
	text-transform: uppercase;
}

.whiteFooterTitle {
	color: #fbfcfc;
	font-family: "GetVoIP Grotesque";
	font-size: 16px;
	font-weight: 700;
	line-height: 25px;
	letter-spacing: 0.8px;
	text-transform: uppercase;
}

.messengersContainer {
	display: flex;
	gap: 30px;
	border-left: 1px solid #fbfcfc;
	padding-left: 30px;
	height: 100% !important;
}

@media (min-width: 768px) {
	.footer {
		padding: 0 50px 30px;
	}

	.footerChild {
		justify-content: space-between;
	}

	.logoContainer {
		height: 100px;
		gap: 16px;
	}

	.logoContainerWrapperTitles {
		gap: 30px;
	}

	.logoContainerLifeTitle {
		font-size: 20px;
		line-height: 30px;
		letter-spacing: 1px;
	}
}

@media (max-width: 767px) {
	.footer {
		padding: 0 24px 30px;
	}

	.footerChild {
		flex-direction: column;
		align-items: flex-start;
		gap: 40px;
	}

	.logoContainer {
		height: 50px;
		gap: 15px;
	}

	.logoContainerWrapperTitles {
		gap: 20px;
	}

	.logoContainerLifeTitle {
		font-size: 16px;
		line-height: 25px;
		letter-spacing: 0.8px;
	}

	.navigateContainer {
		display: none;
	}
}
</style>
