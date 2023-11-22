<template>
  <section id='packages'>
    <h2>Services
      <button @click="toCreatePage()" class="btn btn-small btn-primary"><i class="bi bi-plus-square"></i></button>
    </h2>

    <div class='container'>
      <div>
        <div v-for="(service, index) in services" :key="index">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="frame">
              <ul class="packages">
                <li class="plan-header">
                  <div class="price-duration">
                    <span class="price">${{ service.price }}</span>
                    <span class="duration">{{service.description}}</span>
                  </div>
                  <div class="plan-name">{{ service.name }}</div>
                </li>
                <li>
                  <button @click="toEditPage(service.id)" class="btn btn-small btn-primary"><i
                      class="bi bi-pencil-square"></i></button>
                  <button @click="deleteService(service.id)" class="btn btn-small btn-primary"><i
                      class="bi bi-trash"></i></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
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
    async sortServicesByPrice(services) {
      if(services) {
        this.services = services.sort((a, b) => a.price - b.price);
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
    await this.sortServicesByPrice(this.services);
  }
}
</script>