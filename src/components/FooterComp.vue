<template>
  <div>
    <!-- Conteúdo da sua página -->

    <footer class="flex flex-col justify-center items-center max-h-screen text-sm bg-green-600  text-white p-2 ">
      <nav class="flex items-center justify-center gap-2">
        <ul class="flex p-4 grid-cols-2 gap-4 underline">
          <li v-for="(link, index) in links" :key="index">
            <a :href="link.link">{{ link.title }}</a>
          </li>
        </ul>
      </nav>
      <p class="flex w-full bg-gray-900 p-2 justify-center items-end text-white font-semibold">Todos os Direitos
        Reservados 2023
        &copy;
        Currencii
      </p>
    </footer>
  </div>
</template>

<script setup>
import links from "../utils/links"
</script>

