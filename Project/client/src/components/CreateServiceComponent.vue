<template>
  <section>
    <h2>Create service</h2>
    <div class="container">
      <div>
        <div>
          <form ref="form" @submit.prevent="submitForm">
            <div class="row border mb-3">
              <div class="col-3">
                <label class="form-label">Name</label>
                <input class="form-control" name="name" type="text" required />
              </div>
              <div class="col-4">
                <label class="form-label">Description</label>
                <textarea class="form-control" name="description" />
              </div>
              <div class="col-3">
                <label class="form-label">Price</label>
                <input class="form-control" name="price" type="number" required />
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
  methods: {
    async submitForm() {
      const form = this.$refs.form;
      const formBody = getFormBody(form);
      const response = await api.services.createService(formBody);
      if(response && response.status === 201) {
        this.$router.push('/services');
      }
    },
  },
}
</script>