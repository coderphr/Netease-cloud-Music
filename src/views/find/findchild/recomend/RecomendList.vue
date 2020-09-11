<template>
  <div class="recomend-list">
    <div class="hot-nav">
      <a class="hot-title" href="javascript:;">热门推荐</a>
      <ul>
        <li v-for="(item,index) in titles" :key="index"><a href="javascript:;">{{item}}</a></li>
      </ul>
        <a  class="hot-more-a" href="javascript:;">更多</a>
        <div class="hot-more"></div>
    </div>
    <div class="hot-list">
      <div class="list-item" v-for="item in lists" :key="item.id">
        <img v-lazy="item.picUrl" alt="">
        <div class="list-name"><a href="javascript:;">{{item.name}}</a></div>
        <div class="list-mask">
          <span class="headset"></span>
          <div class="mask-count">{{item.playCount | formate}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hotlist",
  props: {
    title: {
      type: Array,
      default() {
        return [];
      }
    },
    lists:{
      type:Array,
      default() {
        return []
      }
    }
  },
  mounted() {
  },
  computed: {
    titles() {
      return this.title.splice(0, 5);
    }
  },
  filters:{
    formate(val) {
     return val.toString().substring(0,val.toString().length-4) + '万'
    }
  }
};
</script>

<style scoped>
.recomend-list {
  margin: 10px auto;
  width: 70%;
}
.hot-nav {
  position: relative;
  width: 100%;
  height: 35px;
  border-bottom: 4px solid #c10d0c;
  background: url(~@/assets/img/index.png) no-repeat;
  background-position: -226px -152px;
}
.hot-title,
ul {
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
  font-size: 22px;
  color: #333333;
}
ul {
  top: 20%;
  left: 90px;
  font-size: 12px;
}
ul li {
  float: left;
  margin: 0 10px;
}
ul li a{
  color:#808080
}
ul li:after {
  display: inline-block;
  content: "";
  margin-left: 16px;
  margin-top: 5px;
  width: 1px;
  height: 8px;
  background-color: #918f8f;
}
.hot-more-a,.hot-more {
  float: right; 
}
.hot-more {
  position: absolute;
  right: 0;
  width: 30px;
  height: 23px;
  background: url(~@/assets/img/index.png);
  background-position: 17px 235px;
}
.hot-more-a {
  position: absolute;
  top: 50%;
  right:15px;
  transform: translateY(-50%);
  font-size: 11px;
  color:#808080;
}
.hot-more-a:hover,ul li a:hover, .list-name a:hover{
  text-decoration: underline;
}
.hot-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.list-item {
  position: relative;
  display: flex;
  width: 25%;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
.list-item img {
  width: 65%;
  margin-top: 10px;
  border-radius:5% 5% 0 0;
}
.list-name {
  margin-top: 5px;
  width: 67%;
}
.list-name a{
  color: #000000;}
.list-mask {
  position: absolute;
  top: 153px;
  width: 65%;
  height: 30px;
  line-height: 30px;
  background-color: rgba(000, 000, 000, .4);
}

.headset {
  position:absolute;
  top: 8px;
  left: 0;
  display: inline-block;
  width: 27px;
  height: 13px;
  background: url(~@/assets/img/iconall.png);
  background-position: 256px 1242px;
}
.mask-count {
  position: absolute;
  left: 25px;
  font-size: 11px;
  color: #f6f5f6;
}
</style>