<template>
  <section>
    <h2>Edit package</h2>
    <div class="container">
      <form ref="form" @submit.prevent="submitForm">
        <div class="row border mb-3">
          <div class="col-3">
            <label class="form-label">Id</label>
            <input class="form-control" ref="id" name="id" type="number" :value="Package.id" required/>
          </div>
          <div class="col-3">
            <label class="form-label">Name</label>
            <input class="form-control" name="name" type="text" :value="Package.name" required/>
          </div>
          <div class="col-4">
            <label class="form-label">Description</label>
            <textarea class="form-control" name="description" :value="Package.description"/>
          </div>
          <div class="col-3">
            <label class="form-label">Price</label>
            <input class="form-control" name="price" type="number" :value="Package.price" min="1" required/>
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
              <i class="bi bi-check-circle-fill"></i> Save
            </button>
          </div>
          <div class="col-6">
            <label class="form-label"></label>
            <button type="button" @click="deletePackage(Package.id)" class="btn btn-small btn-primary">
              <i class="bi bi-trash"></i> Delete
            </button>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import api from '@/api';
import getFormBody from "@/utils/getFormBody";

export default {
  data() {
    return {
      Package: {},
      services: [],
      selectedServices: [],
    }
  },
  methods: {
    getPackageIdFromRoute() {
      return this.$route.params.packageId;
    },
    async getPackageById(packageId) {
      this.Package = await api.packages.getPackageById(packageId);
    },
    async getServices() {
      this.services = await api.services.getServices();
    },
    enableCheckboxes() {
      for (let i = 0; i < this.Package.services.length; i++) {
        for (let j = 0; j < this.services.length; j++) {
          if(this.Package.services[i].id === this.services[j].id) {
            this.selectedServices.push(this.services[j].id)
            break;
          }
        }
      }
    },
    async submitForm() {
      const form = this.$refs.form;
      const packageId = this.Package.id;
      const formBody = getFormBody(form);
      const selectedServices = Object.values(this.selectedServices);
      formBody.idServices = selectedServices;
      const response = await api.packages.updatePackage(packageId, formBody);
      if (response && response.status === 200) {
        this.$router.push('/packages');
      }
    },
    async deletePackage(id) {
      const response = await api.packages.deletePackage(id);
      if (response && response.status === 204) {
        this.$router.push('/packages');
      }
    },
  },
  async mounted() {
    const id = this.$refs.id;
    id.readOnly = true;
    const packageId = this.getPackageIdFromRoute();
    await this.getPackageById(packageId);
    await this.getServices();
    this.enableCheckboxes();
  },
}
</script>