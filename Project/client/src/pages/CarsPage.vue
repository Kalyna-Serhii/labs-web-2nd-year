<template>
  <header-section></header-section>
  <table-cars-component></table-cars-component>
  <footer-section></footer-section>
</template>

<script>
import TableCarsComponent from "@/components/TableCarsComponent.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  components: {HeaderSection, TableCarsComponent, FooterSection}
}
</script>