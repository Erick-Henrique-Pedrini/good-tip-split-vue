// /composables/calculateComposable.js
import { ref } from 'vue'

export function useCalculate() {
  const total = ref(0)
  const tipValue = ref(0)
  const perPerson = ref(0)
  const message = ref('')

  function calculate(bill, tip, people) {
    const billValue = Number(bill)
    const tipPercent = Number(tip)
    const peopleCount = Number(people)

    if (!billValue || !tipPercent || !peopleCount) {
      message.value = 'Preencha todos os campos corretamente.'
      total.value = 0
      tipValue.value = 0
      perPerson.value = 0
      return
    }

    tipValue.value = (billValue * tipPercent) / 100
    total.value = billValue + tipValue.value
    perPerson.value = total.value / peopleCount
    message.value = 'Cálculo realizado com sucesso ✅'
  }

  return {
    total,
    tipValue,
    perPerson,
    message,
    calculate
  }
}