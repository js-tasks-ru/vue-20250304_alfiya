import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    const a = ref(0)
    const b = ref(0)
    const operator = ref('sum')

    function calculate() {
      switch (operator.value) {
        case 'sum':
          return a.value + b.value
        case 'subtract':
          return a.value - b.value
        case 'multiply':
          return a.value * b.value
        case 'divide':
          return a.value / b.value
      }
    }

    const result = computed(() => {
      return calculate()
    })

    return {
      a,
      b,
      operator,
      result,
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="a" />

      <div class="calculator__operators">
        <label><input type="radio" name="operator" value="sum" v-model="operator"/>➕</label>
        <label><input type="radio" name="operator" value="subtract" v-model="operator"/>➖</label>
        <label><input type="radio" name="operator" value="multiply" v-model="operator"/>✖</label>
        <label><input type="radio" name="operator" value="divide" v-model="operator"/>➗</label>
      </div>

      <input type="number" aria-label="Second operand" v-model="b" />

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
