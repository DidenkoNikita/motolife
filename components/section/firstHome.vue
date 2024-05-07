<template>
  <div id="motorbikes" class="firstSectionHome">
    <div class="animateWrapper">
      <div class="animateLogoFirstSectionHome"></div>
      <div class="motorBikeRentalHomePage">motorbike <br /> rental</div>
    </div>
    <div class="bikeFirstSectionHome">
      <div class="bikeGradientHome">
        <div class="bikeOpacityHome" />
      </div>
    </div>
    <div class="filterContainer">
      <div class="filterWrapper">
        <div class="smallHomeTitle">
          pick up date
        </div>
        <div class="calendarWrapper">
          <div class="calenderContainer">
            <IconCalendar />
            <div class="grayTitleHomePage">00/00/00</div>
            <IconChevronDown color="#F4931C" />
          </div>
          <div class="calenderContainer">
            <IconClock />
            <div class="grayTitleHomePage">12:30 pm</div>
            <IconChevronDown color="#F4931C" />
          </div>
        </div>
      </div>
      <div class="filterWrapper">
        <div class="smallHomeTitle">
          returne date
        </div>
        <div class="calendarWrapper">
          <div class="calenderContainer">
            <IconCalendar />
            <div class="grayTitleHomePage">00/00/00</div>
            <IconChevronDown color="#F4931C" />
          </div>
          <div class="calenderContainer">
            <IconClock />
            <div class="grayTitleHomePage">12:30 pm</div>
            <IconChevronDown color="#F4931C" />
          </div>
          <button class="loginBtn">search</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();
</script>

<style>
.firstSectionHome {
  width: 100vw;
  height: 1081px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: -140px;
}

.bikeFirstSectionHome {
  background: no-repeat url("/images/motorbike.png");
  width: 32.6%;
  height: 100%;
  background-size: 100% 100%;
}

.bikeGradientHome {
  width: 100%;
  height: 100%;
  background: linear-gradient(270deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%),
    linear-gradient(-270deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%),
    linear-gradient(-180deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%),
    linear-gradient(0deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%);
}

.bikeOpacityHome {
  background: no-repeat url("/images/opacity.png");
  width: 100%;
  height: 100%;
  opacity: 0.6;
  background: #000101;
  mix-blend-mode: overlay;
}

.animateLogoFirstSectionHome {
  width: 100%;
  height: 100%;
  background-image: url("/images/motorlifeOrange.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  animation: spin 20s linear infinite;
}

.animateWrapper {
  position: absolute;
  left: 13%;
  width: 36%;
  height: 63%;
  top: 50%;
  transform: translateY(-50%);
}

.motorBikeRentalHomePage {
  color: #FBFCFC;
  text-align: center;
  font-family: "GetVoIP Grotesque";
  font-size: 46.036px;
  font-style: normal;
  font-weight: 700;
  line-height: 106.237px;
  letter-spacing: 2.302px;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

.firstSectionDescriptionTitleWhiteThin {
  color: #fbfcfc;
  font-family: "Altone Trial";
  font-weight: 400;
  text-transform: uppercase;
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

.filterContainer {
  display: flex;
  width: calc(100vw - 200px);
  height: 79px;
  padding: 30px 40px;
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  border-top: 1px solid #FBFCFC;
  border-bottom: 1px solid #FBFCFC;
  background: #000101;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.filterWrapper {
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: flex-start;
  justify-content: center;
}

.smallHomeTitle {
  color: #FBFCFC;
  font-family: "Altone Trial";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.36px;
  text-transform: uppercase;
}

.calendarWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.calenderContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border-right: 1px solid #FBFCFC;
  border-left: 1px solid #FBFCFC;
  width: 13vw;
  height: 50px;
}

.grayTitleHomePage {
  color: #7D7E7E;
  text-align: center;
  font-family: "GetVoIP Grotesque";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.loginBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 124px;
  padding-top: 7px;
  height: 50px;
  background: #f4931c;
  border: none;
  color: #000101;
  font-size: 20px;
  font-family: "GetVoIP Grotesque";
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 1px;
  text-transform: uppercase;
  z-index: 1;
  cursor: pointer;
}

.loginBtn:hover {
  background: #f6a63f;
}

.loginBtn:active {
  background: #e3881a;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@media (min-width: 768px) {}

@media (max-width: 767px) {
  .firstSectionHome {
    width: 100vw;
    height: 100vh;
    margin-top: 0;
    align-items: flex-start;
    position: relative;
  }

  .bikeFirstSectionHome {
    display: none;
  }

  .bikeGradientHome {
    background: linear-gradient(-270deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%),
      linear-gradient(-180deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%),
      linear-gradient(0deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%);
  }

  .animateWrapper {
    width: 100vw;
    height: 100vh;
    top: -370px;
    left: 50%;
    transform: translateX(-50%);
  }

  .motorBikeRentalHomePage {
    font-size: 23.018px;
    line-height: 53.118px;
    letter-spacing: 1.151px;
  }

  .filterContainer {
    bottom: initial;
    top: 190px;
    width: calc(80vw - 48px);
    height: auto;
    flex-direction: column;
    gap: 30px;
  }

  .filterWrapper {
    width: calc(100vw - 48px);
  }

  .calendarWrapper {
    flex-direction: column;
    gap: 30px;
    align-items: flex-end;
  }

  .calenderContainer {
    width: calc(100vw - 90px);
  }
}
</style>
