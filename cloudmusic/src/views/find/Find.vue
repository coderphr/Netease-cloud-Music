<template>
  <div class="find">
    <topbar />
    <router-view></router-view>
  </div>
</template>

<script>
//导入方法
//导入子组件
import Topbar from './findchild/Topbar'
export default {
  data() {
    return {
      playlistHot:[]
    }
  },
  components:{
    Topbar
  },
  mounted() {
   
  },
  methods:{
    //获取热门列表
   
  }
}
</script>

<style>

</style>