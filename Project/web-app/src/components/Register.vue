<template>
  <div>
    <h2>Register</h2>
    <form @submit.prevent="submitForm" id="registerForm">
      <div class="form-group" :class="{ 'has-error': errors.name }">
        <label for="name">Name</label>
        <input class="form-control item" type="text" id="name" v-model="formData.name" @input="validateField('name')"
               placeholder="Name" required>
        <span class="error-message" v-if="errors.name">Введіть коректне ім'я</span>
      </div>
      <div class="form-group" :class="{ 'has-error': errors.surname }">
        <label for="surname">Surname</label>
        <input class="form-control item" type="text" id="surname" v-model="formData.surname"
               @input="validateField('surname')" placeholder="Surname" required>
        <span class="error-message" v-if="errors.surname">Введіть коректне прізвище</span>
      </div>
      <div class="form-group" :class="{ 'has-error': errors.patronymic }">
        <label for="patronymic">Patronymic</label>
        <input class="form-control item" type="text" id="patronymic" v-model="formData.patronymic"
               @input="validateField('patronymic')" placeholder="Patronymic" required>
        <span class="error-message" v-if="errors.patronymic">Введіть коректне по батькові</span>
      </div>
      <div class="form-group">
        <label>Gender</label>
        <div class="genderDiv">
          <input type="radio" id="maleRadio" name="gender" value="man" v-model="formData.gender" required>
          <p>Man</p>
          <input type="radio" id="femaleRadio" name="gender" value="woman" v-model="formData.gender" required>
          <p>Woman</p>
        </div>
      </div>
      <div class="form-group" :class="{ 'has-error': errors.dateOfBirth }">
        <label for="birth">Date of Birth</label>
        <input class="form-control item" type="date" id="birth" v-model="formData.dateOfBirth"
               @click="setTodayAsMaxDate()" placeholder="Date of Birth" required>
        <span class="error-message" v-if="errors.dateOfBirth">Введіть коректну дату народження</span>
      </div>
      <div class="form-group" :class="{ 'has-error': errors.phone }">
        <label for="phone">Phone</label>
        <input class="form-control item" type="tel" id="phone" v-model.lazy="formData.phone" @input="validateField('phone')"
               @change="validateField('phone')"
               placeholder="+38(0__)-___-__-__" required>
        <span class="error-message" v-if="errors.phone">Введіть коректний номер телефону</span>
      </div>
      <div class="form-group" :class="{ 'has-error': errors.email }">
        <label for="email">Email</label>
        <input class="form-control item" type="email" id="email" v-model="formData.email"
               @input="validateField('email')" placeholder="Email" required>
        <span class="error-message" v-if="errors.email">Введіть коректний email</span>
      </div>
      <div class="form-group" :class="{ 'has-error': errors.password }">
        <label for="password">Password</label>
        <input class="form-control item" type="password" id="password" v-model="formData.password"
               @input="validateField('password')" placeholder="Password" required>
        <span class="error-message" v-if="errors.password">Пароль повинен містити щонайменше 8 символів</span>
      </div>
      <div class="form-group">
        <label for="group">Group</label>
        <select class="form-control item" id="group" v-model="formData.group" required>
          <option value="ІА-21">ІА-21</option>
          <option value="ІА-22">ІА-22</option>
          <option value="ІА-23">ІА-23</option>
          <option value="ІА-24">ІА-24</option>
        </select>
      </div>
      <div class="form-group">
        <label for="file">File</label>
        <input class="form-control item" type="file" id="file" placeholder="File">
      </div>
      <button id="submitFormButton" type="submit" class="btn btn-primary btn-lg" :disabled="hasErrors">Register</button>
    </form>
  </div>
</template>

<script>
import bus from '@/event-bus';

export default {
  data() {
    return {
      formData: {
        name: '',
        surname: '',
        patronymic: '',
        gender: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        password: '',
        group: 'ІА-21',
        file: null
      },
      errors: {}
    };
  },
  computed: {
    hasErrors() {
      return Object.values(this.errors).some((error) => error);
    }
  },
  methods: {
    submitForm() {
      this.validateField('name');
      this.validateField('surname');
      this.validateField('patronymic');
      this.validateField('phone');
      this.validateField('email');
      this.validateField('password');

      if (!this.hasErrors) {
        bus.emit('formDataSubmitted', this.formData);
        this.clearForm();
      }
    },

    validateField(fieldName) {
      const element = document.getElementById(fieldName);
      const value = element.value;
      let error = false;

      if (fieldName === 'name') {
        const pattern = /^[A-ZА-ЯҐЄІЇ][a-zа-яґєії\- `']+$/;
        if (!pattern.test(value)) {
          error = true;
        }
      } else if (fieldName === 'surname') {
        const pattern = /^[A-ZА-ЯҐЄІЇ][a-zа-яґєії\- `']+$/;
        if (!pattern.test(value)) {
          error = true;
        }
      } else if (fieldName === 'patronymic') {
        const pattern = /^[A-ZА-ЯҐЄІЇ][a-zа-яґєії\- `']+$/;
        if (!pattern.test(value)) {
          error = true;
        }
      } else if (fieldName === 'phone') {
        const pattern = /^\+38\(0\d{2}\)-\d{3}-\d{2}-\d{2}$/;
        if (!pattern.test(value)) {
          error = true;
        }
      } else if (fieldName === 'email') {
        const pattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        if (!pattern.test(value)) {
          error = true;
        }
      } else if (fieldName === 'password') {
        const passwordLength = value.length;
        if (passwordLength < 8) {
          error = true;
        }
      }

      this.errors[fieldName] = error;
    },

    setTodayAsMaxDate() {
      const dateElement = document.querySelector('input[type="date"]');
      if (dateElement) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate() - 1).padStart(2, '0');
        dateElement.max = `${yyyy}-${mm}-${dd}`;
      }
    },
    clearForm() {
      this.formData = {
        name: '',
        surname: '',
        patronymic: '',
        gender: '',
        dateOfBirth: '',
        phone: '',
        email: '',
        password: '',
        group: 'ІА-21',
        file: null
      };
      this.errors = {};
    }
  }
};
</script>
