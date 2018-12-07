<template>
  <div>
    <home-header></home-header>
    <home-swiper :list='swiperList'></home-swiper>
    <home-icons :list='iconList'></home-icons>
  </div> 
</template>

<script>
import axios from 'axios'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  data () {
    return {
      swiperList: [],
      iconList: []
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index')
      .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>

<style lang='stylus' scoped>

</style>
