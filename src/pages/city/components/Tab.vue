<template>
  <div class="city-tab">
    <ul class="tab-list">
      <li :class="{'active': !isActive, 'in': true}" @click="handleClick" key='in'>境内</li>
      <li :class="{'active': isActive, 'out': true}" @click='handleClick' key='out'>境外·港澳台</li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: 'CityTab',
  data () {
    return {
      isActive: false,
    }
  },
  methods: {
    handleClick () {
      this.isActive = !this.isActive
    }
  }
}
</script>

<style lang='stylus' scoped>
  .city-tab
    height .4rem
    line-height .4rem
    background #00bcd4
    padding .2rem 1rem
    color #fff
    .tab-list
      border-radius .03rem
      text-align center
      border .02rem solid #fff
      height .4rem
      line-height .4rem
      .in
        float left
        width 50%
      .active
        background #fff
        color #00bcd4
      .out
        width 50%
        float left
</style>
