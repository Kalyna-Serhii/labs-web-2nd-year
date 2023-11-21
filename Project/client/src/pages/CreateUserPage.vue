<template>
  <header-section></header-section>
  <create-user-component></create-user-component>
  <footer-section></footer-section>
</template>

<script>
import CreateUserComponent from "@/components/CreateUserComponent.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  components: {HeaderSection, CreateUserComponent, FooterSection}
}
</script>