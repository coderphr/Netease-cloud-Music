<template>
  <div class="audio">
    <audio class="audio-item" ref="audio" :src="song" loop="loop" controls="controls" autoplay="autoplay"></audio>
  </div>
</template>

<script>
import { getMusicUrl } from "@/network/rank";
export default {
  name: "Audio",
  data() {
    return {
      musicUrl: [
        {
          url:
            "http://m10.music.126.net/20200819120148/819fd65a3964ec395e41b0d5a691580d/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3489371000/b833/76fe/5500/abb8ec30065e611f3415b2e10433744c.mp3",
        },
      ],
      song:[],
      isPlay: true,
      isShow:false
    };
  },
  created() {
    this.$bus.$on("music-id-change", (data) => {
       getMusicUrl(data.id).then((data) => {
         this.song = data.data[0].url
      });
      if(this.isPlay) {
      this.$refs.audio.play()
      this.isPlay = false
      }else {
        this.$refs.audio.pause()
        this.isPlay = true
      }
    });
  },
};
</script>
 
<style scoped>
.audio {
  position:fixed;
  bottom: -5px;
  left: 0;
  width: 100%;
}
audio {
  width: 100%;
}
</style>