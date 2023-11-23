<template>
  <header-section></header-section>
  <BannerComponent></BannerComponent>
  <DownloadComponent></DownloadComponent>
  <AboutComponent></AboutComponent>
  <ServicesComponent></ServicesComponent>
  <PackagesComponent></PackagesComponent>
  <CarsComponent></CarsComponent>
  <footer-section></footer-section>
</template>

<script>
import HeaderSection from "@/components/HeaderSection.vue";
import BannerComponent from "@/components/BannerComponent.vue";
import DownloadComponent from "@/components/DownloadComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import PackagesComponent from "@/components/PackagesComponent.vue";
import CarsComponent from "@/components/CarsComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  components: { HeaderSection, BannerComponent, DownloadComponent, ServicesComponent, AboutComponent, PackagesComponent, CarsComponent, FooterSection }
}
</script>