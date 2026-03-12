<template>
  <div class="app">
    <h1 class="title">Calculadora de Gorjeta e Divisão</h1>

    <div class="layout">
      <Entradas 
        @calculate="calculate" 
        :bill="bill" 
        :tip="tip" 
        :people="people"
        @update:bill="bill = $event"
        @update:tip="tip = $event"
        @update:people="people = $event"
      />
      <Resultados :total="total" :tipValue="tipValue" :perPerson="perPerson" :message="message" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Entradas from './components/EntradaComponent.vue'
import Resultados from './components/ResultadosComponent.vue'
import { useCalculate } from './composables/useCalculate.js'

const bill = ref('')
const tip = ref('')
const people = ref('')

const {
  total,
  tipValue,
  perPerson,
  message,
  calculate
} = useCalculate()
</script>

<style scoped>
.app {
    background-color: rgb(70, 70, 175);
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.title {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 30px;
}
.layout {
      background-color: antiquewhite;
  width: 100%;
  max-width: 420px;
  min-height: 40vh;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 16px;


  animation: fadeUp 0.6s ease;
}


@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(25px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
