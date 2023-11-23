<template>
  <section id='packages'>
    <div class='container'>
      <div class="section-header">
        <h2 class='section-title wow fadeInDown'>Cars</h2>
        <p class='wow fadeInDown'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget risus vitae
          massa <br> semper aliquam quis mattis quam.</p>
      </div>

      <div class="container">
        <button @click="toCreatePage()" class="btn btn-primary">Sell my car</button>
        <div v-for="(car, index) in cars" :key="index">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="frame">
              <ul class="packages">
                <li class="plan-header">
                  <div class="price-duration">
                    <span class="price">${{ car.price }}</span>
                    <span class="plan-name">{{car.brand}} {{car.model}}</span>
                  </div>
                </li>
                <li>
                  <div class="duration">{{ car.year }}</div>
                  <div class="duration">left {{ car.amount }}</div>
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
      cars: [],
    };
  },
  methods: {
    async getCars() {
      const response = await api.cars.getCars();
      this.cars = response;
    },
    async sortCarsByPrice(cars) {
      if(cars) {
        this.cars = cars.sort((a, b) => a.price - b.price);
      }
    },
    async toCreatePage() {
      this.$router.push('/cars/sell');
    },
  },
  async mounted() {
    await this.getCars();
    await this.sortCarsByPrice(this.cars);
  }
}
</script>