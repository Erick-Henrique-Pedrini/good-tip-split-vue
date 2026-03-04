<template>
  <div class="panel">
    <h2>Resultado</h2>
    <div class="result">Total: {{ total }}</div>
    <div class="result">Gorjeta: {{ tipValue }}</div>
    <div class="result">Por pessoa: {{ perPerson }}</div>
    <div class="result">{{ message }}</div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['total', 'tipValue', 'perPerson', 'message'])
</script>

<style scoped>
.panel {
  background-color: #ffffff;
  border: 1px solid #e5e7eb;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.result {
  font-size: 1rem;
  color: #1f2937;
}
</style>
