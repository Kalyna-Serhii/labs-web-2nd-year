<template>
  <header-section></header-section>
  <create-services-component></create-services-component>
  <footer-section></footer-section>
</template>

<script>
  import CreateServicesComponent from "@/components/CreateServiceComponent.vue";
  import HeaderSection from "@/components/HeaderSection.vue";
  import FooterSection from "@/components/FooterSection.vue";

  export default {
    components: { HeaderSection, CreateServicesComponent, FooterSection }
  }
</script>