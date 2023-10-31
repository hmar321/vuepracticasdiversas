<template>
  <MenuComponent />
  <router-view></router-view>
</template>

<script>
import MenuComponent from "./components/Menu.vue";
export default {
  name: "App",
  components: {
    MenuComponent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
