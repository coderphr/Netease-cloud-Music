<template>
  <div class="recomend">
     <swiper :swiperList = swiperList />
     <recomend-list :title = hotListTitle :lists = hotLists />
     <recomend-new :lists = reNews />
  </div>
</template>

<script>
//导入方法
import {getFindSwiper, getFindHot, getRecomend,getRecomendNew} from '@/network/find'
//导入组件
import RecomendList from './RecomendList'
import RecomendNew from './RecomendNew'
import Swiper from '../Swiper'
export default {
  name:'Recomend',
  data() {
    return {
      swiperList : [],
      hotListTitle:[],
      hotLists:[],
      reNews:[]
    }
  },
  components:{
    Swiper,
    RecomendList,
    RecomendNew
  },
  mounted() {
    this.getSwiper()
    this.getFindHot()
    this.getRecomend()
    this.getRecomendNew()
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
        this.hotLists = data.result
      })
    },
    //获取新歌推荐
    getRecomendNew() {
      getRecomendNew().then(data=> {
        this.reNews = data.albums
      })
    }
  }
}
</script>

<style scoped>
</style>