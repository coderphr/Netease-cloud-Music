<template>
  <div class="tabbar">
    <div class="tab-logo"></div>
    <div class="tab-btn">
      <button
        v-for="(item,index) in titles"
        :key="index"
        :class="{active:$route.path.indexOf(item.path) != -1}"
        @click="btnClick(index,item.path)"
      >{{item.title}}</button>
    </div>
    <div class="tab-search">
      <span>
        <div class="search-img"></div>
        <input type="text" value="" placeholder="音乐/视频/电台/用户" />
      </span>
    </div>
   <a class="tab-center" href="javascript:;">创作者中心</a>
   <a class="tab-login" href="javascript:;">登录</a>
  </div>
</template>

<script>
export default {
  name: "tabbar",
  data() {
    return {
       titles:[
        {'title':'发现音乐','path':'/find'},
        {'title':'我的音乐','path':'/profile'},
        {'title':'朋友','path':'/friend'},
        {'title':'音乐人','path':'/musician'},
      ],
      current: 0
    };
  },
  methods:{
    btnClick(index,path) {
      this.current = index;
      this.$emit('titleClick',path)
    }
  }
};
</script>

<style scoped>
.tabbar {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 75px;
  background-color: #242424;
}
.tab-logo {
  width: 180px;
  height: 85px;
  background-image: url(~@/assets/img/topbar.png);
  background-position: 0px 5px;
  background-repeat: no-repeat;
  transform: scale(1.2);
}
.tab-btn {
  display: flex;
  justify-content: space-around;
  width: 30%;
  font-size: 14px;
  margin-left: 30px;
}
.tab-btn button {
  position: relative;
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  color: #cccccc;
  background-color: #242424;
  border: 0;
}
.tab-btn button:hover {
  color: #ffffff;
  background-color: #000000;
}
.tab-btn .active {
  color: #ffffff;
  background-color: #000000;
}
.tab-btn .active::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 0;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid red;
}
.tab-search {
  position: relative;
  width: 20%;
  height: 100%;
}

.tab-search span {
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 40px;
  line-height: 40px;
  border-radius: 40px;
  background-color: #ffffff;
}
.tab-search  .search-img {
  float: left;
  margin-top: 5px;
  width: 30%;
  height: 100%;
  background: url(~@/assets/img/topbar.png);
  background-position: 0 -99px;
}
.tab-search span input {
  float: left;
  position: absolute;
  width: 70%;
  top: 50%;
  left: 50%;
  font-size: 13px;
  color: #a4a4a4;
  transform: translate(-50%, -50%);
  border: none;
}
.tab-center {
  position: relative;
  top: 20%;
  width: 115px;
  height: 40px;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  line-height: 40px;
  border:1px solid #cccccc;
  border-radius: 20px;
}
.tab-login {
  position: relative;
  top: 35%;
  left: 2%;
  color: #a4a4a4;
}
.tab-login:hover {
  text-decoration: underline;
}
</style>