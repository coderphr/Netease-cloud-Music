<template>
  <div class="btnbar">
    <ul>
      <li v-for="(item,index) in titles" :key="index" :class="{active:item.type == $route.query.type}" @click="btnClick(index,item.type)"><a href="javascript:;">{{item.title}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'btnbar',
  props:{
    titles: {
      type:Array,
      default(){
        return []
      }
    },
    keywords:{
      type:String
    }
  },
  data() {
    return {
    }
  },
  methods:{
    btnClick(id,type) {
      this.$router.push({
        path:'/find/searchall',
        query:{
          keywords:this.keywords,
          type
        }
      })
    }
  }
}
</script>
<style scoped>
.btnbar {
  position: absolute;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
}
.btnbar ul {
  display: flex;
  justify-content: center;
}
.btnbar ul li {
  display: inline-block;
  width: 110px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  background-color: #f7f7f7;
  border: 1px solid #cccccc;
  border-top: 2px solid #cccccc;
}
.btnbar ul li a {
  color:#333333;
}
.btnbar .active {
  border-top: 2px solid #d13030;
  border-bottom:  none;
  background-color: #fcfcfc;
}
.btnbar ul li:hover {
  border-top: 2px solid #d13030;
}
</style>