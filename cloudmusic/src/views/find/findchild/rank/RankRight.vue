<template>
  <div class="rank-right" :key="reload">
    <div class="top">
      <div class="img">
        <img :src="topArr.coverImgUrl" alt="">
      </div>
      <div class="desc">
        <h4>{{topArr.name}}</h4>
        <p>最近更新：{{topArr.updateTime | dateFormat }}</p>
        <div class="count">
          <a href="javascript:;">播放<span>十</span></a>
          <a href="javascript:;"><span> ({{topArr.subscribedCount}})</span></a>
          <a href="javascript:;"><span>转发  ({{topArr.shareCount}})</span></a>
          <a href="javascript:;">下载</a>
          <a href="javascript:;"><span>({{topArr.commentCount}})</span></a>
        </div>
      </div>
    </div>
    <rank-list :rankList = rightList></rank-list>
  </div>
</template>

<script>
import RankList from './RankList'
import {getTopId} from '@/network/rank'
export default {
  name:'RankRight',
  data() {
    return {
      id:'19723756',
      topArr:{},
      rightList:[],
      reload:0,
    }
  },
  components:{
    RankList
  },
  created() {
    //通过query获取id
    this.id = this.$route.query.id
    //非父子组件通信 使用配置好的事件总线 bus
    this.$bus.$on('path-change',(id) => {
      this.id = id
    })
  },
  methods:{
    getTopId(id) {
      getTopId(id).then(data => {
        this.topArr = {}
        this.topArr.id = data.playlist.id
        this.topArr.name = data.playlist.name;
        this.topArr.coverImgUrl=data.playlist.coverImgUrl;
        this.topArr.updateTime = data.playlist.updateTime
        this.topArr.playCount = data.playlist.playCount;
        this.topArr.subscribedCount = data.playlist.subscribedCount;
        this.topArr.shareCount = data.playlist.shareCount;
        this.topArr.commentCount = data.playlist.commentCount;
        this.rightList = data.playlist.tracks;
      })
    }
  },
  watch:{
   id:{
     handler(newVal,oldVal) {
       if(!newVal) {
        this.getTopId(oldVal)
       }else {
          this.getTopId(newVal)
       }

      ++this.reload
     },
     deep:true
   },
   rightList:{
     handler(newVal,oldVal) {
       newVal.forEach((item,index) => {
         item.Rnum = index +1 
       })
     }
   }
  },
  filters: {
    dateFormat(val) {
      if(val) {
        let t = new Date(val).toLocaleDateString()
        let time = t.split('/')
        time[1] > 10 ? time[1] = 0+time[1] : time[1]
        time[1] > 10 ? time[2] = 0+time[2] : time[2]
      return `${time[1]}月${time[2]}日`
      }
    }
  }
}
</script>

<style scoped>
  .rank-right {
    width: 50%;
    border-right: 1px solid #d3d3d3;
    border-bottom: 1px solid #d3d3d3;
    background-color: #ffffff;
  }
  .rank-right .top {
    margin: 40px 0;
    display: flex;
    justify-content:center;
    align-items: center;
  }
  .rank-right .top .img {
    padding: 5px;
    width: 155px;
    border: 1px solid #cccccc;
  }
  .rank-right .top .img img {
    width:155px;
    height: 160px;
  }
  .rank-right .desc {
    margin-left: 20px;
  }
  .rank-right .desc h4 {
    font-weight: 350;
    font-size: 23px;
  }
    .rank-right .desc p {
      font-size: 14px;
      color: #99a6c4;
    }
  .count a {
    position: relative;
    display: inline-block;
    width: 84px;
    height: 31px;
    color: #333333;
    background-color: #f2f2f2;
    line-height: 31px;
    text-align: center;
    font-weight: 500;
    font-size: 13px;
    margin-right: 5px;
    border-radius: 5%;
    border: 1px solid #c7c7c7;
    vertical-align: top;
    cursor: pointer;
  }
  .count a:nth-child(1) {
    color: #ffffff;
    background-color: #2c7dca;
  }
  .count a::before {
    display: inline-block;
    position: absolute;
    top:55%;
    left: 23%;
    transform: translate(-50%,-50%);
    content:'';
    width: 20px;
    height: 20px;
    background-image: url(~@/assets/img/iconall.png);
    background-repeat: no-repeat;
  }
  .count a:nth-child(3)::before {
    content:'';
    background-image: none;
  }
  .count a span {
    float: right;
    margin-right: 2px;
    margin-left: -12px;
  }
  .count a:nth-child(2)::before {
    width:20px;
    height: 20px;
    background-image: url(~@/assets/img/index.png);
    background-position: -295px -270px;
  }
</style>