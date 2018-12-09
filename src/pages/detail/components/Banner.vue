<template>
  <div class="banner">
    <img class="banner-img" :src="bannerImg" alt="">
    <div class="img-num">
      <span class="iconfont img-icon">&#xe679;</span>
      <em>10</em>
    </div>
    <div class="banner-title">{{sightName}}</div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String
  }
}
</script>

<style lang='stylus' scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    width 100%
    .return
      position absolute
      left .1rem
      top .1rem
      font-size .85rem
    .banner-img
      width 100%
    .img-num
      position absolute 
      left .2rem
      bottom .86rem
      width 1.2rem
      height .4rem
      line-height .4rem
      background rgba(0, 0, 0, .5)
      border-radius .2rem
      font-size .24rem
      color #fff
      text-align center
      .img-icon
        font-size .1rem
        margin-right .1rem
    .banner-title
      position absolute
      right .2rem
      bottom .36rem
      left .2rem
      min-height .4rem
      line-height .4rem
      color #fff
      font-size .36rem
      text-shadow 0 1px 2px rgba(0,0,0,0.70)
</style>
