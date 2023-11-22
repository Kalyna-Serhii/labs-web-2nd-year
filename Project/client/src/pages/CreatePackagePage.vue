<template>
  <header-section></header-section>
  <create-package-component></create-package-component>
  <footer-section></footer-section>
</template>

<script>
import CreatePackageComponent from "@/components/CreatePackageComponent.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  components: {HeaderSection, CreatePackageComponent, FooterSection}
}
</script>