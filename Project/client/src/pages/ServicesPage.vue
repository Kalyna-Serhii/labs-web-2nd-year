<template>
  <header-section></header-section>
  <table-services-component></table-services-component>
  <footer-section></footer-section>
</template>

<script>
  import TableServicesComponent from "@/components/TableServicesComponent.vue";
  import HeaderSection from "@/components/HeaderSection.vue";
  import FooterSection from "@/components/FooterSection.vue";

  export default {
    components: { HeaderSection, TableServicesComponent, FooterSection }
  }
</script>