<template>
  <section>
    <h2>Edit service</h2>
    <div class="container">
      <div>
        <div>
          <form ref="form" @submit.prevent="submitForm">
            <div class="row border mb-3">
              <div class="col-3">
                <label class="form-label">ID</label>
                <input class="form-control" name="id" type="number" ref="id" :value="service.id"/>
              </div>
              <div class="col-3">
                <label class="form-label">Name</label>
                <input class="form-control" name="name" type="text" :value="service.name" required/>
              </div>
              <div class="col-4">
                <label class="form-label">Description</label>
                <textarea class="form-control" name="description" :value="service.description"/>
              </div>
              <div class="col-3">
                <label class="form-label">Price</label>
                <input class="form-control" name="price" type="number" :value="service.price" required/>
              </div>
              <div class="col-6">
                <label class="form-label">Control</label>
                <button type="submit" class="btn btn-small btn-primary">
                  <i class="bi bi-check-circle-fill"></i> Save
                </button>
              </div>
              <div class="col-6">
                <label class="form-label"></label>
                <button type="button" @click="deleteService(service.id)" class="btn btn-small btn-primary">
                  <i class="bi bi-trash"></i> Delete
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
      service: [],
    }
  },
  methods: {
    getServiceIdFromRoute() {
      return this.$route.params.serviceId;
    },
    async getServiceById(serviceId) {
      this.service = await api.services.getServiceById(serviceId);
    },
    async submitForm() {
      const form = this.$refs.form;
      const serviceId = this.service.id;
      const formBody = getFormBody(form);
      const response = await api.services.updateService(serviceId, formBody);
      if(response && response.status === 200) {
        this.$router.push('/services');
      }
    },
    async deleteService(id) {
      const response = await api.services.deleteService(id);
      if(response && response.status === 200) {
        this.$router.push('/services');
      }
    },
  },
  async mounted() {
    const id = this.$refs.id;
    id.readOnly = true;
    const serviceId = this.getServiceIdFromRoute();
    await this.getServiceById(serviceId);
  },
}
</script>