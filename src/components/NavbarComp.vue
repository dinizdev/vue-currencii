<script>
// eslint-disable-next-line no-unused-vars
import { RouterLink } from 'vue-router';


</script>
<template>
  <div class="bg-green-600 h-12 text-white  flex justify-center items-center">
    <RouterLink class="text-2xl font-bold" to="/">Currencii</RouterLink>
    <img src="../assets/imgs/logo.svg" class="icon" width="100">
    <nav class="flex gap-5 justify-center text-md">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/convert">Convert</RouterLink>
      <RouterLink to="/login" class="text-right">Login</RouterLink>
    </nav>
  </div>
</template>

