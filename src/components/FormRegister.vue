<template>
  <div>
    <form action="" class="flex flex-col gap-2 w-96">
      <label for="" class="text-md font-semibold">Name:</label>
      <input type="text" class="text-white bg-zinc-700 p-2">
      <label for="" class="text-md font-semibold">Email:</label>
      <input type="text" class="text-white bg-zinc-700 p-2">
      <label for="" class="font-semibold text-md">Password:</label>
      <input type="text" class="text-white bg-zinc-700 p-2">
      <label for="" class="font-semibold text-md">Confirm your passoword:</label>
      <input type="text" class="text-white bg-zinc-700 p-2">
      <button class="bg-green-700 font-semibold text-white p-4">Register</button>
      <slot></slot>
    </form>
  </div>
</template>
<script setup>
</script>