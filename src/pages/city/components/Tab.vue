<template>
  <div class="city-tab">
    <ul class="tab-list">
      <li :class="{'active': inActive, 'in': true}" @click="activeClick" key='in'>境内</li>
      <li :class="{'active': outActive, 'out': true}" @click='foreignClick' key='out'>境外·港澳台</li>
    </ul>
  </div>
  
</template>

<script>
export default {
  name: 'CityTab',
  data () {
    return {
      inActive: true,
      outActive: false
    }
  },
  methods: {
    activeClick () {
      this.inActive = true
      this.outActive = false
      this.$emit('in', this.inActive)
    },
    foreignClick () {
      this.inActive = false
      this.outActive = true
      this.$emit('out', this.inActive)
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
