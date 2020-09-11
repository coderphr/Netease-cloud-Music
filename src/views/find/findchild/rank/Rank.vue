<template>
  <div class="rank">
    <left-nav :lists = toplist />
    <rank-right></rank-right>
    <vue-audio></vue-audio>
  </div>
</template>

<script>
import {getRankToplist, Toplist} from '@/network/rank'
import leftNav from './RankLeftNav'
import RankRight from './RankRight'
import VueAudio from '@/components/Audio'
export default {
  name:'rank',
  components:{
    leftNav,
    RankRight,
    VueAudio
  },
  data() {
    return {
      toplist:[],
    }
  },
  mounted() {
    this.getToplist()
  },
  methods:{
    //获取左侧分类
    getToplist() {
      getRankToplist().then(data=> {
        data.list.forEach(item => {
          this.toplist.push(new Toplist(item.id,item.name,item.coverImgUrl,item.updateFrequency))
        })
      })
    }
  }
}
</script>

<style scoped>
  .rank {
    width:100%;
    display: flex;
    justify-content: center;
    background-color: #f5f5f5;
  }
</style>