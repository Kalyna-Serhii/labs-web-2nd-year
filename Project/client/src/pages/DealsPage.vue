<template>
  <header-section></header-section>
  <table-deals-component></table-deals-component>
  <footer-section></footer-section>
</template>

<script>
import TableDealsComponent from "@/components/TableDealsComponent.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  components: {HeaderSection, TableDealsComponent, FooterSection}
}
</script>