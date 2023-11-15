<template>
  <header-section></header-section>
  <RegisterComponent></RegisterComponent>
  <footer-section></footer-section>
</template>

<script>
import RegisterComponent from "@/components/RegisterComponent.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  components: { HeaderSection, RegisterComponent, FooterSection }
}
</script>