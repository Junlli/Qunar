<template>
  <div>
    <city-header></city-header>
    <city-tab
      @in='handleChangeIn'
      @out='handleChangeOut'
    >
    </city-tab>
    <city-list
      :cities='cities'
      :hotCities='hotCities'
      :data='dataIn'
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
      hotCities: [],
      dataIn: '',
      dataOut: ''
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
    },
    handleChangeIn (data) {
      this.dataIn = data
    },
    handleChangeOut (data) {
      this.dataIn = data
    }
  },
  mounted () {
    this.getCityInfo()
  }
}
</script>

<style lang='stylus' scoped>

</style>
