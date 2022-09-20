<template>
  <div class="h-full flex flex-col">
    <nav class="nav">
      <router-link exact-active-class="active" to="/">root</router-link>
      <router-link active-class="active" to="/finding">find</router-link>
    </nav>

    <div class="relative flex-grow">
      <router-view />
      <router-view name="maps" />
    </div>
  </div>
</template>

<style>
html,
body,
.h-full {
  height: 100%;
  padding: 0;
  margin: 0;
}
#app {
  padding: 0;
  margin: 0;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

.container {
  display: flex;
  flex: 1 0 auto;
  height: 100%;
}

.container > * {
  width: 50%;
  border: 10px solid red;
}

.nav {
  display: flex;
  position: sticky;
  top: 0;
  outline-offset: -2px;
  outline: 2px solid black;
}

.nav > * {
  padding: 10px;
}

.nav > * + * {
  margin-left: 10px;
}

.active {
  background: black;
  color: white;
}
</style>
