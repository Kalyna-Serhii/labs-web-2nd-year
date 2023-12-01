<template>
  <section>
    <h2>Edit car</h2>
    <div class="container">
      <div>
        <form ref="form" @submit.prevent="submitForm">
          <div class="row border mb-3">
            <div class="col-3">
              <label class="form-label">ID</label>
              <input class="form-control" name="id" type="number" ref="id" :value="car.id" />
            </div>
            <div class="col-3">
              <label class="form-label">Brand</label>
              <input class="form-control" name="brand" type="text" :value="car.brand" required />
            </div>
            <div class="col-3">
              <label class="form-label">Model</label>
              <input class="form-control" name="model" type="text" :value="car.model" required />
            </div>
            <div class="col-3">
              <label class="form-label">Year</label>
              <input class="form-control" name="year" type="number" :value="car.year" required />
            </div>
            <div class="col-3">
              <label class="form-label">Price</label>
              <input class="form-control" name="price" type="number" :value="car.price" min="1" required />
            </div>
            <div class="col-3">
              <label class="form-label">Amount</label>
              <input class="form-control" name="amount" type="number" :value="car.amount" min="1" required />
            </div>
            <div class="col-6">
              <label class="form-label">Control</label>
              <button type="submit" class="btn btn-small btn-primary">
                <i class="bi bi-check-circle-fill"></i> Save
              </button>
            </div>
            <div class="col-6">
              <label class="form-label"></label>
              <button type="button" @click="deleteCar(car.id)" class="btn btn-small btn-primary">
                <i class="bi bi-trash"></i> Delete
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import api from '@/api';
import getFormBody from "@/utils/getFormBody";

export default {
  data() {
    return {
      car: [],
    }
  },
  methods: {
    getCarIdFromRoute() {
      return this.$route.params.carId;
    },
    async getCarById(carId) {
      this.car = await api.cars.getCarById(carId);
    },
    async submitForm() {
      const form = this.$refs.form;
      const carId = this.car.id;
      const formBody = getFormBody(form);
      const response = await api.cars.updateCar(carId, formBody);
      if (response && response.status === 200) {
        this.$router.push('/cars');
      }
    },
    async deleteCar(id) {
      const response = await api.cars.deleteCar(id);
      if (response && response.status === 204) {
        this.$router.push('/cars');
      }
    },
  },
  async mounted() {
    const id = this.$refs.id;
    id.readOnly = true;
    const carId = this.getCarIdFromRoute();
    await this.getCarById(carId);
  },
}
</script>