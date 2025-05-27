<script setup lang="ts">
import { ref } from 'vue'
import { UiContainer } from '@shgk/vue-course-ui'
import UiSelect from './UiSelect.vue'

// type SelectValue = '' | '1' | '2' | '3'
import { SelectValue } from './types.ts'

const options = [
  { value: SelectValue.Empty, text: 'Выберите значение…' } ,
  { value: SelectValue.One, text: 'Один' },
  { value: SelectValue.Two, text: 'Два' },
  { value: SelectValue.Three, text: 'Три' },
]

const selected = ref<SelectValue>(SelectValue.Empty)

function handleUpdate(newValue: SelectValue) {
  console.info(newValue)
}
</script>

<template>
  <UiContainer>
    <p>Выбрано: {{ selected }}</p>
    <!-- Если тип компонента будет некорректным, использование handleUpdate приведёт здесь к ошибке TS -->
    <UiSelect v-model="selected" :options @update:model-value="handleUpdate" />
  </UiContainer>
</template>
