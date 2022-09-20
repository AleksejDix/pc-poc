<template>
  <section ref="content" class="h-full blue absolute inset-0 overflow-scroll">
    <h1>Feed Like Dislike</h1>
    <ul class="h-full">
      <li>
        <button @click="navigate">{{ href }}</button>
        <router-link
          active-class="active"
          class="text-red-500 block border"
          :to="to"
          >1</router-link
        >
      </li>
    </ul>
    <div>
      SCROLL AREA
    </div>
  </section>
</template>

<script>
import { useLink } from "vue-router";

import { onMounted, onBeforeUnmount, ref } from "vue";
export default {
  setup() {
    const to = ref({
      name: "finding-category-propertyid",
      params: {
        propertyId: 1,
      },
    });

    const content = ref();

    const { navigate, href } = useLink({ to: to.value });

    onMounted(() => {
      content.value.addEventListener("scroll", navigate);
    });
    onBeforeUnmount(() => {
      content.value.removeEventListener("scroll", navigate);
    });

    return {
      to,
      navigate,
      href,
      content,
    };
  },
};
</script>

<style scoped>
.blue {
  /* position: absolute; */
  outline: 10px solid blue;
  outline-offset: -10px;
  padding: 10px;
}
</style>
