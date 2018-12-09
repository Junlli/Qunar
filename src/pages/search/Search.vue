<template>
  <div class="page">
    <div class="header">
      <router-link tag='li' to='/' class="header-left iconfont">&#xe624;</router-link>
      <h1 class="header-title">
        <input
          type="text"
          placeholder="输入城市或景点"
          autocomplete="off"
          class="search-input"
          v-model='keyword'
        >
      </h1>
      <span class="header-right">搜索</span>
    </div>
    <div class="search-content" ref='search' v-show='keyword'>
      <ul>
        <li
          v-for='item of list'
          :key='item.id'
          class="search-item border-bottom"
          @click='handleCityClick(item.name)'
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show='hasNoData'>没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'Search',
  data () {
    return {
      keyword: '',
      cities: {},
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }        
          })
        }
        this.list = result
      }, 100)
    }
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
      }
    },
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.getCityInfo()
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang='stylus' scoped>
  .page
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    background: #f5f5f5;
    .header
      z-index: 98
      background: #fff
      position: relative
      width: 100%
      height: .88rem
      text-align: center
      display flex
      .header-left
        display: inline-block
        width: .4rem
        line-height: .88rem
        padding: 0 .2rem
        font-size: .36rem
        text-align: left
      .header-title
        display inline-block
        padding: 0 .6rem 0 .2rem
        background: #f2f2f2
        color: #212121
        border-radius: .3rem
        box-sizing: border-box
        position: relative
        height: .6rem
        margin: .14rem 0
        line-height: .6rem
        flex 1
        .search-input
          position: relative
          display: block
          width: 100%
          height: .4rem
          line-height: .4rem
          padding: .1rem 0
          background: #f2f2f2
          border: 0
          font-family: "Microsoft Yahei",Arial
          font-size: .28rem
          border-radius: .06rem
          text-align: center
      .header-right
        display: inline-block
        height: .88rem
        line-height: .88rem
        padding: 0 .2rem
    .search-content
      position absolute
      overflow hidden
      top .88rem
      left 0
      right 0
      bottom 0
      background #eee
      .search-item
        line-height .62rem
        padding-left .2rem
        color #666
        background #fff
</style>
