<template>
  <section>
    <h2>Edit deal</h2>
    <div class="container">
      <div>
        <form ref="form" @submit.prevent="submitForm">
          <div class="row border mb-3">
            <div class="col-3">
              <label class="form-label">ID</label>
              <input class="form-control" name="id" type="number" ref="id" :value="deal.id" />
            </div>
            <div class="col-3">
              <label class="form-label">User id</label>
              <input class="form-control" name="userId" type="number" :value="deal.userId" required />
            </div>
            <div class="col-3">
              <label class="form-label">Car id</label>
              <input class="form-control" name="carId" type="number" :value="deal.carId" />
            </div>
            <div class="col-3">
              <label class="form-label">Package id</label>
              <input class="form-control" name="packageId" type="number" :value="deal.packageId" />
            </div>
            <div class="col-3">
              <label class="form-label">Price</label>
              <input class="form-control" name="price" type="number" :value="deal.price" required />
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
      console.log(formBody)
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
  },
  async mounted() {
    const id = this.$refs.id;
    id.readOnly = true;
    const dealId = this.getDealIdFromRoute();
    await this.getDealById(dealId);
  },
}
</script>