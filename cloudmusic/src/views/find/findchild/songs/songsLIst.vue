<template>
  <div class="songs-list">
    <div class="top">
      <h2>全部</h2>
      <a href="javascript:;" @click="isShow = !isShow">选择分类</a>
      <div class="demo" v-show="isShow">
        <div class="nav-left">
          <div class="nav-item" v-for="(item,index) in category" :key="index">{{item}}</div>
        </div>
        <div class="nav-right">
           <ul v-for="(category,index) in cartList" :key="index">
             <li v-for="(item,indey) in category" :key="indey">{{item.name}}<span class="line">|</span></li>
           </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'SongsList',
  props:{
    category:{
      type:Object,
      default() {
        return {}
      }
    },
    cartList:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      isShow:false
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .songs-list {
    margin:  0 auto;
    width: 70%;
    height: 100%;
    background-color: #ffffff;
    border: 1px solid #d3d3d3;
  }
  .top h2{
    display: inline;
    font-weight: 400;
  }
  .top a {
    display: inline-block;
    width:90px;
    height: 30px;
    font-size: 14px;
    color: #0c73c2;
    text-align: center;
    line-height: 30px;
    border-radius: 5%;
    box-shadow:  -1px -1px 1px #c4c4c4 inset;
    border: 1px solid #e4e3e3;
    background-color: #fafafa;
  }
  .top a:hover {
    background-color: #ffffff;
  }
  .top .demo {
    position: fixed;
    top: 153px;
    height: 400px;
    width: 720px;
    display: flex;
    justify-content: start;
    background-color: #ffffff;
    box-shadow: 2px -2px 5px #c3c3c3;
    border-radius: 2%;
  }
  .top .demo::before {
    content: "";
    position: fixed;
    top:138px;
    left: 20%;
    width: 0px;
    height: 0px;
    border-left: 10px solid transparent;
    border-bottom: 15px solid #ffffff;
    border-right: 10px solid transparent;
    filter:drop-shadow(2px -2px 1px #c3c3c3);
  }
  .nav-left {
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-right:1px solid #e6e6e6;
  }
  .nav-item {
    text-align: center;
    font-weight: 600;
    font-size: 12px;
  }
  .nav-right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 12px;
  }
  .nav-right ul {
    display: flex;
    justify-content: start;
    flex-wrap: wrap;
    margin-left:-10px
  }
  .nav-right ul li {
    margin: 5px 0 ;
    color: #333;
  }
  .line {
    margin: 10px;
    color: #dad8df;
    line-height: 13px;
  }
</style>