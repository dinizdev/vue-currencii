<template>
  <footer class=" grid text-sm bg-green-600 items-center text-white p-2 ">
    <nav class="grid grid-cols-2 gap-2 w-full max-w-xl mx-auto">
      <ul class="grid grid-cols-2 gap-1 underline">
        <li v-for="link in  links " key="id">
          <a :href="link.link">{{ link.title }}</a>
        </li>
      </ul>
      <p class="flex justify-center place-items-end itens-end text-white font-semibold">All rights reserved 2023 Currencii
      </p>
    </nav>
  </footer>
</template>
<script setup>
import links from "../utils/links"
</script>
