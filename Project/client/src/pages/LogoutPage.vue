<template>
  <header-section></header-section>
  <logout-component></logout-component>
  <footer-section></footer-section>
</template>

<script>
import LogoutComponent from "@/components/LogoutComponent.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  components: { HeaderSection, LogoutComponent, FooterSection }
}
</script>