import { computed, defineComponent, ref } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    count: {
      type: Number,
      required: true,
    },

    min: {
      type: Number,
      required: false,
      default: 0,
    },

    max: {
      type: Number,
      required: false,
      default: Infinity,
    },
  },

  emits: ['update:count'],

  // можно ли решить задачу, используя ref внутри UiCounter и обновляя только его?
  // setup(props, { emit }) {
  //   const countCurrent = ref(props.count);
  //
  //   const increment = () => {
  //     countCurrent.value++;
  //     emit('update:count', countCurrent.value);
  //   }
  //
  //   const decrement = () => {
  //     countCurrent.value--
  //     emit('update:count', countCurrent.value);
  //   }
  //
  //   const isDisabledDecrement = computed(() => {
  //     return props.min === countCurrent.value
  //   })
  //
  //   const isDisabledIncrement = computed(() => {
  //     return props.max === countCurrent.value
  //   })
  //
  //   return {
  //     increment,
  //     decrement,
  //     isDisabledIncrement,
  //     isDisabledDecrement,
  //     countCurrent
  //   }
  // },

  setup({ count, min, max }, { emit }) {
    const increment = () => {
      emit('update:count', count + 1)
    }

    const decrement = () => {
      emit('update:count', count - 1)
    }

    const isDisabledDecrement = computed(() => {
      return min >= count
    })

    const isDisabledIncrement = computed(() => {
      return max <= count
    })

    return {
      increment,
      decrement,
      isDisabledIncrement,
      isDisabledDecrement,
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled="isDisabledDecrement" @click="decrement">➖</UiButton>
      <span class="count" data-testid="count">{{ count }}</span>
      <UiButton aria-label="Increment" :disabled="isDisabledIncrement" @click="increment">➕</UiButton>
    </div>
  `,
})
