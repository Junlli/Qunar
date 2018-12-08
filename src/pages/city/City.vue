<template>
  <div>
    <city-header></city-header>
    <city-tab></city-tab>
    <city-list
      :cities='cities'
      :hotCities='hotCities'
    >
    </city-list>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CityTab from './components/Tab'
import CityList from './components/List'
export default {
  name: 'City',
  components: {
    CityHeader,
    CityTab,
    CityList
  },
  data () {
    return {
      cities: {},
      hotCities: []
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
        this.hotCities = data.hotCities
      }
    }
  },
  mounted () {
    this.getCityInfo()
  },
  beforeCreate () {
    document.querySelector('body').setAttribute('style', 'background:#f5f5f5;height:100%')
    // document.querySelector('body').setAttribute('style', 'height:100%')
  },
  beforeDestroy () {
    document.querySelector('body').setAttribute('style', '')
  }
}
</script>

<style lang='stylus' scoped>

</style>
