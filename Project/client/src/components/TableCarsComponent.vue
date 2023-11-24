<template>
  <section id='packages'>
    <h2>Cars
      <button @click="toCreatePage()" class="btn btn-small btn-primary"><i class="bi bi-plus-square"></i></button>
    </h2>

    <div class='container'>
      <div>
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
                <li>
                  <button @click="toEditPage(car.id)" class="btn btn-small btn-primary"><i
                      class="bi bi-pencil-square"></i></button>
                  <button @click="deleteCar(car.id)" class="btn btn-small btn-primary"><i
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
      this.$router.push('/cars/new');
    },
    async toEditPage(id) {
      this.$router.push(`/car/${id}`);
    },
    async deleteCar(id) {
      await api.cars.deleteCar(id);
      await this.getCars();
      await this.sortCarsByPrice(this.cars);
    },
  },
  async mounted() {
    await this.getCars();
    await this.sortCarsByPrice(this.cars);
  }
}
</script>