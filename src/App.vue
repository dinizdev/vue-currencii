<script setup lang="js">
// import NavbarComp from './components/NavbarComp.vue'
import { RouterView } from 'vue-router';
import NavbarComp from './components/NavbarComp.vue';
import FooterComp from './components/FooterComp.vue';


</script>

<template>
  <header>
    <NavbarComp />
  </header>
  <RouterView />
  <FooterComp />
</template>

