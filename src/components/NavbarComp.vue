<template>
  <div class="bg-green-600 h-12 text-white flex justify-center items-center text-sm">
    <router-link class="text-2xl font-bold p-3" to="/">Currencii</router-link>
    <img src="@/assets/imgs/logo.svg" class="icon max-sm:hidden" width="100" alt="Logo">
    <nav class="flex gap-5 justify-center">
      <router-link to="/">Página Inicial</router-link>
      <router-link to="/convert">Conversor</router-link>
      <router-link to="/login" class="text-right">Login</router-link>
    </nav>
  </div>
</template>

<script>
// Importe o componente RouterLink do Vue Router
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'Navbar', // Nome do seu componente
  components: {
    RouterLink // Registrando o componente RouterLink para uso no template
  }
});
</script>
