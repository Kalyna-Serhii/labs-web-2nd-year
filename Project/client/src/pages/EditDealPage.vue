<template>
  <header-section></header-section>
  <edit-deal-component></edit-deal-component>
  <footer-section></footer-section>
</template>

<script>
  import EditDealComponent from "@/components/EditDealComponent.vue";
  import HeaderSection from "@/components/HeaderSection.vue";
  import FooterSection from "@/components/FooterSection.vue";

  export default {
    components: { HeaderSection, EditDealComponent, FooterSection }
  }
</script>