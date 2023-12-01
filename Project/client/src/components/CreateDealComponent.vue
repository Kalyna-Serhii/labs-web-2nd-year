<template>
  <section>
    <h2>Create deal</h2>
    <div class="container">
      <div>
        <div>
          <form ref="form" @submit.prevent="submitForm">
            <div class="row border mb-3">
              <div class="col-3">
                <label class="form-label">User</label>
                <select class="form-control" name="userId" required>
                  <option value=""></option>
                  <option v-for="(user, index) in users" :key="index" :value="user.id">
                    {{ user.id }} {{ user.name }}
                  </option>
                </select>
              </div>
              <div class="col-3">
                <label class="form-label">Car</label>
                <select class="form-control" name="carId">
                  <option value=""></option>
                  <option v-for="(car, index) in cars" :key="index" :value="car.id">
                    {{ car.id }} {{ car.brand }} {{ car.model }}
                  </option>
                </select>
              </div>
              <div class="col-3">
                <label class="form-label">Package</label>
                <select class="form-control" name="packageId">
                  <option value=""></option>
                  <option v-for="(Package, index) in packages" :key="index" :value="Package.id">
                    {{ Package.id }} {{ Package.name }}
                  </option>
                </select>
              </div>
              <div class="col-3">
                <label class="form-label">Price</label>
                <input class="form-control" name="price" type="number" min="1" required/>
              </div>
              <div class="col-3">
                <label class="form-label">Date</label>
                <input class="form-control" name="date" type="date" required/>
              </div>
              <div class="col-6">
                <label class="form-label">Control</label>
                <button type="submit" class="btn btn-small btn-primary">
                  <i class="bi bi-check-circle-fill"></i> Create
                </button>
              </div>
            </div>
          </form>
        </div>
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
      users: [],
      cars: [],
      packages: [],
    }
  },
  methods: {
    async getUsers() {
      this.users = await api.users.getUsers();
    },
    async getCars() {
      this.cars = await api.cars.getCars();
    },
    async getPackages() {
      this.packages = await api.packages.getPackages();
    },
    async submitForm() {
      const form = this.$refs.form;
      const formBody = getFormBody(form);
      const response = await api.deals.createDeal(formBody);
      if (response && response.status === 201) {
        this.$router.push('/deals');
      }
    },
  },
  async mounted() {
    await this.getUsers();
    await this.getCars();
    await this.getPackages();
  },
}
</script>