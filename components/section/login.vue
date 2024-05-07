<template>
  <div id="motorbikes" class="firstSectionLogin">
    <Form @submit="onSubmit">
      <div class="loginWrapper">
        <div class="loginTitle">log in</div>
        <div class="loginInputContainer">
          <div class="loginInputTitle">phone number</div>
          <div class="loginInputWrapper">
            <Field name="tel" class="loginInput" type="tel" :rules="validatePhone" @keypress="validatePhoneInput" />
          </div>
          <ErrorMessage class="errorMessage" name="tel" />
        </div>
        <div class="loginInputContainer">
          <div class="loginInputTitle">e-mail</div>
          <div class="loginInputWrapper">
            <Field name="email" class="loginInput" type="email" :rules="validateEmail" />
          </div>
          <ErrorMessage class="errorMessage" name="email" />
        </div>
        <div class="loginInputContainer">
          <div class="loginInputTitle">password</div>
          <div class="loginInputWrapper">
            <Field name="password" class="loginInput" :type="openPassword ? 'password' : 'text'"
              :rules="validatePassword" />
            <button class="eyeButton" @click="openPassword = !openPassword">
              <IconEyeClose v-if="openPassword" />
              <IconEyeOpen v-else />
            </button>
          </div>
          <ErrorMessage class="errorMessage" name="password" />
        </div>
        <div class="rememberMeContainer">
          <div class="loginInputTitle loginInputTitleDisplayNone">Don't have an account yet? <a href="/signup"
              class="signupLink">sign up</a></div>
          <div class="rememberMeWrapper">
            <button class="rememberMeCheckbox" :class="rememberMe && 'rememberMeCheckboxActive'"
              @click="rememberMe = !rememberMe" />
            <div class="loginInputTitle">remember me</div>
          </div>
        </div>
        <div class="backAndLoginContainer">
          <button class="backBtn" @click="router.back()">back</button>
          <button class="loginBtn">log in</button>
        </div>
        <div class="loginInputTitle loginInputTitleDisplay">Don't have an account yet? <a href="/signup"
            class="signupLink">sign up</a></div>
      </div>
    </Form>
    <div class="bikeFirstSection">
      <div class="bikeGradient">
        <div class="bikeOpacity" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue';
import { useField, useForm } from 'vee-validate';

const router = useRouter();

const rememberMe = ref(false);
const openPassword = ref(true);
</script>

<script lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate';

const validatePhoneInput = (event: KeyboardEvent) => {
  const input = event.target as HTMLInputElement;
  const char = event.key;
  const cursorPosition = input.selectionStart; // Получаем текущую позицию курсора
  const currentValue = input.value;

  // Разрешаем только цифры и символ + в начале строки
  if (cursorPosition === 0 && currentValue === '' && char === '+') {
    return;
  }

  const allowedChars = /[0-9]/; // Только цифры
  if (!allowedChars.test(char)) {
    event.preventDefault(); // Предотвращаем ввод символов, не соответствующих условию
  }
};

export default {
  components: {
    Form,
    Field,
    ErrorMessage
  },
  methods: {
    onSubmit(values: any) {
      const headers = { "Content-Type": "application/json" };
      const body = { phone: values.tel, email: values.email, password: values.password }
      console.log(values);
      const login = async () => {
        const response = await fetch('http://localhost:3001/login', { headers, method: 'POST', body: JSON.stringify(body) });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
          window.location.href = 'http://localhost:3000/home'
        } else {
          alert('Failed to login');
        }
      }
      login();
    },
    validateEmail(value: any) {
      if (!value) {
        return 'This field is required';
      }
      const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
      if (!regex.test(value)) {
        return 'This field must be a valid email';
      }
      return true;
    },
    validatePhone(value: any) {
      if (!value) {
        return 'This field is required';
      }
      const regex = /^(\+\d{1,3}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
      if (!regex.test(value)) {
        return 'This field must be a valid phone';
      }
      return true;
    },
    validatePassword(value: any) {
      if (!value) {
        return 'This field is required';
      }

      // Проверяем минимальную длину пароля
      if (value.length < 8) {
        return 'Password must be at least 8 characters long';
      }

      // Проверяем наличие заглавной буквы
      if (!/[A-Z]/.test(value)) {
        return 'Password must contain at least one uppercase letter';
      }

      // Проверяем наличие хотя бы одного специального символа
      if (!/[!@#$%^&*(),.?":{}|<>]/.test(value)) {
        return 'Password must contain at least one special character';
      }

      return true;
    }
  },
  // setup() {
  //   return {
  //     validatePhoneInput
  //   };
  // }
};
</script>

<style>
.firstSectionLogin {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
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

.loginWrapper {
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
}

.loginTitle {
  color: #FBFCFC;
  font-family: "GetVoIP Grotesque";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: 0.4px;
  text-transform: uppercase;
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

.rememberMeContainer {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.signupLink {
  color: #F4931C;
  font-family: "Altone Trial";
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
  letter-spacing: 0.36px;
  text-transform: uppercase;
  text-decoration: none;
}

.rememberMeWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.rememberMeCheckbox,
.rememberMeCheckboxActive {
  width: 19px;
  height: 19px;
  background-color: transparent;
  border: 1px solid #F4931C;
  cursor: pointer;
}

.rememberMeCheckboxActive {
  background-color: #F4931C;
}

.backAndLoginContainer {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.backBtn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 124px;
  padding-top: 7px;
  height: 50px;
  background: transparent;
  border: 1px solid #F4931C;
  color: #FBFCFC;
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

.eyeButton {
  width: 24px;
  height: 24px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.errorMessage {
  color: red;
  position: absolute;
  top: 110px;
}

@media (min-width: 768px) {
  .loginWrapper {
    width: 32.6vw;
    height: 54.26vh;
    position: absolute;
    top: 14.25%;
    left: 50%;
    transform: translate(-50%);
  }

  .loginInputTitleDisplay {
    display: none;
  }
}

@media (max-width: 767px) {
  .bikeFirstSection {
    display: none;
  }

  .loginWrapper {
    width: calc(100vw - 48px);
    position: absolute;
    top: 150px;
    left: 24px;
  }

  .loginInputTitleDisplayNone {
    display: none;
  }

  .rememberMeContainer {
    justify-content: flex-end;
  }
}
</style>
