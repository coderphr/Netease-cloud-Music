import Vue from 'vue'
import VueRouter from 'vue-router'
const Find = () => import ('@/views/find/Find')
const Profile = () => import ('@/views/profile/Profile')
const Friend = () => import ('@/views/friend/Friend')
const Shop = () => import ('@/views/shop/Shop')
const Musician = () => import ('@/views/musician/Musician')
const recomend = () => import('@/views/find/findchild/recomend/Recomend')
Vue.use(VueRouter)
//解决连续点击title报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path:'',
    redirect:'/find'
  },
  {
    path:'/find',
    component:Find,
    redirect:'/find/recomend',
    children:[
      {
        path:'recomend',
        component:recomend
      },
      {
        path:'rank',
        component:() => import('@/views/find/findchild/rank/Rank')
      },
      {
        path:'songs',
        component:() => import('@/views/find/findchild/songs/Songs')
      },
      {
        path:'radio',
        component:() => import('@/views/find/findchild/radio/Radio')
      },
      {
        path:'singers',
        component:() => import('@/views/find/findchild/singers/Singers')
      },
      {
        path:'news',
        component:() => import('@/views/find/findchild/news/News')
      },
      {
        path:'details',
        component:() => import('@/components/Details')
      },
      {
        path:'searchall',
        component:() => import('@/components/searchall/searchall')
      },
      {
        path:'mv',
        component:() => import('@/components/Mv')
      }
    ]
  },
  {
    path:'/profile',
    component:Profile
  },
  {
    path:'/friend',
    component:Friend
  },
  {
    path:'/shop',
    component:Shop
  },
  {
    path:'/musician',
    component:Musician
  }
]

const router = new VueRouter({
  mode:'hash',
  routes
})

export default router