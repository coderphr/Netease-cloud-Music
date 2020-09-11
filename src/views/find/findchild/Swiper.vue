<template>
   <el-carousel height="300px" class="siwper">
      <el-carousel-item v-for="(item,index) in swiperList" :key="index">
        <img :src="item.imageUrl" alt="">
      </el-carousel-item>
    </el-carousel>
</template>
<script>
export default {
  name:'Swiper',
  props:{
    swiperList:{
      type:Array,
      default() {
        return []
      }
    }
  }
}
</script>
<style scoped>
  .siwper {
    margin: 0 auto;
    width: 70%;
  }
  .siwper img {
    width: 100%;
    height:100%
  }
</style>