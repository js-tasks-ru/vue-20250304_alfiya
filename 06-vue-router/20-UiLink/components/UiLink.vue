<script setup lang="ts">
// Вместо <span> должен быть <RouterLink> или <a>
// Используйте динамический компонент <component :is="...">
import { type RouteLocationRaw, RouterLink } from 'vue-router'
import { computed } from 'vue'

const props = defineProps<{
  to?: RouteLocationRaw;
  href?: string;
}>()

const linkComponent = {
  routerLink: RouterLink,
  htmlLink: 'a'
}

const componentType = computed(() => {
  return props.to ? 'routerLink' : 'htmlLink';
})

const componentProps = computed(() => {
  return props.to ? { to: props.to } : { href: props.href }
})
</script>

<template>
  <component :is="linkComponent[componentType]" class="link" v-bind="componentProps">
    <slot />
  </component>
</template>

<style scoped>
.link {
  color: var(--color-text-primary);
}

.link:hover {
  text-decoration: underline;
}
</style>
