<template>
  <component :is="$route.params.category"></component>
</template>

<script>
import Matching from "../views/Matching.vue";
import Favorites from "../views/Favorites.vue";
export default {
  components: {
    matching: Matching,
    favorites: Favorites,
  },
};
</script>
