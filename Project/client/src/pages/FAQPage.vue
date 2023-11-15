<template>
  <header-section></header-section>
  <f-a-q-component></f-a-q-component>
  <footer-section></footer-section>
</template>

<script>
import FAQComponent from "@/components/FAQComponent.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  components: { HeaderSection, FAQComponent, FooterSection }
}
</script>