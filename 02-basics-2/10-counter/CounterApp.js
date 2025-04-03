import { defineComponent, ref } from 'vue'

const MAX_COUNT = 5;

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const count = ref(0);

    const increment = () => {
      count.value++
    }

    const decrement = () => {
      count.value--
    }

    return {
      count,
      MAX_COUNT,
      increment,
      decrement
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled="count === 0"
        @click="decrement"
      >➖</button>

      <span class="count" data-testid="count">{{ count }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled="count >= MAX_COUNT"
        @click="increment"
      >➕</button>
    </div>
  `,
})
