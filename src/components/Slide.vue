<template>
  <Transition :name="transitionName">
    <slot></slot>
  </Transition>
</template>

<script>
import { watch, ref} from 'vue'
import { useRoute} from 'vue-router'

export default {
  setup() {

    const transitionName = ref('slide-enter')

    const route = useRoute()

    watch(() => route.value, (to, from) => {
      console.log(to, from, transitionName.value)
    })

    return {
      transitionName
    }
  }
  // watch: {
  //   $route(to, from) {
  //     const toDepth = to.path.split('/').length
  //     const fromDepth = from.path.split('/').length
  //     this.transitionName = toDepth < fromDepth ? 'slide-enter' : 'slide-leave'
  //   },
  // },
}
</script>

<style>
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