<template>
  <header-section></header-section>
  <edit-user-component></edit-user-component>
  <footer-section></footer-section>
</template>

<script>
  import EditUserComponent from "@/components/EditUserComponent.vue";
  import HeaderSection from "@/components/HeaderSection.vue";
  import FooterSection from "@/components/FooterSection.vue";

  export default {
    components: { HeaderSection, EditUserComponent, FooterSection }
  }
</script>