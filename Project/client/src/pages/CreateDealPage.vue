<template>
  <header-section></header-section>
  <create-deal-component></create-deal-component>
  <footer-section></footer-section>
</template>

<script>
import CreateDealComponent from "@/components/CreateDealComponent.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  components: {HeaderSection, CreateDealComponent, FooterSection}
}
</script>