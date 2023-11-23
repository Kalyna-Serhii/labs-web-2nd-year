<template>
  <section>
    <h2>Create deal</h2>
    <div class="container">
      <div>
        <div>
          <form ref="form" @submit.prevent="submitForm">
            <div class="row border mb-3">
              <div class="col-3">
                <label class="form-label">User id</label>
                <input class="form-control" name="userId" type="number" required />
              </div>
              <div class="col-3">
                <label class="form-label">Car id</label>
                <input class="form-control" name="carId" type="number" />
              </div>
              <div class="col-3">
                <label class="form-label">Package id</label>
                <input class="form-control" name="packageId" type="number" />
              </div>
              <div class="col-3">
                <label class="form-label">Price</label>
                <input class="form-control" name="price" type="number" required />
              </div>
              <div class="col-3">
                <label class="form-label">Date</label>
                <input class="form-control" name="date" type="date" required />
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
      console.log(formBody);
      const response = await api.deals.createDeal(formBody);
      if(response && response.status === 201) {
        this.$router.push('/deals');
      }
    },
  },
}
</script>