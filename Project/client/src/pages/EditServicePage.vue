<template>
  <header-section></header-section>
  <edit-services-component></edit-services-component>
  <footer-section></footer-section>
</template>

<script>
  import EditServicesComponent from "@/components/EditServiceComponent.vue";
  import HeaderSection from "@/components/HeaderSection.vue";
  import FooterSection from "@/components/FooterSection.vue";

  export default {
    components: { HeaderSection, EditServicesComponent, FooterSection }
  }
</script>