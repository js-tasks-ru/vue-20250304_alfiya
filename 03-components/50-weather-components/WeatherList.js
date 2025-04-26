import { defineComponent } from 'vue'
import './WeatherApp.css'
import WeatherItem from './WeatherItem.js'
import { getWeatherData } from './weather.service.js'

export default defineComponent({
  name: 'WeatherList',
  components: { WeatherItem },

  setup() {
    const weatherDataList = getWeatherData()
    return {
      weatherDataList,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <WeatherItem
          v-for="weatherData in weatherDataList"
          :key="weatherData.geographic_name"
          :weather-data="weatherData"
        />
      </ul>
    </div>
  `,
})
