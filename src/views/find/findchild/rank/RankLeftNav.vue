<template>
  <div class="left-nav">
    <div class="top">
      <h4>云音乐特色榜</h4>
      <div class="toplist" v-for="(item,index) in defrent" :key="item.id" :class="{active:index == topIndex}" @click="changeIndex(index,item)">
        <img v-lazy="item.coverImgUrl" alt="">
        <div class="item-desc">
        {{item.name}}
        <span>{{item.updateFrequency}}</span>
      </div>
        </div>
    </div>
    <div class="wordAll">
      <h4>全球媒体榜</h4>
      <div class="wordAlllist" v-for="(item,index) in wordAll" :key="item.id" :class="{active:index == wordIndex}" @click="changeWordIndex(index,item)">
         <img v-lazy="item.coverImgUrl" alt="">
        <div class="item-desc">
        {{item.name}}
        <span>{{item.updateFrequency}}</span>
        </div>
      </div>
      <div class="wordAlllist"></div>
    </div>
  </div>
</template>

<script>
export default {
  name:'leftNav',
  props: {
    lists: {
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      defrent:[],
      wordAll:[],
      topIndex:0,
      wordIndex:null
    }
  },
  methods:{
    changeIndex(index,item) {
      this.topIndex = index
      this.wordIndex = null
      item.id ? this.$router.push({
        path:'/find/rank',
        query:{
          id:item.id
        }
      }) : this.$router.go(0)
      this.$bus.$emit('path-change',item.id)
    },
    changeWordIndex(index,item) {
      this.wordIndex = index
      this.topIndex = null
      item.id ? this.$router.push({
        path:'/find/rank',
        query:{
          id:item.id
        }
      }) : this.$router.go(0)
      this.$bus.$emit('path-change',item.id)
    }
  },
  watch:{
    lists(newVal,oldVal) {
      this.defrent = newVal.slice(0,4)
      this.wordAll = newVal.slice(4)
    }
  }
}
</script>

<style scoped>
  .left-nav {
    width: 18%;
    background-color: #f9f9f9;
    border: 1px solid #d3d3d3;
    border-collapse:collapse;
  }
  .left-nav h4 {
   font-weight: 500; 
   margin-left: 16px;
  }
 .wordAll {
    border:1px solid #d3d3d3;
    border-top: none;
  }
  .toplist,.wordAlllist {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    font-size: 14px;
    border: none;
    background-color: #f9f9f9;
  }
  .toplist:hover,.wordAlllist:hover {
    background-color: #f4f2f2;
  }
  .toplist img,.wordAll img {
    width: 50px;
    height: 50px;
    margin-right:10px;
    margin-left: -20px;
  }
  .toplist span,.wordAll span {
    font-size: 10px;
    color: #ad99ad;
    margin-top:22px;
  }
  .toplist .item-desc,.wordAll .item-desc {
    display: flex;
    flex-direction: column;
    justify-content:space-evenly;
    align-items:start;
    width: 57%;
  }
  .active {
    background-color: #e6e6e6;
  }
</style>