<template>
  <section id='loginForm'>
    <form @submit.prevent='submitForm'>
      <h2>Login</h2>
      <div class='form-group'>
        <label for='email'>Email</label>
        <input v-model='formData.email' class='form-control item' type='email' id='email' name='email' placeholder='Email' required>
      </div>
      <div class='form-group'>
        <label for='password'>Password</label>
        <input v-model='formData.password' class='form-control item' type='password' id='password' name='password' placeholder='Password' required>
      </div>
      <button type='submit' class='btn btn-primary btn-lg'>Login</button>
    </form>
  </section>
</template>

<script>
import bus from '@/event-bus';

export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
      }
    };
  },
  methods: {
    submitForm() {
      bus.emit('formDataSubmitted', this.formData);
      this.clearForm();
    },
    clearForm() {
      this.formData = {
        email: '',
        password: '',
      }
    }
  }
}
</script>