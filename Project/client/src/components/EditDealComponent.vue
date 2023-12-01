<template>
  <section>
    <h2>Edit deal</h2>
    <div class="container">
      <div>
        <form ref="form" @submit.prevent="submitForm">
          <div class="row border mb-3">
            <div class="col-3">
              <label class="form-label">User</label>
              <select class="form-control" name="userId" v-model="deal.userId">
                <option v-for="(user, index) in users" :key="index" :value="user.id">
                  {{ user.id }} {{ user.name }}
                </option>
              </select>
            </div>
            <div class="col-3">
              <label class="form-label">Car</label>
              <select class="form-control" name="carId" v-model="deal.carId">
                <option v-for="(car, index) in cars" :key="index" :value="car.id">
                  {{ car.id }} {{ car.brand }} {{ car.model }}
                </option>
              </select>
            </div>
            <div class="col-3">
              <label class="form-label">Package</label>
              <select class="form-control" name="packageId" v-model="deal.packageId">
                <option v-for="(Package, index) in packages" :key="index" :value="Package.id">
                  {{ Package.id }} {{ Package.name }}
                </option>
              </select>
            </div>
            <div class="col-3">
              <label class="form-label">Price</label>
              <input class="form-control" name="price" type="number" :value="deal.price" min="1" required />
            </div>
            <div class="col-3">
              <label class="form-label">Date</label>
              <input class="form-control" name="date" type="date" :value="deal.date" required />
            </div>
            <div class="col-6">
              <label class="form-label">Control</label>
              <button type="submit" class="btn btn-small btn-primary">
                <i class="bi bi-check-circle-fill"></i> Save
              </button>
            </div>
            <div class="col-6">
              <label class="form-label"></label>
              <button type="button" @click="deleteDeal(deal.id)" class="btn btn-small btn-primary">
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
      deal: [],
      users: [],
      cars: [],
      packages: [],
    }
  },
  methods: {
    getDealIdFromRoute() {
      return this.$route.params.dealId;
    },
    async getDealById(dealId) {
      this.deal = await api.deals.getDealById(dealId);
    },
    async submitForm() {
      const form = this.$refs.form;
      const dealId = this.deal.id;
      const formBody = getFormBody(form);
      const response = await api.deals.updateDeal(dealId, formBody);
      if (response && response.status === 200) {
        this.$router.push('/deals');
      }
    },
    async deleteDeal(id) {
      const response = await api.deals.deleteDeal(id);
      if (response && response.status === 204) {
        this.$router.push('/deals');
      }
    },
    async getUsers() {
      this.users = await api.users.getUsers();
    },
    async getCars() {
      this.cars = await api.cars.getCars();
    },
    async getPackages() {
      this.packages = await api.packages.getPackages();
    },
  },
  async mounted() {
    const dealId = this.getDealIdFromRoute();
    await this.getDealById(dealId);
    await this.getUsers();
    await this.getCars();
    await this.getPackages();
  },
}
</script>