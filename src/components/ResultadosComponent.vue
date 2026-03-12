<template>
  <div class="panel">
    <h2>Resultado</h2>
   <div class="result">Total: {{ total?.toFixed(2) }}</div>
<div class="result">Gorjeta: {{ tipValue?.toFixed(2) }}</div>
<div class="result">Por pessoa: {{ perPerson?.toFixed(2) }}</div>
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
  border-radius: 12px;
  padding: 18px;
  display: flex;
  flex-direction: column;
  gap: 12px;

  box-shadow: 0 6px 18px rgba(0,0,0,0.1);
  animation: fadeUp 0.4s ease;
}

h2 {
  font-size: 1.2rem;
  font-weight: 600;
  color: #111827;
  margin-bottom: 6px;
  border-bottom: 1px solid #e5e7eb;
  padding-bottom: 6px;
}

.result {
  background: #f9fafb;
  padding: 10px 12px;
  border-radius: 8px;
  font-size: 0.95rem;
  color: #1f2937;

  display: flex;
  justify-content: space-between;
  align-items: center;

  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.result:hover {
  transform: translateX(3px);
  box-shadow: 0 3px 8px rgba(0,0,0,0.08);
}


.result:last-child {
  font-weight: 600;
}

.error {
  color: #dc2626;
}


@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}


@media (max-width: 480px) {

  .panel {
    padding: 14px;
  }

  h2 {
    font-size: 1.05rem;
  }

  .result {
    font-size: 0.9rem;
    padding: 9px;
  }

}
</style>
