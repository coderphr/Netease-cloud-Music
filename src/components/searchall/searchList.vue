<template>
  <div class="searchList">
    <ul v-if="type == 1">
      <li v-for="item in lists" :key="item.id" @click="jumptodetail(item.id)">
        <p>
          <a href="javascript:;">{{ item.name }}</a>
        </p>
        <p>{{ item.artists[0].name }}</p>
        <p>《{{ item.name }}》</p>
        <p>{{ item.duration | timeFormat }}</p>
      </li>
    </ul>
    <div class="lists" v-else-if="type == 100 || type == 10 || type == 1009">
      <div class="list-item" v-for="item in lists" :key="item.id">
        <img v-lazy="item.picUrl" alt="" />
        <p>{{ item.name | lengthFormat }}</p>
      </div>
    </div>
    <div class="lists" v-else-if="type == 1014">
      <div
        class="list-item"
        v-for="item in lists"
        :key="item.vid"
        @click="jumptoradio(item.vid)"
      >
        <img :src="item.coverUrl" alt="" />
        <p>{{ item.title }}</p>
      </div>
    </div>
    <div class="lists" v-else-if="type == 1002">
      <div class="list-item" v-for="item in lists" :key="item.id">
        <img :src="item.avatarUrl" alt="" />
        <p>{{ item.nickname }}</p>
      </div>
    </div>
    <ul v-if="type == 1000">
      <li v-for="item in lists" :key="item.id">
        <p>
          <a href="javascript:;">{{ item.name }}</a>
        </p>
        <div>
          <p>{{ item.trackCount }}首</p>
          <p>by {{ item.creator.nickname }}</p>
          <p>收藏：{{ item.bookCount }}</p>
          <p>收听：{{ item.playCount }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "searchList",
  props: {
    lists: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      type: 1,
    };
  },
  methods: {
    jumptodetail(ids) {
      this.$router.push({
        path: "details",
        query: {
          ids,
        },
      });
    },
    jumptoradio(ids) {
      this.$router.push({
        path: "mv",
        query: {
          ids,
        },
      });
    },
  },
  watch: {
    lists: {
      handler(newVal, oldVal) {},
    },
    $route: {
      handler(newVal, oldVal) {
        this.type = newVal.query.type;
      },
    },
  },
  filters: {
    timeFormat(mss) {
      var hours = parseInt(mss / (1000 * 60 * 60));
      var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = parseInt((mss % (1000 * 60)) / 1000);
      var str = minutes + ":" + seconds;
      return str;
    },
    lengthFormat(val) {
      return val.length > 10 ? val.substr(0, 10) + ".".repeat(3) : val;
    },
  },
};
</script>

<style scoped>
.searchList {
  width: 60%;
  position: absolute;
  top: 222px;
  left: 50%;
  transform: translateX(-50%);
}
.searchList ul {
  width: 100%;
}
.searchList ul li {
  margin-left: -40px;
  width: 100%;
  height: 42px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  color: #333333;
  background-color: #ffffff;
  box-sizing: border-box;
}
.searchList ul li:nth-child(even) {
  background-color: #f7f7f7;
}
.searchList ul li div {
  display: flex;
  justify-content: start;
}
.searchList ul li:hover {
  background-color: #f2f2f2;
  border: 1px solid #e1e1e1;
}
.searchList ul li a {
  color: #0c73c2;
}
.searchList ul li p {
  display: inline-block;
  padding: 10px;
}
.lists {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.list-item {
  width: 16%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.list-item img {
  width: 70%;
  border: 2px solid #c3c4c5;
}
.list-item p {
  font-size: 12px;
}
</style>