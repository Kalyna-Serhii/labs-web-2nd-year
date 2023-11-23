<template>
  <header-section></header-section>
  <sell-car-component></sell-car-component>
  <footer-section></footer-section>
</template>

<script>
import SellCarComponent from "@/components/SellCarComponent.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  components: {HeaderSection, SellCarComponent, FooterSection}
}
</script>