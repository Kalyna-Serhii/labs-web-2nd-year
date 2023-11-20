<template>
  <section id='loginForm'>
    <form ref="form" @submit.prevent='submitForm'>
      <h2>Login</h2>
      <div class='form-group'>
        <label for='phone'>Phone</label>
        <input @input='updatePhone' ref="phone" class='form-control item' type='tel' id='phone' name='phone'
               placeholder='Phone' required>
      </div>
      <div class='form-group'>
        <label for='password'>Password</label>
        <input v-model='password' class='form-control item' type='password' id='password' name='password'
               placeholder='Password' required>
      </div>
      <button type='submit' class='btn btn-primary btn-lg'>Login</button>
    </form>
  </section>
</template>

<script>
import api from '@/api';
import getFormBody from "@/utils/getFormBody";
import InputMask from "@/assets/js/inputmask.min";

export default {
  data() {
    return {
      phone: '',
      password: '',
    };
  },
  methods: {
    initInputMask() {
      const telElement = this.$refs.phone;
      if (telElement) {
        const TelMask = new InputMask('+38(099)-999-99-99');
        TelMask.mask(telElement);
      }
    },
    updatePhone(){
      this.phone = this.$refs.phone.value;
    },
    async submitForm() {
      const form = this.$refs.form;
      const formBody = getFormBody(form);
      const response = await api.auth.login(formBody);
      if(response && response.status === 204) {
        this.$router.push('/');
      }
    },
  },
  async mounted() {
    await this.initInputMask();
  }
}
</script>