<template>
  <div class="finding flex flex-col absolute inset-0 w-1/2">
    <nav class="nav">
      <router-link
        active-class="active"
        class="text-red-500"
        to="/finding/matching"
        >matching</router-link
      >
      <router-link
        active-class="active"
        class="text-red-500"
        to="/finding/favorites"
        >favorites</router-link
      >
      <router-link
        active-class="active"
        class="text-red-500"
        to="/finding/blindbig"
        >blindbid</router-link
      >
    </nav>

    <div class="relative flex-grow border border-red-500">
      <router-view v-slot="{ Component }">
        <Transition :name="$route.params.category ?? 'favorites'">
          <component :is="Component" :key="$route.params.category" />
        </Transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import Matching from "../views/Matching";

export default {
  components: {
    Matching,
  },
};
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
</style>
