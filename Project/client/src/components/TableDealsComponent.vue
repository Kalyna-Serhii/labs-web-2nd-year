<template>
  <section>
    <h2>Deals
      <button @click="toCreatePage()" class="btn btn-small btn-primary"><i class="bi bi-plus-square"></i></button>
    </h2>
    <section>
      <div class="container">
        <table class="resp-tab">
          <thead>
          <tr>
            <th>ID</th>
            <th>User id</th>
            <th>Car id</th>
            <th>Package id</th>
            <th>Price</th>
            <th>Date</th>
            <th>Control</th>
          </tr>
          </thead>

          <tbody>
          <tr v-for='(deal, index) in deals' :key='index'>
            <td><span>ID</span> {{ deal.id }} </td>
            <td v-if="deal.userId" @click="toUserPage(deal.userId)" class="link-style"><span>User id</span> {{ deal.userId }} </td>
            <td v-else><span>User id</span> {{ deal.userId }} </td>
            <td v-if="deal.carId" @click="toCarPage(deal.carId)" class="link-style"><span>Car id</span> {{ deal.carId }} </td>
            <td v-else><span>Car id</span> {{ deal.carId }} </td>
            <td v-if="deal.packageId" @click="toPackagePage(deal.packageId)" class="link-style"><span>Package id</span> {{ deal.packageId }} </td>
            <td v-else><span>Package id</span> {{ deal.packageId }} </td>
            <td><span>Price</span> {{ deal.price }} </td>
            <td><span>Date</span> {{ deal.date }} </td>
            <td>
              <span>Control</span>
              <button @click="toEditPage(deal.id)" class="btn btn-small btn-primary"><i class="bi bi-pencil-square"></i></button>
              <button @click="deleteDeal(deal.id)" class="btn btn-small btn-primary"><i class="bi bi-trash"></i></button>
            </td>
          </tr>
          </tbody>

        </table>
      </div>
    </section>
  </section>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      deals: [],
    };
  },
  methods: {
    async getDeals() {
      const response = await api.deals.getDeals();
      this.deals = response;
    },
    async sortDealsById(deals) {
      if(deals) {
        this.deals = deals.sort((a, b) => a.id - b.id);
      }
    },
    async toCreatePage() {
      this.$router.push('/deals/new');
    },
    async toEditPage(id) {
      this.$router.push(`/deal/${id}`);
    },
    async deleteDeal(id) {
      await api.deals.deleteDeal(id);
      await this.getDeals();
      await this.sortDealsById(this.deals);
    },
    async toUserPage(id) {
      this.$router.push(`/user/${id}`);
    },
    async toCarPage(id) {
      this.$router.push(`/car/${id}`);
    },
    async toPackagePage(id) {
      this.$router.push(`/package/${id}`);
    },
  },
  async mounted() {
    await this.getDeals();
    await this.sortDealsById(this.deals);
  }
}
</script>