<template>
  <div class="flex flex-col p-10 justify-center items-center">
    <h1 class="text-3xl font-semibold">Login</h1>
    <form action="" class="flex flex-col gap-2 w-96">
      <label for="" class="text-[1rem] font-semibold">Email:</label>
      <input type="text" class="text-white bg-zinc-700 p-2">
      <label for="" class="font-semibold text-[0.9rem]">Senha:</label>
      <input type="text" class="text-white bg-zinc-700 p-2">
      <div class="flex justify-between">
        <RouterLink @click="handleLazy" to="/forgot" class="text-right  text-blue-600 font-medium underline">Esqueceu sua
          senha?
        </RouterLink>
        <RouterLink to="/register" class="text-right text-blue-600 font-medium underline">Cadastre-se aqui</RouterLink>
      </div>

      <button class="bg-green-700 font-semibold text-white p-4 hover:bg-green-600">Entrar</button>
    </form>
  </div>
</template>
<script>
</script>