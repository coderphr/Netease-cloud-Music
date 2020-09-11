<template>
  <div class="detail">
    <div class="songDetail">
      <div class="song-img">
        <img :src="songDetail.picUrl" alt="">
      </div>
      <div class="song-desc">
        <h4>{{songDetail.name}}</h4>
        <span>歌手：<a href="javascript:;">{{songDetail.atName}}</a></span><br />
        <span>专辑名：<a href="javascript:;">{{songDetail.alName}}</a></span><br />
        <p v-for="(item,index) in lyric1" :key="'p1'+index">{{item}}</p>
        <span v-show="!isShow"><a href="javascript:;" @click="isShow = !isShow">显示歌词^</a></span>
        <p v-show="isShow" v-for="(item,indey) in lyric2" :key="indey">{{item}}</p>
        <span v-show="isShow"><a href="javascript:;" @click="isShow = !isShow">收起^</a></span>
      </div>
      <div class="song-comment">
       <div class="comment-title">
         评论  <span>共{{total}}条热评论</span>
       </div>
       <div class="comment">
         <p>精彩评论</p>
         <div class="comments" v-for="item in comment" :key="item.commentId">
           <div class="user-img">
            <img :src="item.user.avatarUrl" alt="">
           </div>
           <div class="user-content">
             <p class="name">{{item.user.nickname}}：</p><p>{{item.content}}</p><br />
             <span>{{item.time | dateFormate}}</span>
           </div>

         </div>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入数据获取的方法
import { getSongDetails, SongDetails, getLyric, getComment} from "@/network/songs";
//引入歌词处理方法
import parseLyric from '@/utils/parseLyric';
export default {
  name: "detail",
  data() {
    return {
      ids: null,
      songDetail: {},
      lyric1:[],
      lyric2:[],
      isShow:false,
      comment:[],
      total:null,
    };
  },
  mounted() {
    this.ids = this.$route.query.ids;
  },
  methods: {
    getDetails() {
      getSongDetails(this.ids).then((succrss) => {
        let data = succrss.songs[0];
        this.songDetail = new SongDetails(
          data.id,
          data.name,
          data.al.picUrl,
          data.al.name,
          data.ar[0].name
        );
      });
      getLyric(this.ids).then(data => {
        let lyric = parseLyric(data.lrc.lyric);
        this.lyric1 = lyric.splice(0,15);
        this.lyric2 = lyric
      });
      getComment(this.ids).then(data => {
        this.comment = [];
        this.comment.push(...data.hotComments);
        this.comment.push(...data.comments);
        this.total = this.comment.length;
        console.log(this.comment)
      })
    },
  },
  watch: {
    ids(newVal, oldVal) {
      if (newVal) {
        this.getDetails();
      }
    },
    $route(to, from) {
      this.ids = to.query.ids;
    },
  },
  filters:{
    dateFormate(val) {
      if(val) {
        let t = new Date(val).toLocaleString();
        return t
      }
    }
  }
};
</script>

<style scoped>
.detail {
  position: relative;
  top: 35px;
  width:100%;
  background-color: #f5f5f5;
}
.songDetail {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width:60%;
  border: 1px solid #d3d3d3;
  background-color: #ffffff;
}
.song-img {
  position: relative;
  top: 35px;
  left: 30px;
  width: 200px;
  height: 200px;
  border: 30px solid#2e2e2e;
  box-sizing: border-datbox;
  border-radius: 50%;
  box-shadow: 1px -3px 10px #484848;
}
.song-img  img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width:100%;
  height: 100%;
  border-radius: 50%;
  box-shadow:1px -3px 10px #000000 ;
}
.song-desc {
  margin-left: 150px;
}
.song-desc h4 {
  height: 0px;
  font-size: 26px;
  font-weight: 500;
}
.song-desc span {
  margin-top: 0;
  font-size: 12px;
  color: #999999;
}
.song-desc p {
  height: 5px;
  margin-top: 12px;
  font-size: 12px;
  color: #3a1b1b;
}
.song-comment {
  margin: 0 auto;
  width:80%;
}
.comment-title {
  margin: 0 auto;
  width:100%;
  line-height:35px;
  font-size: 22px;
  border-bottom:2px solid #c20c0c;
}
.comment-title span {
  margin-left: 30px;
  font-size: 13px;
  color:#666666;
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
.comments img{
  width:50px;
  height: 50px;
  margin-right: 20px;
}
.user-content {
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