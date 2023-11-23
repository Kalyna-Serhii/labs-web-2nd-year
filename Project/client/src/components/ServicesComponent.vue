<template>
  <section id='packages'>
    <div class="container">
      <div class="section-header">
        <h2 class='section-title wow fadeInDown'>Services</h2>
        <p class='wow fadeInDown'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae
          massa <br> semper aliquam quis mattis quam.</p>
      </div>

      <div class='container'>
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
                  <li class="plan-purchase"><a class="btn btn-primary" href="#">Get It Now!</a></li>
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
  },
  async mounted() {
    await this.getServices();
    await this.sortServicesByPrice(this.services);
  }
}
</script>