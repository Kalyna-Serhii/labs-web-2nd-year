<template>
  <section>
    <h2>Create car</h2>
    <div class="container">
      <div>
        <div>
          <form ref="form" @submit.prevent="submitForm">
            <div class="row border mb-3">
              <div class="col-3">
                <label class="form-label">Brand</label>
                <input class="form-control" name="brand" type="text" required />
              </div>
              <div class="col-3">
                <label class="form-label">Model</label>
                <input class="form-control" name="model" type="text" required />
              </div>
              <div class="col-3">
                <label class="form-label">Year</label>
                <input class="form-control" name="year" type="number" required />
              </div>
              <div class="col-3">
                <label class="form-label">Price</label>
                <input class="form-control" name="price" type="number" min="1" required />
              </div>
              <div class="col-3">
                <label class="form-label">Amount</label>
                <input class="form-control" name="amount" type="number" min="1" />
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
      const response = await api.cars.createCar(formBody);
      if(response && response.status === 201) {
        this.$router.push('/cars');
      }
    },
  },
}
</script>