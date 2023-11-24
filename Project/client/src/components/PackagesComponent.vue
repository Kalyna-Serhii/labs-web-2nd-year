<template>
  <section id='pricing'>
    <div class='container'>
      <div class='section-header'>
        <h2 class='section-title wow fadeInDown'>Packages</h2>
        <p class='wow fadeInDown'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae
          massa <br> semper aliquam quis mattis quam.</p>
      </div>

      <div v-for="(plan, index) in pricingList" :key="index">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="frame">
            <ul class="pricing">
              <li class="plan-header">
                <div class="price-duration">
                  <span class="price">${{ plan.price }}</span>
                  <span class="duration">{{ plan.description }}</span>
                </div>
                <div class="plan-name">{{ plan.name }}</div>
              </li>
              <li v-for="service in plan.services" :key="service"> {{ service.name }} - ${{ service.price }}</li>
              <li class="plan-purchase">
                <button @click="buyPackage(plan.id)" class="btn btn-primary">Get It Now!</button>
              </li>
            </ul>
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
      pricingList: [],
    };
  },
  methods: {
    async getPricingList() {
      const response = await api.packages.getPackages();
      this.pricingList = response;
    },
    async sortPricingListByPrice(pricingList) {
      if (pricingList) {
        this.pricingList = pricingList.sort((a, b) => a.price - b.price);
      }
    },
    async buyPackage(id) {
      const formBody = {
        packageId: id,
      };
      const response = await api.packages.buyPackage(formBody);
      if (response && response.status === 201) {
        alert('Package bought successfully');
      }
    },
  },
  async mounted() {
    await this.getPricingList();
    await this.sortPricingListByPrice(this.pricingList);
  },
};
</script>
