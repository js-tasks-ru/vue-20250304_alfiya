import { defineComponent, createApp } from 'vue'

const App = defineComponent({
  name: 'App',
  setup() {
    return {
      data: {
        apples: 5,
        pears: 3,
      },

      date: new Date().toLocaleDateString(navigator.language, { dateStyle: 'long' }),
    }
  },

  template: `<div>
    Сегодня {{ date }}
  </div>`
})

const app = createApp(App)
const vm = app.mount('#app')

window.vm = vm
