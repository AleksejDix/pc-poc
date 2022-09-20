import { createRouter, createWebHistory, RouterView } from "vue-router";
import { h } from "vue";
import Finding from "../views/Finding.vue";
import Maps from "../views/Maps.vue";
import Property from "../views/Property.vue";
import Matching from "../views/Matching.vue";
import Favorites from "../views/Favorites.vue";
import Category from "../views/Category.vue";
import Root from "../views/Root.vue";

const EmptyComponent = () => h(RouterView);
EmptyComponent.displayName = "EmptyComponent";

const routes = [
  {
    path: "/",
    name: "root",
    component: Root
  },
  {
    path: "/finding",
    components: {
      default: Finding,
      maps: Maps
    },
    children: [
      {
        path: "",
        redirect: "/finding/matching"
      },
      {
        path: ":category",
        component: Category,
        children: [
          {
            path: "",
            name: "category",
            components: {
              matching: Matching,
              favorites: Favorites
            }
          },
          {
            path: ":propertyId",
            name: "property-id",
            component: Property
          }
        ]
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
