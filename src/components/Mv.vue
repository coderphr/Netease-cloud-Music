<template>
  <div class="mv">
    <h4>
      {{ mvDetails.name }}<span>{{ mvDetails.creator }}</span>
    </h4>
    <video :src="mvAdress" controls="controls">
      <source :src="mvAdress" type="video/mp4" />
      你的浏览器不支持h5标签
    </video>
    <Comments :total=total :comment=mvComments @sizechange="sizechange"/>
  </div>
</template>

<script>
//导入方法
import {
  getMv,
  getVideo,
  getItem,
  getMvAdress,
  getComment,
} from "@/network/find";
//导入组件
import Comments from './Comments';
export default {
  name: "mv",
  data() {
    return {
      id: null,
      mvDetails: [],
      mvAdress: "",
      mvComments: [],
      total:'',
    };
  },
  components:{
    Comments
  },
  mounted() {
    this.id = this.$route.query.ids;
    this.getData(this.id);
  },
  methods: {
    getData(id) {
      if (id.length < 8) {
        getMv(id).then((responce) => {
          let data = responce.data;
          this.mvDetails = new getItem(
            data.name,
            data.desc,
            data.playCount,
            data.artistName
          );
        });
        getMvAdress(id).then((data) => {
          this.mvAdress = data.data.url;
        });
        getComment(id,20).then((data) => {
          console.log(data)
          this.mvComments.push(...data.comments);
          this.mvComments.push(...data.hotComments);
          this.total = data.total;
        });
      } else {
        getVideo(id).then((responce) => {
          let data = responce.data;
          this.mvDetails = new getItem(
            data.title,
            data.description,
            data.playTime,
            data.creator.nickname
          );
        });
      }
    },
    //页数改变获取新评论数据
    sizechange(size) {
      getComment(this.id,20,(size-1)*20).then(data => {
          this.mvComments.push(...data.comments);
      });
    }
  },
};
</script>

<style scoped>
.mv {
  margin: 0 auto;
  width: 60%;
  background-color: #ffffff;
  border: 1px solid #d3d3d3;
}
h4 {
  display: inline-block;
  margin: 20px 40px;
  font-size: 23px;
  font-weight: 500;
}
h4 > span {
  margin-left: 20px;
  font-size: 13px;
  color: #0c73c2;
}
video {
  width: 60%;
  display: block;
  margin: 0 auto;
}
</style>
