import { createRouter, createWebHistory, RouterView } from "vue-router";
import { h } from "vue";
import Finding from "../views/Finding.vue";
import Maps from "../views/Maps.vue";
import Property from "../views/Property.vue";

import Category from "../views/Category.vue";
import Root from "../views/Root.vue";
import FeedOrMatching from "../views/FeedOrMatching.vue";

const EmptyComponent = () => h(RouterView);
EmptyComponent.displayName = "EmptyComponent";

const routes = [
  {
    path: "/",
    name: "root",
    component: Root,
  },
  {
    path: "/finding",
    components: {
      default: Finding,
      maps: Maps,
    },
    children: [
      {
        path: "",
        redirect: "/finding/matching",
      },
      {
        path: ":category",
        component: Category,
        children: [
          {
            path: "",
            name: "category",
            component: FeedOrMatching,
          },
          {
            path: ":propertyId",
            name: "finding-category-propertyid",
            component: Property,
          },
        ],
      },
      {
        path: ":propertyId",
        name: "finding-propertyid",
        component: Property,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log("direct-link", from.name === undefined, to);

  if (to.name === "finding-category-propertyid" && from.name === undefined) {
    next({
      name: "finding-propertyid",
      params: {
        propertyId: to.params.propertyId,
      },
    });
  } else {
    next();
  }
});

export default router;
