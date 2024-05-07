<template>
  <div id="motorbikes" class="firstSection">
    <div class="bikeSignupSection">
      <div class="bikeGradient">
        <div class="bikeOpacity" />
      </div>
    </div>
    <Form @submit="onSubmit">
      <div class="signupContainer">
        <div class="firstSectionDescriptionTitleWhite signupTitle">
          welcome to
          <span class="firstSectionDescriptionTitleOrange signupTitle">motolife</span> <br />
          <span class="firstSectionDescriptionTitleOrange signupTitle">please submit</span>
          your details below
        </div>
        <div class="inputsSignupWrapper">
          <div class="loginInputContainer">
            <div class="loginInputTitle">full name</div>
            <div class="loginInputWrapper">
              <Field name="fullname" class="loginInput" type="text" :rules="validateFullName" />
            </div>
            <ErrorMessage name="fullname" class="errorMessage" />
          </div>
          <div class="loginInputContainer">
            <div class="loginInputTitle">your address</div>
            <div class="loginInputWrapper">
              <Field name="address" class="loginInput" type="text" :rules="validateAddress" />
            </div>
            <ErrorMessage class="errorMessage" name="address" />
          </div>
        </div>
        <div class="inputsSignupWrapper">
          <div class="loginInputContainer">
            <div class="loginInputTitle">drivers license</div>
            <div class="loginInputWrapper">
              <Field name="driverslicense" class="loginInput" type="text" :rules="validateDriversLicense" />
            </div>
            <ErrorMessage class="errorMessage" name="driverslicense" />
          </div>
          <div class="loginInputContainer">
            <div class="loginInputTitle">issued in</div>
            <div class="loginInputWrapper">
              <Field name="issuedin" class="loginInput" type="text" :rules="validateIssuedIn" />
            </div>
            <ErrorMessage class="errorMessage" name="issuedin" />
          </div>
        </div>
        <div class="inputsSignupWrapper">
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
        </div>
        <div class="inputsSignupWrapper">
          <div class="loginInputContainer">
            <div class="loginInputTitle">password</div>
            <div class="loginInputWrapper">
              <Field name="password" class="loginInput" :type="openPassword ? 'password' : 'text'"
                :rules="validatePassword" v-model="inputValue" />
              <button class="eyeButton" @click="openPassword = !openPassword">
                <IconEyeClose v-if="openPassword" />
                <IconEyeOpen v-else />
              </button>
            </div>
            <ErrorMessage class="errorMessage" name="password" />
          </div>
          <div class="loginInputContainer">
            <div class="loginInputTitle">enter again</div>
            <div class="loginInputWrapper">
              <Field name="repeatpassword" class="loginInput" :type="openEnterPassword ? 'password' : 'text'"
                :rules="validateRepeatPassword" />
              <button class="eyeButton" @click="openEnterPassword = !openEnterPassword">
                <IconEyeClose v-if="openEnterPassword" />
                <IconEyeOpen v-else />
              </button>
            </div>
            <ErrorMessage class="errorMessage" name="repeatpassword" />
          </div>
        </div>
        <div class="buttonWrapperSignup">
          <button class="loginBtn">sign up</button>
        </div>
        <div class="loginInputTitle">Already have an account? <a href="/login" class="signupLink">log in</a></div>
      </div>
    </Form>
  </div>
</template>

<script setup lang="ts">
const router = useRouter();

const openPassword = ref(true);
const openEnterPassword = ref(true);
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
  data() {
    return {
      inputValue: ''
    };
  },
  methods: {
    onSubmit(values: any) {
      const headers = { "Content-Type": "application/json" };
      const body = {
        full_name: values.fullname,
        address: values.address,
        drivers_license: values.driverslicense,
        issued_in: values.issuedin,
        phone: values.tel,
        email: values.email,
        password: values.password
      }
      console.log(values);
      const login = async () => {
        const response = await fetch('http://localhost:3001/signup', { headers, method: 'POST', body: JSON.stringify(body) });

        if (response.ok) {
          const data = await response.json();
          localStorage.setItem('accessToken', data.accessToken);
          localStorage.setItem('refreshToken', data.refreshToken);
          window.location.href = 'http://localhost:3000/home'
        } else {
          alert('Failed to sign up');
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
    },
    validateFullName(value: any) {
      if (!value) {
        return 'This field is required';
      }
      return true;
    },
    validateAddress(value: any) {
      if (!value) {
        return 'This field is required';
      }
      return true;
    },
    validateDriversLicense(value: any) {
      if (!value) {
        return 'This field is required';
      }
      return true;
    },
    validateIssuedIn(value: any) {
      if (!value) {
        return 'This field is required';
      }
      return true;
    },
    validateRepeatPassword(value: any) {
      if (!this.inputValue) {
        return 'Please enter a password first';
      }
      if (value !== this.inputValue) {
        return 'Passwords do not match';
      }
      return true;
    }
  },
};
</script>

<style>
.firstSection {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
}

.bikeSignupSection {
  background: no-repeat url("/images/motorbike2.png");
  width: 32.6%;
  height: 100%;
  background-size: 100% 100%;
  z-index: -1;
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

.signupContainer {
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.signupTitle {
  font-size: 20px;
  text-align: center;
}

.inputsSignupWrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  width: 100%;
}

.buttonWrapperSignup {
  display: flex;
  width: 100%;
  justify-content: flex-end;
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

@media (min-width: 768px) {}

@media (max-width: 767px) {
  .firstSection {
    height: 50vh;
    margin-top: 0;
    align-items: flex-start;
  }

  .bikeSignupSection {
    width: 100%;
    background-size: 150% 100%;
    background-position: top left;
    margin-left: 50%;
  }

  .bikeGradient {
    background: linear-gradient(-270deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%),
      linear-gradient(-180deg, #000101 0.17%, rgba(0, 1, 1, 0) 21.47%),
      linear-gradient(0deg, #000101 0.17%, rgba(0, 1, 1, 0)21.47%);
  }

  .animateLogoFirstSection {
    display: none;
  }

  .signupContainer {
    width: calc(100vw - 48px);
    top: 100px;
  }

  .bikeSignupSection {
    display: none;
  }

  .inputsSignupWrapper {
    flex-direction: column;
  }
}
</style>
