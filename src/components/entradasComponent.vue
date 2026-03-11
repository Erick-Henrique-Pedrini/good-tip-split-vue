<template>
  <div class="panel">
    <h2>Entradas</h2>
    <input :value="bill" @input="$emit('update:bill', $event.target.value)" class="input" placeholder="Valor" />
    <input :value="tip" @input="$emit('update:tip', $event.target.value)" class="input" placeholder="Porcentagem" />
    <input :value="people" @input="$emit('update:people', $event.target.value)" class="input" placeholder="Pessoas" />
    <button class="large-btn" @click="$emit('calculate', bill, tip, people)">
      Calcular
    </button>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps(['bill', 'tip', 'people'])
const emit = defineEmits(['calculate', 'update:bill', 'update:tip', 'update:people'])
</script>

<style scoped>
.panel {
  background-color: #d6d8db;
  border: 1px solid #e5e7eb;
  padding: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  z-index: 1;
  border-radius: 10px;
}

.input {
    width: 100%;
  padding: 15px;
  border: 1px solid #d1d5db;
  background-color: #ffffff;
  font-size: 1rem;
  color: #111827;
  outline: none;
  border-radius: 20px;

  transition: all 0.25s ease;
}

.input:focus {
  border-color: #2563eb;
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.2);
  transform: scale(1.02);
}
.large-btn {
  width: 100%;
  padding: 14px;
}

.large-btn {
  margin-top: 10px;
  padding: 15px;
  background-color: #dbdada;
  color: #111827;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid #222222;
  border-radius: 15px;
  position: relative;
  overflow: hidden;  
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
}

.large-btn:active {
  color: #ffffff;
  background-color: #1d4ed8;
  border-color: #1d4ed8;
}

.large-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background-color: #1d4ed8;
  border-radius: inherit;
  z-index: -1; 
  opacity: 1;
  transition: width 0.5s ease, opacity 0.3s ease;  
}

.large-btn:hover::before {
  width: 100%; 
  opacity: 1;
}

@media (max-width: 480px) {

  .title {
    font-size: 1.2rem;
    text-align: center;
  }

  .layout {
    max-width: 100%;
    padding: 14px;
  }

  .panel {
    padding: 12px;
  }

  .input {
    padding: 12px;
    font-size: 0.95rem;
  }

  .large-btn {
    padding: 12px;
  }

}
</style>
