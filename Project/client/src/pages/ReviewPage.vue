<template>
  <header-section></header-section>
  <ContactsComponent></ContactsComponent>
  <footer-section></footer-section>
</template>

<script>
import ContactsComponent from "@/components/ReviewComponent.vue";
import HeaderSection from "@/components/HeaderSection.vue";
import FooterSection from "@/components/FooterSection.vue";

export default {
  components: { HeaderSection, ContactsComponent, FooterSection }
}
</script>