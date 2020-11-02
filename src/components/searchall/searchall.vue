<template>
  <div class="searchAll">
    <div class="content">
      <btnbar :titles="titles" :keywords="keywords"/>
      <searchList :lists="lists" />
    </div>
  </div>
</template>

<script>
//导入方法
import {getSearch} from '@/network/find';
//导入组件
import btnbar from './btnbar';
import searchList from './searchList';
export default {
  name:'searchAll',
  data() {
    return {
      titles:[
        {"title":"单曲","type":1},
        {"title":"歌手","type":100},
        {"title":"专辑","type":10},
        {"title":"视频","type":1014},
        {"title":"歌单","type":1000},
        {"title":"主播电台","type":1009},
        {"title":"用户","type":1002},
      ],
      keywords:null,
      type:null,
      lists:[]
    }
  },
  components:{
    btnbar,
    searchList
  },
  created() {
    this.keywords = this.$route.query.keywords;
    this.type = this.$route.query.type
  },
  mounted() {
    this.getLists();
  },
  methods:{
    getLists() {
      getSearch(this.keywords,this.type,20).then(data => {
        this.lists = data.result.songs || data.result.albums || data.result.artists || data.result.videos || data.result.playlists || data.result.djRadios || data.result.userprofiles
      })
    }
  },
  watch:{
    $route:{
      handler(to,from) {
        this.keywords = to.query.keywords;
        this.type = to.query.type;
        this.getLists()
      },
      deep:true
    },
  }
}
</script>

<style scoped>
.content {
  margin: 0 auto;
  width: 60%;
  height:100vh;
  background-color: #ffffff;
  border: 1px solid #d3d3d3;
}
</style>