<template>
  <header-section></header-section>
  <table-user-component></table-user-component>
  <footer-section></footer-section>
</template>

<script>
  import TableUserComponent from "@/components/TableUserComponent.vue";
  import HeaderSection from "@/components/HeaderSection.vue";
  import FooterSection from "@/components/FooterSection.vue";

  export default {
    components: { HeaderSection, TableUserComponent, FooterSection }
  }
</script>