<template>
  <header-section></header-section>
  <login-component></login-component>
  <footer-section></footer-section>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  components: { HeaderSection, LoginComponent, FooterSection }
}
</script>