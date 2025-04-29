import { computed, defineComponent } from 'vue'
import './WeatherApp.css'
import WeatherDetailsItem from './WeatherDetailsItem.js'

export default defineComponent({
  name: 'WeatherDetails',
  components: { WeatherDetailsItem },

  props: {
    humidity: {
      type: Number,
      required: true,
    },

    pressure: {
      type: Number,
      required: true,
    },

    clouds: {
      type: Number,
      required: true,
    },

    wind: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const pressureString = computed(() => Math.round(props.pressure * 0.75))

    return {
      pressureString,
    }
  },

  template: `
  <div class="weather-details">
    <WeatherDetailsItem label="Давление, мм рт. ст." :value="pressureString" />
    <WeatherDetailsItem label="Влажность, %" :value="humidity"/>
    <WeatherDetailsItem label="Облачность, %" :value="clouds"/>
    <WeatherDetailsItem label="Ветер, м/с" :value="wind" />
  </div>
  `,
})
