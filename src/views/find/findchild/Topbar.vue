<template>
  <div class="topbar">
    <ul>
      <router-link
        :to="'/find'+item.path"
        tag="li"
        :class="{active:$route.path.indexOf(item.path) != -1}"
        v-for="(item,index) in titles"
        :key="index"
      >
        <a href="javascript:;">{{item.title}}</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Topbar",
  data() {
    return {
      titles: [
        { title: "推荐", path: "/recomend" },
        { title: "排行榜", path: "/rank"},
        { title: "歌单", path: "/songs" },
        { title: "主播电台", path: "/radio" },
        { title: "歌手", path: "/singers" },
        { title: "新碟上架", path: "/news" }
      ],
      current: 0
    };
  }
};
</script>

<style scoped>
.topbar {
  float: left;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 35px;
  line-height: 20px;
  font-size: 10px;
  background-color: #c20c0c;
}
ul li {
  position: relative;
  float: left;
  margin: 0 18px;
  width: 84px;
  height: 34px;
}
ul li a {
  display: inline-block;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 50px;
  height: 20px;
  line-height: 22px;
  text-align: center;
  color: #fff;
}
.active a {
  border-radius: 30px;
  background-color: #9b0909;
  z-index: 99;
}
</style>