<template>
  <div class="finding flex flex-col absolute inset-0 w-1/2">
    <nav class="nav">
      <router-link active-class="active" class="text-red-500" to="/finding/matching">matching</router-link>
      <router-link active-class="active" class="text-red-500" to="/finding/favorites">favorites</router-link>
    </nav>
    <div class="relative flex-grow">
      <router-view></router-view>
    </div>
  </div>
</template>



