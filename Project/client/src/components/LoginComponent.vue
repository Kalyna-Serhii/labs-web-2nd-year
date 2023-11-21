<template>
  <section id='loginForm'>
    <form ref="form" @submit.prevent='submitForm'>
      <h2>Login</h2>
      <div class="form-group" :class="{ 'has-error': errors.phone }">
        <label for='phone'>Phone</label>
        <input v-model.lazy='phone' ref="phone" class='form-control item' type='tel' id='phone' name='phone'
               @input="validate('phone')"
               @change="validate('phone')"
               placeholder='+38(0__)-___-__-__' required>
        <span class="error-message" v-if="errors.phone">Введіть коректний номер телефону</span>
      </div>
      <div class="form-group" :class="{ 'has-error': errors.password }">
        <label for='password'>Password</label>
        <input v-model='password' class='form-control item' ref="password" name='password' type='password' id='password'
               @input="validate('password')"
               placeholder='Password' required>
        <span class="error-message" v-if="errors.password">Пароль повинен містити щонайменше 8 символів</span>
      </div>
      <button type='submit' class='btn btn-primary btn-lg'>Login</button>
    </form>
  </section>
</template>

<script>
import api from '@/api';
import initInputMask from '@/utils/initInputMask';
import validateField from "@/utils/validateField";
import getFormBody from "@/utils/getFormBody";

export default {
  data() {
    return {
      phone: '',
      password: '',
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
      const response = await api.auth.login(formBody);
      if (response && response.status === 204) {
        this.$router.push('/');
      }
    },
  },
  mounted() {
    initInputMask(this.$refs.phone);
  }
}
</script>