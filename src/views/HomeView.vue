<template>
  <div class="p-10 flex flex-col items-center justify-center">
    <h1 class="text-3xl font-semibold">Currency Now</h1>
  </div>
  <main class="w-screen flex items-center justify-center">
    <div class="grid grid-cols-2 p-5 justify-center items-center max-w-xl">
      <h2 class="font-bold text-gray-950">
        <span :class="{ 'flashing-dot': isFlashingEuro }"
          style="color: green; width: 120px; height: 120px; font-size: 2em;">&bull;</span>
        Euro: {{ euro.value }}
      </h2>
      <h2 class="font-bold text-gray-950">
        <span :class="{ 'flashing-dot': isFlashingPound }"
          style="color: blue; width: 120px; height: 120px; font-size: 2em;">&bull;</span>
        Libra: {{ pound.value }}
      </h2>
      <h2 class="font-semibold">Última Atualização Euro: {{ formattedDateEuro }}</h2>
      <h2 class="font-semibold">Última Atualização Libra: {{ formattedDatePound }}</h2>
    </div>
  </main>
</template>

<style>
.flashing-dot {
  animation: blinker 1s linear infinite;
}

@keyframes blinker {
  50% {
    opacity: 0;
  }
}
</style>

<script setup>
import { reactive, onMounted, ref, computed } from 'vue'
import axios from 'axios'
import { format } from 'date-fns'

const euro = reactive({
  value: 0,
  create_date: ''
})

const pound = reactive({
  value: 0,
  create_date: ''
})

const isFlashingEuro = ref(false)
const isFlashingPound = ref(false)

const fetchData = () => {
  const euroApi = "https://economia.awesomeapi.com.br/json/EUR-BRL"
  const poundApi = "https://economia.awesomeapi.com.br/json/GBP-BRL"

  axios.all([
    axios.get(euroApi),
    axios.get(poundApi)
  ])
    .then(axios.spread((euroResponse, poundResponse) => {
      const euroData = euroResponse.data[0]
      const poundData = poundResponse.data[0]

      euro.value = euroData.bid
      euro.create_date = euroData.create_date

      pound.value = poundData.bid
      pound.create_date = poundData.create_date

      // Verifica se houve mudança no valor do Euro para iniciar ou parar a animação
      if (euro.value !== 0) {
        isFlashingEuro.value = true
        setTimeout(() => {
          isFlashingEuro.value = false
        }, 3000)
      }

      // Verifica se houve mudança no valor da Libra para iniciar ou parar a animação
      if (pound.value !== 0) {
        isFlashingPound.value = true
        setTimeout(() => {
          isFlashingPound.value = false
        }, 3000)
      }
    }))
    .catch(error => {
      console.error("Erro ao buscar dados da API:", error)
    })
}

const formattedDateEuro = computed(() => {
  if (euro.create_date) {
    return format(new Date(euro.create_date), "dd/MM/yyyy HH:mm:ss");
  }
  return "";
});

const formattedDatePound = computed(() => {
  if (pound.create_date) {
    return format(new Date(pound.create_date), "dd/MM/yyyy HH:mm:ss");
  }
  return "";
});

onMounted(() => {
  fetchData()
  setInterval(fetchData, 1000)
})
</script>
