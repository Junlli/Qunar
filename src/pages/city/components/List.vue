<template>
    <div class="city-list" ref='wrapper'>
      <div class="active" v-show='data'>
        <h2 class="title top-title">热门城市</h2>
        <ul class="hot-city">
          <router-link to='/'>
            <li
              class="hotcity-item border-rightbottom"
              @click="handleCityClick(item.name)"
              v-for='item of hotCities'
              :key='item.id'
            >
              {{item.name}}
            </li>
          </router-link>      
        </ul>
        <h2 class="title">字母排序</h2>
        <ul class="alphabet">
          <li
            class="letter"
            v-for='item of letters'
            :key='item'
            @click='handleClick'
          >
            {{item}}
          </li>
        </ul>
        <div
          v-for='(item, key) of cities'
          :key='key'
          :ref='key'
        >
          <h2 class="title">{{key}}</h2>
          <ul class="city-items">
            <router-link to='/'>
              <li
                class="city-name border-rightbottom"
                v-for='innerItem of item'
                :key='innerItem.id'
                @click='handleCityClick(innerItem.name)'
              >
                {{innerItem.name}}
              </li>
            </router-link>
          </ul>
        </div>
      </div>
      <div class="foreign" v-show='!data'>
        <h2 class="title top-title">城市</h2>
        <ul class="hot-city">
          <router-link to='/'>
            <li
              class="hotcity-item border-rightbottom"
              @click="handleCityClick(item.name)"
              v-for='item of hotCities'
              :key='item.id'
            >
              {{item.name}}
            </li>
          </router-link>      
        </ul>
        <h2 class="title">字母排序</h2>
        <ul class="alphabet">
          <li
            class="letter"
            v-for='item of letters'
            :key='item'
            @click='handleClick'
          >
            {{item}}
          </li>
        </ul>
        <div
          v-for='(item, key) of cities'
          :key='key'
          :ref='key'
        >
          <h2 class="title">{{key}}</h2>
          <ul class="city-items">
            <router-link to='/'>
              <li
                class="city-name border-rightbottom"
                v-for='innerItem of item'
                :key='innerItem.id'
                @click='handleCityClick(innerItem.name)'
              >
                {{innerItem.name}}
              </li>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
    
  
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    data: Boolean
  },
  data () {
    return {
      letter: ''
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  methods: {
    handleClick (e) {
      this.letter = e.target.innerText
    },
    handleCityClick (city) {
      this.$store.commit('changeCity', city)
    }
  },
  watch: {
    letter () {
      if (this.letter) {
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    })
  }
}
</script>

<style lang='stylus' scoped>
  .city-list >>> .router-link-active
    color #000
  .city-list
    overflow hidden
    position absolute
    top 1.48rem
    left 0
    right 0
    bottom 0
    background #f5f5f5
    .title
      height .72rem
      line-height .72rem
      margin 0 .3rem
      font-size .24rem
    .hot-city, .alphabet, .city-items
      overflow hidden
      background #fff
      .hotcity-item, .letter, .city-name
        height .9rem
        line-height .9rem
        text-align center
        float left
        font-size .28rem
      .hotcity-item
        width 33.33%
      .city-name
        width 25%
        overflow hidden
        white-space nowrap
        text-overflow ellipsis
    .alphabet
      padding .3rem 0
      .letter
        width 16.66%
</style>
