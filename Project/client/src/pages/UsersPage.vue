<template>
  <header-section></header-section>
  <table-users-component></table-users-component>
  <footer-section></footer-section>
</template>

<script>
  import TableUsersComponent from "@/components/TableUsersComponent.vue";
  import HeaderSection from "@/components/HeaderSection.vue";
  import FooterSection from "@/components/FooterSection.vue";

  export default {
    components: { HeaderSection, TableUsersComponent, FooterSection }
  }
</script>