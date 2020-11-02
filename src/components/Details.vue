<template>
  <div class="detail">
    <div class="songDetail">
      <div class="song-img">
        <img :src="songDetail.picUrl" alt="" />
      </div>
      <div class="song-desc">
        <h4>{{ songDetail.name }}</h4>
        <span
          >歌手：<a href="javascript:;">{{ songDetail.atName }}</a></span
        ><br />
        <span
          >专辑名：<a href="javascript:;">{{ songDetail.alName }}</a></span
        ><br />
        <p v-for="(item, index) in lyric1" :key="'p1' + index">{{ item }}</p>
        <span v-show="!isShow"
          ><a href="javascript:;" @click="isShow = !isShow">显示歌词^</a></span
        >
        <p v-show="isShow" v-for="(item, indey) in lyric2" :key="indey">
          {{ item }}
        </p>
        <span v-show="isShow"
          ><a href="javascript:;" @click="isShow = !isShow">收起^</a></span
        >
      </div>
      <Comments :total=total :comment="comment" @sizechange="sizechange"/>
    </div>
  </div>
</template>

<script>
//引入数据获取的方法
import {
  getSongDetails,
  SongDetails,
  getLyric,
  getComment,
} from "@/network/songs";
//引入歌词处理方法
import parseLyric from "@/utils/parseLyric";
//导入组件
import Comments from './Comments';
export default {
  name: "detail",
  data() {
    return {
      ids: null,
      songDetail: {},
      lyric1: [],
      lyric2: [],
      isShow: false,
      comment: [],
      total: null,
    };
  },
  components:{
    Comments
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
      getLyric(this.ids).then((data) => {
        let lyric = parseLyric(data.lrc.lyric);
        this.lyric1 = lyric.splice(0, 15);
        this.lyric2 = lyric;
      });
      getComment(this.ids).then((data) => {
        this.comment = [];
        this.comment.push(...data.hotComments);
        this.comment.push(...data.comments);
        this.total = this.comment.length;
        this.total = data.total;
      });
    },
    //页数改变获取新数据
    sizechange(size) { 
      getComment(this.ids,20,(size-1)*20).then(data => {
        this.comment.push(...data.comments);
      })
    }
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
};
</script>

<style scoped>
.detail {
  position: relative;
  top: 35px;
  width: 100%;
  background-color: #f5f5f5;
}
.songDetail {
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 60%;
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
.song-img img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-shadow: 1px -3px 10px #000000;
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
</style>