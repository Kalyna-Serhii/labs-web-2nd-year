<template>
  <header-section></header-section>
  <edit-package-component></edit-package-component>
  <footer-section></footer-section>
</template>

<script>
  import EditPackageComponent from "@/components/EditPackageComponent.vue";
  import HeaderSection from "@/components/HeaderSection.vue";
  import FooterSection from "@/components/FooterSection.vue";

  export default {
    components: { HeaderSection, EditPackageComponent, FooterSection }
  }
</script>