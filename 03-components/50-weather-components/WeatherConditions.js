import { defineComponent, computed } from 'vue'
import { WeatherConditionIcons } from './weather.service.js'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherConditions',

  props: {
    title: {
      type: String,
      required: true,
    },

    id: {
      type: Number,
      required: true,
    },

    temperature: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const celsius = computed(() => `${(props.temperature - 273.15).toFixed(1)} °C`)

    return {
      icons: WeatherConditionIcons,
      celsius,
    }
  },

  template: `
    <div class="weather-conditions">
      <div class="weather-conditions__icon" :title="title">{{ icons[id] }}</div>
      <div class="weather-conditions__temp">{{ celsius }}</div>
    </div>
  `,
})
