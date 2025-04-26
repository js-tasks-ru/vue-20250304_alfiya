import { defineComponent } from 'vue'
import './WeatherApp.css'
import WeatherList from './WeatherList.js'

export default defineComponent({
  name: 'WeatherApp',
  components: { WeatherList },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <WeatherList/>
    </div>
  `,
})
