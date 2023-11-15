<template>
  <header-section></header-section>
  <BannerComponent></BannerComponent>
  <DownloadComponent></DownloadComponent>
  <ServicesComponent></ServicesComponent>
  <AboutComponent></AboutComponent>
  <PricingComponent></PricingComponent>
  <footer-section></footer-section>
</template>

<script>
import BannerComponent from "@/components/BannerComponent.vue";
import DownloadComponent from "@/components/DownloadComponent.vue";
import ServicesComponent from "@/components/ServicesComponent.vue";
import AboutComponent from "@/components/AboutComponent.vue";
import PricingComponent from "@/components/PricingComponent.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  components: { HeaderSection, BannerComponent, DownloadComponent, ServicesComponent, AboutComponent, PricingComponent, FooterSection }
}
</script>