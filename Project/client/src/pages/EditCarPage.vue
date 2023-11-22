<template>
  <header-section></header-section>
  <edit-car-component></edit-car-component>
  <footer-section></footer-section>
</template>

<script>
  import EditCarComponent from "@/components/EditCarComponent.vue";
  import HeaderSection from "@/components/HeaderSection.vue";
  import FooterSection from "@/components/FooterSection.vue";

  export default {
    components: { HeaderSection, EditCarComponent, FooterSection }
  }
</script>