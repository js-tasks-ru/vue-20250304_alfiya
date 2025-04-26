import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

export default defineComponent({
  name: 'WeatherApp',

  setup() {
    function transformKelvinToCelsius(kelvin) {
      return (kelvin - 273.15).toFixed(1)
    }

    function transformPatoMmHg(pa) {
      return Math.round(pa * 0.75)
    }

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
      array: getWeatherData(),
      icons: WeatherConditionIcons,
      transformKelvinToCelsius,
      transformPatoMmHg,
      isNight,
    }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list">
        <li v-for="item in array" :class="['weather-card', { 'weather-card--night': isNight(item.current.sunrise, item.current.sunset, item.current.dt)}]">
          <div v-if="!!item.alert" class="weather-alert">
            <span class="weather-alert__icon">⚠️</span>
            <span class="weather-alert__description">{{ item.alert.sender_name}}: {{item.alert.description}}.</span>
          </div>
          <div>
            <h2 class="weather-card__name">
              {{item.geographic_name}}
            </h2>
            <div class="weather-card__time">
              {{item.current.dt}}
            </div>
          </div>
          <div class="weather-conditions">
            <div class="weather-conditions__icon" :title="item.current.weather.description">{{ icons[item.current.weather.id]}}</div>
            <div class="weather-conditions__temp">{{ transformKelvinToCelsius(item.current.temp) }} °C</div>
          </div>
          <div class="weather-details">
            <div class="weather-details__item">
              <div class="weather-details__item-label">Давление, мм рт. ст.</div>
              <div class="weather-details__item-value">{{ transformPatoMmHg(item.current.pressure) }}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Влажность, %</div>
              <div class="weather-details__item-value">{{item.current.humidity}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Облачность, %</div>
              <div class="weather-details__item-value">{{item.current.clouds}}</div>
            </div>
            <div class="weather-details__item">
              <div class="weather-details__item-label">Ветер, м/с</div>
              <div class="weather-details__item-value">{{item.current.wind_speed}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  `,
})
