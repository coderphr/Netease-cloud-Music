<template>
  <div class="recomend">
     <swiper :swiperList = swiperList />
     <recomend-list :title = hotListTitle :lists = hotLists />
  </div>
</template>

<script>
//导入方法
import {getFindSwiper, getFindHot, getRecomend} from '@/network/find'
//导入组件
import RecomendList from './RecomendList'
import Swiper from '../Swiper'
export default {
  name:'Recomend',
  data() {
    return {
      swiperList : [],
      hotListTitle:[],
      hotLists:[]
    }
  },
  components:{
    Swiper,
    RecomendList
  },
  mounted() {
    this.getSwiper()
    this.getFindHot()
    this.getRecomend()
  },
  methods:{
    //获取轮播图信息
     getSwiper() {
      getFindSwiper().then(data => {
        this.swiperList = data.banners;
      })
    },
    //获取推荐title
    getFindHot() {
      getFindHot().then(data => {
          data.tags.forEach(item => {
           this.hotListTitle.push(item.name)
          })
        })
    },
    //获取推荐歌单
    getRecomend() {
      getRecomend().then(data => {
        console.log(data)
        this.hotLists = data.result
      })
    }
  }
}
</script>

<style scoped>
</style>