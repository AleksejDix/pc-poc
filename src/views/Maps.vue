<template>
  <div class="maps opacity-50">
    <h1>map</h1>
  </div>
</template>

<script>
import { onMounted } from 'vue';
export default {
  setup() {
    onMounted(() => {
      console.log('render')
    })
  },
}
</script>
<style>
.maps {
  background: black;
  height: 100%;
  position: absolute;
  width: 50%;
  right: 0;
  bottom: 0;
  top: 0;
  
}
</style>