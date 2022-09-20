<template>
  <div class="absolute inset-0 h-full bg-green-500">
    Property {{ $route.params.propertyId }}
    <router-link
      v-if="$route.params.category"
      :to="`/finding/${$route.params.category}`"
      >back</router-link
    >
  </div>
</template>
