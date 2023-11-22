<template>
  <section id='packages'>
    <h2>Packages
      <button @click="toCreatePage()" class="btn btn-small btn-primary"><i class="bi bi-plus-square"></i></button>
    </h2>

    <div class='container'>
      <div>
        <div v-for="(Package, index) in packages" :key="index">
          <div class="col-md-3 col-sm-6 col-xs-12">
            <div class="frame">
              <ul class="packages">
                <li class="plan-header">
                  <div class="price-duration">
                    <span class="price">${{ Package.price }}</span>
                    <span class="duration">Car Servicing</span>
                  </div>
                  <div class="plan-name">{{ Package.name }}</div>
                </li>
                <li v-for="service in Package.services" :key="service"> {{ service.name }}</li>
                <li>
                  <button @click="toEditPage(Package.id)" class="btn btn-small btn-primary"><i
                      class="bi bi-pencil-square"></i></button>
                  <button @click="deleteService(Package.id)" class="btn btn-small btn-primary"><i
                      class="bi bi-trash"></i></button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from '@/api';

export default {
  data() {
    return {
      packages: [],
    };
  },
  methods: {
    async getPackages() {
      const response = await api.packages.getPackages();
      this.packages = response;
    },
    async sortPackagesByPrice(packages) {
      if (packages) {
        this.services = packages.sort((a, b) => a.price - b.price);
      }
    },
    async toCreatePage() {
      this.$router.push('/packages/new');
    },
    async toEditPage(id) {
      this.$router.push(`/package/${id}`);
    },
    async deleteService(id) {
      await api.packages.deletePackage(id);
      await this.getPackages();
    },
  },
  async mounted() {
    await this.getPackages();
    await this.sortPackagesByPrice(this.packages);
  }
}
</script>