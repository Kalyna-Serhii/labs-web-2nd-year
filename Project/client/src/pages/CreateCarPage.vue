<template>
  <header-section></header-section>
  <create-car-component></create-car-component>
  <footer-section></footer-section>
</template>

<script>
import CreateCarComponent from "@/components/CreateCarComponent.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  components: {HeaderSection, CreateCarComponent, FooterSection}
}
</script>