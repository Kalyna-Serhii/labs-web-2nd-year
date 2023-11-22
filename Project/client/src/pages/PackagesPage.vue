<template>
  <header-section></header-section>
  <table-packages-component></table-packages-component>
  <footer-section></footer-section>
</template>

<script>
  import TablePackagesComponent from "@/components/TablePackagesComponent.vue";
  import HeaderSection from "@/components/HeaderSection.vue";
  import FooterSection from "@/components/FooterSection.vue";

  export default {
    components: { HeaderSection, TablePackagesComponent, FooterSection }
  }
</script>