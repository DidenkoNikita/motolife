<template>
  <div class="profileSectionWrapper">
    <div class="contactInformationWrapper">
      <div class="logoutButtonWrapper">
        <button class="logoutBtn" @click="logout()">log out</button>
      </div>
      <div class="contactInformationContainer">
        <div class="firstSectionDescriptionTitleWhite">
          contact
          <span class="firstSectionDescriptionTitleOrange">information</span>
        </div>
        <div class="contactInformation">
          <div class="avatarContainer">
            <IconAvatar />
            <IconClose class="closeAvatar" />
          </div>
          <div class="loginInputContainer">
            <div class="loginInputTitle">full name</div>
            <div class="loginInputWrapper">
              <input name="tel" class="loginInput" type="tel" :value="userStore.user.full_name" readonly />
              <IconEdit />
            </div>
          </div>
          <div class="loginInputContainer">
            <div class="loginInputTitle">phone number</div>
            <div class="loginInputWrapper">
              <input name="tel" class="loginInput" type="tel" :value="userStore.user.phone" readonly />
              <IconEdit />
            </div>
          </div>
          <div class="loginInputContainer">
            <div class="loginInputTitle">e-mail</div>
            <div class="loginInputWrapper">
              <input name="tel" class="loginInput" type="tel" :value="userStore.user.email" readonly />
              <IconEdit />
            </div>
          </div>
          <div class="loginInputContainer">
            <div class="loginInputTitle">password</div>
            <div class="loginInputWrapper">
              <input name="tel" class="loginInput" type="password" value="dksksdkds" readonly />
              <IconEdit />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="driversAndRentalWrapper">
      <div class="driversLicenseWrapper">
        <div class="titleWrapp">
          <div class="firstSectionDescriptionTitleWhite">
            driver`s
            <span class="firstSectionDescriptionTitleOrange">license</span>
          </div>
        </div>
        <div class="driversLicenseInformation">
          <div class="loginInputContainer">
            <div class="loginInputTitle">your address</div>
            <div class="loginInputWrapper">
              <input name="tel" class="loginInput" type="tel" readonly :value="userStore.user.address" />
              <IconEdit />
            </div>
          </div>
          <div class="inputsWrapperProfile">
            <div class="loginInputContainer">
              <div class="loginInputTitle">drivers license</div>
              <div class="loginInputWrapper">
                <input name="tel" class="loginInput" type="tel" readonly :value="userStore.user.drivers_license" />
                <IconEdit />
              </div>
            </div>
            <div class="loginInputContainer">
              <div class="loginInputTitle">issued license</div>
              <div class="loginInputWrapper">
                <input name="tel" class="loginInput" type="tel" readonly :value="userStore.user.issued_in" />
                <IconEdit />
              </div>
            </div>
          </div>
          <div class="photoOrScanWrapper">
            <div class="loginInputTitle">photo or scan of your driver`s license</div>
            <div class="photoOrScanContainer">
              <img class="imgDriversLicense" src="/images/driverslicense1.png" alt="driverlicense">
              <img class="imgDriversLicense" src="/images/driverslicense2.png" alt="driverlicense2">
            </div>
          </div>
        </div>
      </div>
      <div class="rentalHistoryWrapper">
        <div class="titleWrapp">
          <div class="firstSectionDescriptionTitleWhite">
            rental
            <span class="firstSectionDescriptionTitleOrange">history</span>
          </div>
        </div>
        <div class="rentalBikesWrapper">
          <div v-for="(motorcycle, index) in motorcyclesLanding">
            <RentalBike :motorcycle :key="index" />
          </div>
          <div class="showMoreWrapper">
            <button class="showMoreButton">
              <IconEllipseLeft />
              show more
              <IconEllipseRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { motorcyclesLanding } from '~/public/constants/constants';

const router = useRouter();

const logout = () => {
  localStorage.clear();
  router.push('/');
}

const userStore = useUserStore();

onMounted(async () => {
  const accessToken = typeof window !== 'undefined' ? window.localStorage.getItem('accessToken') : null
  console.log(accessToken);

  await fetchData(accessToken);
});


async function fetchData(accessToken: string | null) {
  await userStore.fetchUser(accessToken);
}

console.log(userStore.user);

</script>

<style>
.profileSectionWrapper {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 100px;
  padding: 0 100px;
  box-sizing: border-box;
  margin-bottom: 100px;
}

.logoutButtonWrapper {
  display: flex;
  width: 100%;
  padding: 25px 100px;
  justify-content: flex-end;
  align-items: center;
}

.logoutBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 152px;
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

.logoutBtn:hover {
  background: #f6a63f;
}

.logoutBtn:active {
  background: #e3881a;
}

.contactInformationWrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.contactInformationContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 40px;
}

.contactInformation {
  display: flex;
  width: 100%;
  padding: 30px 0px;
  align-items: center;
  gap: 30px;
  border-top: 1px solid #FBFCFC;
  border-bottom: 1px solid #FBFCFC;
}

.avatarContainer {
  position: relative;
  width: 60px;
  height: 60px;
}

.closeAvatar {
  position: absolute;
  right: 0;
  bottom: 0;
}

.loginInputContainer {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  position: relative;
}

.loginInputTitle {
  color: #FBFCFC;
  font-family: "Altone Trial";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.36px;
  text-transform: uppercase;
}

.loginInputWrapper {
  width: 100%;
  height: 50px;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 1px solid #F4931C;
  border-bottom: 1px solid #F4931C;
  box-sizing: border-box;
}

.loginInput {
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  color: #7D7E7E;
  font-family: "GetVoIP Grotesque";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.loginInput:active,
:hover,
:focus {
  outline: 0;
  outline-offset: 0;
}

.driversAndRentalWrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 107px;
}

.driversLicenseWrapper,
.rentalHistoryWrapper {
  display: flex;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  border-bottom: 1px solid var(--Style, #FBFCFC);
  padding-bottom: 30px;
}

.titleWrapp {
  width: 100%;
  border-bottom: 1px solid var(--Style, #FBFCFC);
  padding-bottom: 40px;
}

.driversLicenseInformation {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
}

.inputsWrapperProfile {
  display: flex;
  gap: 40px;
  width: 100%;
}

.photoOrScanWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;
  justify-content: flex-start;
  align-items: flex-start;
}

.photoOrScanContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
}

.imgDriversLicense {
  width: 100%;
}

.showMoreWrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.showMoreButton {
  display: flex;
  width: 161px;
  height: 90px;
  padding: 0px 1px;
  justify-content: space-between;
  align-items: center;
  background: transparent;
  border: none;
  color: #F4931C;
  font-family: "Altone Trial";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.36px;
  text-transform: uppercase;
}

.rentalBikesWrapper {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 40px;
}

@media (min-width: 768px) {}

@media (max-width: 767px) {
  .profileSectionWrapper {
    padding: 0 24px;
  }

  .logoutButtonWrapper {
    display: none;
  }

  .contactInformation {
    flex-direction: column;
    align-items: flex-start;
  }

  .driversAndRentalWrapper {
    flex-direction: column;
    gap: 50px;
  }

  .photoOrScanContainer {
    flex-direction: column;
    gap: 40px;
    align-items: flex-start;
  }

  .rentalBikesWrapper {
    gap: 50px;
  }
}
</style>