<template>
  <div class="song-comment">
      <div class="comment-title">
        评论 <span>共{{ total }}条热评论</span>
      </div>
      <div class="comment">
        <p>精彩评论</p>
        <div class="comments" v-for="item in comments.slice((currentPage-1)*PageSize,currentPage*PageSize)" :key="item.commentId">
          <div class="user-img">
            <img :src="item.user.avatarUrl" alt="" />
          </div>
          <div class="user-content">
            <p class="name">{{ item.user.nickname }}：</p>
            <p>{{ item.content }}</p>
            <br />
            <span>{{ item.time | dateFormate }}</span>
          </div>
        </div>
      </div>
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
</template>

<script>
export default {
  name:'comments',
  props:['total','comment'],
  data() {
    return {
      comments:[],
      //默认显示第几页
      currentPage:1,
      //总条数：
      totalCount:1,
      //个数选择器:
      pageSizes:[10,20,30,40],
      //默认没页显示条数
      PageSize:10,
    }
  },
  methods:{
     //每页显示条数
    handlerSizeChange(val) {
      this.PageSize = val
      this.currentPage = 1
    },
    //显示第几页
    handlerCurrentChange(val) {
      this.currentPage = val;
      this.$emit('sizechange',val);
    },
  },
  filters: {
    dateFormate(val) {
      if (val) {
        let t = new Date(val).toLocaleString();
        return t;
      }
    },
  },
  watch:{
    comment:{
      handler(newVal,oldVal) {
        this.comments = newVal;
        this.totalCount = this.comments.length;
      },
      deep:true
    },
  }
};
</script>

<style scoped>
.song-comment {
  margin: 0 auto;
  width: 80%;
}
.comment-title {
  margin: 0 auto;
  width: 100%;
  line-height: 35px;
  font-size: 22px;
  border-bottom: 2px solid #c20c0c;
}
.comment-title span {
  margin-left: 30px;
  font-size: 13px;
  color: #666666;
}
.comment {
  height: 100%;
}
.comment p {
  margin-bottom: 20px;
  height: 5px;
  font-size: 12px;
  font-weight: 700;
}
.comments {
  padding-top: 10px;
  margin-top: 10px;
  display: flex;
  justify-content: start;
  border-top: 1px solid #cfcfcf;
}
.comments img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
}
.user-content .name {
  font-weight: 400;
  color: #5a89d4;
}
.user-content span {
  font-size: 13px;
  color: #a699a6;
}
</style>