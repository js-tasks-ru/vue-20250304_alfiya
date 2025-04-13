import { ref, defineComponent, onMounted, onUnmounted } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref();
    let intervalId;

    const timeFormatter = new Intl.DateTimeFormat(
      navigator.language,
      {
        timeStyle: "medium"
      }
    )

    const setCurrentTime = () => {
      currentTime.value = timeFormatter.format(new Date());
    }

    onMounted(() => {
      setCurrentTime();
      intervalId = setInterval(setCurrentTime, 1000)
    })

    onUnmounted(() => {
      clearInterval(intervalId)
    })

    return {
      currentTime
    }
  },

  template: `<div class="clock">{{ currentTime }}</div>`,
})
