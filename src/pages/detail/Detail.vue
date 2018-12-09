<template>
  <div>
    <detail-header></detail-header>
    <detail-banner
      :sightName='sightName'
      :bannerImg='bannerImg'
    >
    </detail-banner>
    <detail-base></detail-base>
    <detail-list></detail-list>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailBase from './components/Base'
import DetailList from './components/List'
import DetailHeader from './components/Header'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailBase,
    DetailList,
    DetailHeader
  },
  data () {
    return {
      sightName: '',
      bannerImg: ''
    }
  },
  methods: {
    getDetaiInfo () {
      axios.get('/api/detail', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc (res) {
      res = res.data
      console.log(res.data)
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
      }
    }
  },
  mounted () {
    this.getDetaiInfo()
  }
}
</script>

<style>

</style>
