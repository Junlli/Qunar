<template>
  <div class="city-header">
    <router-link tag='span' to='/' class="iconfont header-icon">&#xe624;</router-link>
    <h1 class="header-title">城市选择</h1>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang='stylus' scoped>
  .city-header
    height .68rem
    line-height .68rem
    background #00bcd4
    color #fff
    .header-icon
      float left
      display inline-block
      width .8rem
      text-align center
      height .88rem
      line-height .88rem
    .header-title
      margin 0 1rem
      text-align center
      overflow hidden
      white-space nowrap
      text-overflow ellipsis
      font-size .32rem
      line-height .88rem
</style>
