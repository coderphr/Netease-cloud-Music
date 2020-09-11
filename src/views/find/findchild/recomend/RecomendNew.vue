<template>
  <div class="recomend-new">
    <div class="new-nav">
      <a class="new-title" href="javascript:;">新碟推荐</a>
        <a  class="new-more-a" href="javascript:;">更多</a>
        <div class="new-more"></div>
    </div>
    <el-carousel  indicator-position="none">
      <el-carousel-item v-for="(item,index) in offset-1" :key="index" class="new-carousel">
       <div class="new-img">
          <div class="new-item" v-for="(item, indey) in limits" :key="indey">
            <img  v-lazy="lists[(index+1)*(indey+1)].blurPicUrl" alt="">
            <p>{{lists[(index+1)* (indey+1)].name}}</p>
          </div>
       </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name:"RecomendNew",
  props:{
    lists:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      list:[],
      offset:5    
      }
  },
  mounted() {
  },
  computed: {
    limits() {
      return this.lists.length / this.offset
    }
  }
}
</script>

<style scoped>
.recomend-new {
  margin: 10px auto;
  width: 70%;
}
.new-nav {
  position: relative;
  width: 100%;
  height: 35px;
  border-bottom: 4px solid #c10d0c;
  background: url(~@/assets/img/index.png) no-repeat;
  background-position: -226px -152px;
}
.new-title{
  position: absolute;
  top: 50%;
  left: 30px;
  transform: translateY(-50%);
  font-size: 22px;
  color: #333333;
}
.new-more-a,.new-more {
  float: right; 
}
.new-more {
  position: absolute;
  right: 0;
  width: 30px;
  height: 23px;
  background: url(~@/assets/img/index.png);
  background-position: 17px 235px;
}
.new-more-a {
  position: absolute;
  top: 50%;
  right:15px;
  transform: translateY(-50%);
  font-size: 11px;
  color:#808080;
}
.new-more-a:hover,ul li a:hover, .list-name a:hover{
  text-decoration: underline;
}
.new-carousel{
  width: 100%;
  height: 100%;
}
.new-carousel .new-img {
  display: flex;
  justify-content: space-around;
  align-items:center;
  position: absolute;
  top: 50%;
  left:50%;
  transform: translate(-50%,-50%);
  width: 80%;
  height: 80%;
}
.new-item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.new-carousel .new-img .new-item img {
  width:80%;
  height:100px;
  border-radius: 5%;
}
.new-carousel .new-img .new-item p {
  display: inlin-block;
  width: 80%;
  height: 60px;
}
</style>