import { defineComponent } from 'vue'
import './WeatherApp.css'
import WeatherDetails from './WeatherDetails.js'
import WeatherConditions from './WeatherConditions.js'

export default defineComponent({
  name: 'WeatherItem',

  components: {
    WeatherDetails,
    WeatherConditions,
  },

  props: {
    weatherData: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    function getMilliSecondDate(string) {
      const date = new Date()
      date.setHours(string.slice(0, 2), string.slice(-2))
      return date
    }

    function isNight(sunrise, sunset, currentTime) {
      return (
        getMilliSecondDate(currentTime) < getMilliSecondDate(sunrise) ||
        getMilliSecondDate(sunset) < getMilliSecondDate(currentTime)
      )
    }

    return {
      isNight,
    }
  },

  template: `
    <li class="weather-card"
        :class="{ 'weather-card--night': isNight(weatherData.current.sunrise,
        weatherData.current.sunset,
        weatherData.current.dt)}">
          <div v-if="!!weatherData.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ weatherData.alert.sender_name}}: {{weatherData.alert.description}}.</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{ weatherData.geographic_name }}
            </h2>
            <div class="weather-card__time">
              {{ weatherData.current.dt }}
            </div>
          </div>
          <WeatherConditions
            :title="weatherData.current.weather.description"
            :id="weatherData.current.weather.id"
            :temperature="weatherData.current.temp" />
          <WeatherDetails
            :humidity="weatherData.current.humidity"
            :clouds="weatherData.current.clouds"
            :pressure="weatherData.current.pressure"
            :wind="weatherData.current.wind_speed" />
        </li>
  `,
})
