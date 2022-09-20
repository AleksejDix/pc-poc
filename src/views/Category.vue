<template>
  <div class="h-full absolute left-0 top-0 right-0 bottom-0 overflow-hidden">
    <router-view v-slot="{ Component }">
      <transition :name="propertyTransition">
        <component :is="Component" :class="$route.name" />
      </transition>
    </router-view>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import { useRoute } from "vue-router";

export default {
  setup() {
    const propertyTransition = ref("slidedown");

    const route = useRoute("");

    watch(
      () => route.path,
      (to, from) => {
        const toDepth = to.split("/").length;
        const fromDepth = from.split("/").length;

        console.log(toDepth, fromDepth);

        propertyTransition.value =
          toDepth < fromDepth ? "slideup" : "slidedown";
      }
    );

    return {
      propertyTransition,
    };
  },
};
</script>

<style>
.slideup-enter-active,
.slideup-leave-active,
.slidedown-enter-active,
.slidedown-leave-active {
  transition: transform 500ms linear;
}

.slideup-enter-from.category {
  transform: translate3d(0, -100%, 0);
}

/* this one is active closing*/
.slideup-enter-to.category {
  transform: translate3d(0, 0, 0);
}

.slideup-leave-from.category {
  transform: translate3d(0, 0, 0);
}

.slideup-leave-to.category {
  transform: translate3d(0, -100%, 0);
}

.slideup-enter-from.finding-category-propertyid {
  transform: translate3d(0, 100%, 0);
}
.slideup-enter-to.finding-category-propertyid {
  transform: translate3d(0, 0, 0);
}

.slideup-leave-from.finding-category-propertyid {
  transform: translate3d(0, 0, 0);
}

/* this one is active closing */
.slideup-leave-to.finding-category-propertyid {
  transform: translate3d(0, 100%, 0);
}

.slidedown-leave-from.category {
  transform: translate3d(0, 0, 0);
}

.slidedown-leave-to.category {
  transform: translate3d(0, -100%, 0);
}

.slidedown-enter-from.finding-category-propertyid {
  transform: translate3d(0, 100%, 0);
}
.slidedown-enter-to.finding-category-propertyid {
  transform: translate3d(0, 0, 0);
}
</style>
