<template>
  <div class="header">
    <div class="header-left iconfont">&#xe624;</div>
    <router-link to='/search' class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </router-link>
    <router-link to='/city'>
      <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe64a;</span>
    </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  },
  methods: {
    refresh () {
      this.$router.go(0)
    }
  }
}
</script>

<style lang='stylus' scoped>
  .header
    display flex
    height .88rem
    background #00bcd4
    .header-left
      display inline-block
      font-size .36rem
      color #fff
      line-height .88rem
      width .4rem
      padding 0 .2rem
    .header-input
      flex 1
      box-sizing border-box
      line-height .6rem
      background #fff
      height .6rem
      margin  .14rem .2rem .14rem 0
      padding-left .14rem
      color #e4e7ea
      border-radius .04rem
    .header-right
      min-width 1.04rem
      line-height .88rem
      color #fff
      margin-right .04rem
      .arrow-icon
        font-size .24rem
</style>
