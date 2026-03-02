<template>
  <div class="app">
    <h1 class="title">Calculadora de Gorjeta e Divisão</h1>

    <div class="layout">
      <div class="panel">
        <h2>Entradas</h2>
        <input v-model="bill" class="input" placeholder="Valor" />
        <input v-model="tip" class="input" placeholder="Porcentagem" />
        <input v-model="people" class="input" placeholder="Pessoas" />
        <button class="small-btn" @click="calculate(bill, tip, people)">
          Calcular
        </button>
      </div>

      <div class="panel">
        <h2>Resultado</h2>
        <div class="result">Total: {{ total }}</div>
        <div class="result">Gorjeta: {{ tipValue }}</div>
        <div class="result">Por pessoa: {{ perPerson }}</div>
        <div class="result">{{ message }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useCalculate } from './composables/calculateComposable'

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
    .app{
        background-color: rgb(70, 70, 175);
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction:column;
    }
    .title{
        color: white;
    }
    .layout {
  background-color: antiquewhite;
  width: 100%;
  max-width: 420px;
  min-height: 40vh;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  padding: 16px;
}
    .panel {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}


.panel h2{
  font-size: 1rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 6px;
}


.input{
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  background-color: #ffffff;
  font-size: 0.95rem;
  color: #111827;
  outline: none;
}

.input::placeholder{
  color: #6b7280;
}

.input:focus{
  border-color: #2563eb;
  box-shadow: 0 0 0 1px #2563eb;
}

.small-btn{
  margin-top: 10px;
  padding: 10px;
  border: none;
  background-color: #2563eb;
  color: #ffffff;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: 0.15s ease;
}

.small-btn:hover{
  background-color: #1d4ed8;
}

.small-btn:active{
  transform: scale(0.98);
}

</style>
