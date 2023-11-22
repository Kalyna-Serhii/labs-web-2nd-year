<template>
  <section>
    <h2>Services
      <button @click="toCreatePage()" class="btn btn-small btn-primary"><i class="bi bi-plus-square"></i></button>
    </h2>

    <section>
      <div class="container">
        <table class="resp-tab">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Control</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for='(service, index) in services' :key='index'>
            <td><span>ID</span> {{ service.id }} </td>
            <td><span>Name</span> {{ service.name }} </td>
            <td><span>Description</span> {{ service.description }} </td>
            <td><span>Prise</span> {{ service.price }} </td>
            <td>
              <span>Control</span>
              <button @click="toEditPage(service.id)" class="btn btn-small btn-primary"><i class="bi bi-pencil-square"></i></button>
              <button @click="deleteService(service.id)" class="btn btn-small btn-primary"><i class="bi bi-trash"></i></button>
            </td>
          </tr>
          </tbody>

        </table>
      </div>
    </section>
  </section>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      services: [],
    };
  },
  methods: {
    async getServices() {
      const response = await api.services.getServices();
      this.services = response;
    },
    async sortServicesById(services) {
      if(services) {
        this.services = services.sort((a, b) => a.id - b.id);
      }
    },
    async toCreatePage() {
      this.$router.push('/services/new');
    },
    async toEditPage(id) {
      this.$router.push(`/service/${id}`);
    },
    async deleteService(id) {
      await api.services.deleteService(id);
      await this.getServices();
    },
  },
  async mounted() {
    await this.getServices();
    await this.sortServicesById(this.services);
  }
}
</script>