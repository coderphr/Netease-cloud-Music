<template>
  <div class="search">
    <ul @click="routeChange($event)" >
      <li>单曲</li>
      <li v-for="item in songsLists"  :key="item.id"><a :data-id="item.id" href="javascript:;">{{item.name | lengthCheck}}</a></li>
      <li>歌手</li>
      <li v-for="item in singersLists"  :key="item.id"><a  :data-id="item.id" href="javascript:;">{{item.name | lengthCheck}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'Search',
  props:{
    songsList:{
      type:Array,
      defautlt() {
        return []
      }
    },
    singersList:{
      type:Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      songsLists:[],
      singersLists:[]
    }
  },
  methods:{
    //路由跳转
    routeChange(e) {
      this.$router.push({
        path:'/find/details',
        query:{
          ids:e.target.dataset.id
        }
      })
    }
  },
  watch:{
    songsList:{
      handler(newVal,oldVal) {
        this.songsLists = []
        let newArr = newVal.slice(0,3)
        newArr.forEach((item,index) => {
          let  name = item.name + '-' +item.artists[0].name;
          let obj ={ 
            id:item.id,
            name
          }
          this.songsLists.push(obj)
        })
      },
      deep:true
    },
    singersList:{
      handler(newVal,oldVal) {
        this.singersLists = newVal
      },
      deep:true
    },
  },
  filters:{
    //检查名字长度
    lengthCheck(val) {
      return val.length > 15 ? val.substring(0,val.length-13)+'.'.repeat(3) : val
    }
  }
}
</script>

<style scoped>
.search{
  position: absolute;
  top: 66px;
  left: 25px;
  width: 252px;
  background-color: #ffffff;
  border-radius: 2%;
  z-index: 999;
}
.search ul  {
  margin: 0;
  padding:0;
}
.search ul li {
  padding-left: 5px;
  height: 30px;
  font-size: 12px;
  line-height: 30px;
  border: 1px solid #e2e2e2;
}
.search ul li a {
  display: block;
  width: 100%;
}
.search ul li:hover {
  background-color: #e3e5e7;
}
</style>