<template>
  <header-section></header-section>
  <edit-service-component></edit-service-component>
  <footer-section></footer-section>
</template>

<script>
  import EditServiceComponent from "@/components/EditServiceComponent.vue";
  import HeaderSection from "@/components/HeaderSection.vue";
  import FooterSection from "@/components/FooterSection.vue";

  export default {
    components: { HeaderSection, EditServiceComponent, FooterSection }
  }
</script>