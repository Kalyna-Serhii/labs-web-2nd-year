<template>
  <header-section></header-section>
  <create-service-component></create-service-component>
  <footer-section></footer-section>
</template>

<script>
  import CreateServiceComponent from "@/components/CreateServiceComponent.vue";
  import HeaderSection from "@/components/HeaderSection.vue";
  import FooterSection from "@/components/FooterSection.vue";

  export default {
    components: { HeaderSection, CreateServiceComponent, FooterSection }
  }
</script>