<template>
  <div id="app">
    <tabbar @titleClick="titleClick"></tabbar>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
import Tabbar from "@/components/tabbar";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Tabbar,
  },
  methods: {
    titleClick(path) {
      this.$router.push(path);
    },
  },
};
</script>
<style>
</style>
