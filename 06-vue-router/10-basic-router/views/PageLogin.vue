<script setup lang="ts">
import { UiButton, UiFormGroup, UiInput } from '@shgk/vue-course-ui'
import { ref } from 'vue'
import MeetupsAuthForm from '../components/MeetupsAuthForm.vue'
import LayoutAuth from '../components/LayoutAuth.vue'
import { login } from '../api.ts'
import { useRouter } from 'vue-router'
import { RouterTypes } from '../types.ts'

const props = defineProps<{
  from: string
}>()

const email = ref('demo@email')
const password = ref('password')
const router = useRouter()

async function onSubmit() {
  try {
    await login(email.value, password.value)
    // Авторизация прошла успешно
    if(props.from) {
      await router.push(props.from)
    } else {
      await router.push('/')
    }
  } catch (error) {
    alert((error as Error).message)
  }
}
</script>

<template>
  <LayoutAuth title="Вход">
    <MeetupsAuthForm @submit="onSubmit">
      <UiFormGroup label="Email">
        <UiInput v-model="email" name="email" type="email" placeholder="demo@email" large required />
      </UiFormGroup>

      <UiFormGroup label="Пароль">
        <UiInput v-model="password" name="password" type="password" placeholder="password" large required />
      </UiFormGroup>

      <template #submit>
        <UiButton kind="primary" type="submit" wide size="large">Войти</UiButton>
      </template>

      <template #append>
        Нет аккаунта?
        <RouterLink :to="`/${RouterTypes.Register}`">Зарегистрируйтесь</RouterLink>
      </template>
    </MeetupsAuthForm>
  </LayoutAuth>
</template>
