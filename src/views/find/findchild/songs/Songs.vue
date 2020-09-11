<template>
  <div class="songs">
    <songs-list :category="cartListCategory" :cartList="cartList"></songs-list>
  </div>
</template>

<script>
//导入方法
import {getCartList} from '@/network/songs'
//导入组件
import SongsList from './songsLIst'
export default {
  name:'Songs',
  data() {
    return {
      cartListCategory:{},
      cartList:[]
    }
  },
  components:{
    SongsList
  },
  mounted() {
    this.getCartList()
  },
  methods:{
    getCartList() {
      getCartList().then(data=> {
        this.cartListCategory = data.categories
        for(let i = 0;i<=4;i++) {
          this.cartList.push([])
        }
        data.sub.forEach((item) => {
          switch(item.category) {
            case 0: 
              this.cartList[0].push(item);
              break;
            case 1:
              this.cartList[1].push(item);
              break;
            case 2:
              this.cartList[2].push(item);
              break;
            case 3:
              this.cartList[3].push(item);
              break;
            case 4:
              this.cartList[4].push(item);
              break;
          }
        })
      })
    }
  }
}
</script>

<style scoped>
</style>