<template>
  <section id="registerForm">
    <form @submit.prevent='submitForm' ref="form">
      <h2>Register</h2>
      <div class="form-group" :class="{ 'has-error': errors.name }">
        <label for="name">Name</label>
        <input class="form-control item" name="name" ref="name" type="text" id="name" v-model="name"
               @input="validate('name')"
               placeholder="Name" required>
        <span class="error-message" v-if="errors.name">Введіть коректне ім'я</span>
      </div>
      <div class="form-group">
        <label>Gender</label>
        <div class="genderDiv">
          <input type="radio" id="maleRadio" name="gender" value="man" v-model="gender" checked required>
          <p>Man</p>
          <input type="radio" id="femaleRadio" name="gender" value="woman" v-model="gender" required>
          <p>Woman</p>
        </div>
      </div>
      <div class="form-group" :class="{ 'has-error': errors.phone }">
        <label for="phone">Phone</label>
        <input class="form-control item" name="phone" ref="phone" type="tel" id="phone" v-model.lazy="phone"
               @input="validate('phone')"
               @change="validate('phone')"
               placeholder="+38(0__)-___-__-__" required>
        <span class="error-message" v-if="errors.phone">Введіть коректний номер телефону</span>
      </div>
      <div class="form-group" :class="{ 'has-error': errors.password }">
        <label for="password">Password</label>
        <input class="form-control item" name="password" ref="password" type="password" id="password" v-model="password"
               @input="validate('password')" placeholder="Password" required>
        <span class="error-message" v-if="errors.password">Пароль повинен містити щонайменше 8 символів</span>
      </div>
      <div class="form-group" :class="{ 'has-error': errors.email }">
        <label for="email">Email</label>
        <input class="form-control item" name="email" ref="email" type="email" id="email" v-model="email"
               @input="validate('email')" placeholder="Email">
        <span class="error-message" v-if="errors.email">Введіть коректний email</span>
      </div>
      <button id="submitFormButton" type="submit" class="btn btn-primary btn-lg" :disabled="hasErrors">Register</button>
    </form>
  </section>
</template>

<script>
import api from '@/api';
import initInputMask from '@/utils/initInputMask';
import validateField from "@/utils/validateField";
import getFormBody from '@/utils/getFormBody';

export default {
  data() {
    return {
      name: '',
      gender: '',
      phone: '',
      password: '',
      email: '',
      errors: {},
    };
  },
  computed: {
    hasErrors() {
      return Object.values(this.errors).some((error) => error);
    }
  },
  methods: {
    validate(fieldName) {
      const error = validateField(this.$refs[fieldName]);
      this.errors = {...this.errors, [fieldName]: error};
    },
    async submitForm() {
      const form = this.$refs.form;
      const formBody = getFormBody(form);
      const response = await api.auth.register(formBody);
      if (response && response.status === 204) {
        const cookies = document.cookie;
        if (cookies) {
          const accessTokenCookie = decodeURIComponent(cookies).split(';').find(cookie => cookie.trim().startsWith('accessToken='));
          const accessTokenData = accessTokenCookie ? accessTokenCookie.split('=')[1] : null;
          const accessToken = accessTokenData.split('.')[1];
          if (accessToken) {
            localStorage.setItem('isAuth', true);
            const tokenData = JSON.parse(atob(accessToken));
            if (tokenData.role === 'admin') {
              localStorage.setItem('isAdmin', true);
            }
            this.$router.push('/');
          }
        }
      }
    },
  },
  mounted() {
    initInputMask(this.$refs.phone);
  }
};
</script>
