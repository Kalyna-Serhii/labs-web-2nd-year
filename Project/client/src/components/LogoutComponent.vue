<template>
  <section></section>
</template>
<script>
import api from '@/api';

export default {
  methods: {
    async submitRequest() {
      const response = await api.auth.logout();
      if(response.status === 204) {
        localStorage.removeItem('isAuth');
        localStorage.removeItem('isAdmin');
        this.$router.push('/');
      }
    }
  },
  async mounted() {
    await this.submitRequest()
  }
}
</script>