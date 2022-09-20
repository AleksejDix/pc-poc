<template>
  <div class="h-full absolute left-0 top-0 right-0 bottom-0 overflow-hidden">

    <router-view :name="$route.params.category" />
    <router-view >

    </router-view>

  </div>
</template>

<script>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  setup() {

    const tName = ref('slideup')
    const route = useRoute()

    watch(() => route.path, (to, from) => {
      const toDepth = to.split('/').length
      const fromDepth = from.split('/').length
      tName.value = toDepth < fromDepth ? 'slideup' : 'slidedown'
    })

    return {
      tName
    }

  }
  // watch: {
  //   $route(to, from) {
  //     const fromDepth = from.path.split('/').length
  //     this.transitionName = toDepth < fromDepth ? 'slideup' : 'slidedown'
  //   },
  // },
}
</script>

<style>


.matching-enter-active,
.matching-leave-active {
  transition: transform 500ms linear;
}
.matching-enter-from {
  transform: translate3d(-100%, 0, 0);
}
.matching-enter-to {
  transform: translate3d(0, 0, 0);
}

.matching-leave-to {
  transform: translate3d(100%, 0, 0);
}


.favorites-enter-active,
.favorites-leave-active {
  transition: transform 500ms linear;
}
.favorites-enter-from {
  transform: translate3d(100%, 0, 0);
}
.favorites-enter-to {
  transform: translate3d(0, 0, 0);
}
.favorites-leave-from {
  transform: translate3d(0, 0, 0);
}
.favorites-leave-to {
  transform: translate3d(-100%, 0, 0);
}

.slideup-enter-active,
.slideup-leave-active {
  transition: transform 5s linear;
}
.slideup-enter-from {
  transform: translate3d(0, 100%, 0);
}
.slideup-leave-to {
  transform: translate3d(0, -100%, 0);
}


.slidedown-enter-active,
.slidedown-leave-active {
  transition: transform 5s linear;
}
.slidedown-enter-from {
  transform: translate3d(0, -100%, 0);
}
.slidedown-leave-to {
  transform: translate3d(0, 100%, 0);
}
</style>