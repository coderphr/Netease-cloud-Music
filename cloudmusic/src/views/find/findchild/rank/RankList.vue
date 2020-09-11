<template>
  <div class="rank-list">
    <div class="total">
      <p>歌曲列表</p>
      <span>{{rankList.length}}首歌曲</span>
    </div>
    <div class="songs">
        <el-table :data="rankLists.slice((currentPage-1)*PageSize,currentPage*PageSize)" stripe style="width: 100%">
          <el-table-column prop="Rnum"   width="40" ></el-table-column>
          <el-table-column prop="al.picUrl" label="标题" width="auto">
            <template slot-scope="scope">
              <img v-lazy="scope.row.al.picUrl" width="auto" height="40" />
            </template>
          </el-table-column>
          <el-table-column prop="name" label="歌曲名" width="auto"></el-table-column>
          <el-table-column prop="ar[0].name" label="歌手" width="auto"></el-table-column>
          <el-table-column label="play" >
            <template slot-scope="scope">
              <el-button size="mini" type="success" @click="idChange(scope.row)">播放</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          @size-change="handlerSizeChange"
          @current-change="handlerCurrentChange"
          :current-page="currentPage"
          :page-sizes="pageSizes"
          :page-size="PageSize"
          layout="total,sizes,prev,pager,next,jumper"
          :total="totalCount" >
        </el-pagination>
    </div>

  </div>
</template>

<script>
export default {
  name: "RankList",
  props: {
    rankList: {
      typre: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      //总数据
      rankLists: [],
      //默认显示第几页
      currentPage:1,
      //总条数：
      totalCount:1,
      //个数选择器:
      pageSizes:[10,20,30,40],
      //默认没页显示条数
      PageSize:10,
    };
  },
  methods: {
    //每页显示条数
    handlerSizeChange(val) {
      console.log(val)
      this.PageSize = val
      this.currentPage = 1
    },
    //显示第几页
    handlerCurrentChange(val) {
      this.currentPage = val
    },
    idChange(val) {
      const songDetails = {
        title:val.name,
        artist:val.ar[0].name,
        id:val.id
      }
      this.$bus.$emit('music-id-change',songDetails)
    }
    
  },
  watch: {
    rankList(newVal, oldVal) {
      this.rankLists = newVal;
      this.totalCount = this.rankLists.length
    },
  },
};
</script>

<style scoped>
.rank-list {
  width: 100%;
  padding-left: 60px;
  border-right: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  background-color: #ffffff;
  box-sizing: border-box;
}
.total p {
  display: inline;
  font-size: 23px;
  font-weight: 400;
}
.total span {
  margin-left: 30px;
  font-size: 15px;
  color: #666666;
}
</style>