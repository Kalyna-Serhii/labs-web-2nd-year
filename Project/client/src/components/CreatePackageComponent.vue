<template>
  <section>
    <h2>Create package</h2>
    <div class="container">
      <div>
        <form ref="form" @submit.prevent="submitForm">
          <div class="row border mb-3">
            <div class="col-3">
              <label class="form-label">Name</label>
              <input class="form-control" name="name" type="text" required/>
            </div>
            <div class="col-4">
              <label class="form-label">Description</label>
              <textarea class="form-control" name="description" />
            </div>
            <div class="col-3">
              <label class="form-label">Price</label>
              <input class="form-control" name="price" type="number" required/>
            </div>
            <div class="col-3">
              <label class="form-label">Services:</label>
              <ul v-for="(service, index) in services" :key="index">
                <li>
                  <input type="checkbox" v-model="selectedServices" :value="service.id" />
                  <label>{{ service.name }}</label>
                </li>
              </ul>
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
  </section>
</template>

<script>
import api from '@/api';
import getFormBody from "@/utils/getFormBody";

export default {
  data() {
    return {
      services: [],
      selectedServices: [],
    }
  },
  methods: {
    async submitForm() {
      const form = this.$refs.form;
      const formBody = getFormBody(form);
      const selectedServices = Object.values(this.selectedServices);
      formBody.idServices = selectedServices;
      const response = await api.packages.createPackage(formBody);
      if(response && response.status === 201) {
        this.$router.push('/packages');
      }
    },
    async getPackages() {
      this.services = await api.services.getServices();
    },
  },
  async mounted() {
    await this.getPackages();
  }
}
</script>