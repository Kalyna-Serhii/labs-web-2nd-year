<template>
  <section id='pricing'>
    <div class='container'>
      <div class='section-header'>
        <h2 class='section-title wow fadeInDown'>Pricing</h2>
        <p class='wow fadeInDown'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae
          massa <br> semper aliquam quis mattis quam.</p>
      </div>

      <div>
        <div v-for="(plan, index) in pricingList" :key="index">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="frame">
              <ul class="pricing">
                <li class="plan-header">
                  <div class="price-duration">
                    <span class="price">${{ plan.price }}</span>
                    <span class="duration">Car Servicing</span>
                  </div>
                  <div class="plan-name">{{ plan.name }}</div>
                </li>
                <li v-for="service in plan.services" :key="service"> {{ service.name }}</li>
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
import api from '../api';
export default {
  async mounted() {
    try {
      this.pricingList = await api.packages.getPackages();
    } catch (error) {
      alert(error);
    }
  },
  data() {
    return {
      pricingList: [],
    };
  },
};
</script>
