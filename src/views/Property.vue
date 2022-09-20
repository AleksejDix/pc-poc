<template>
  <div class="absolute inset-0 h-full">
    Property
    <router-link :to="`/finding/${$route.params.category}`">back</router-link>
    {{`/finding/${$route.params.category}`}}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    
  }
});
</script>

<style>
.lime {
  height: 100%;
  /* position: absolute; */
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
</style>
