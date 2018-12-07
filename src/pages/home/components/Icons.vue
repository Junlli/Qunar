<template>
  <diV class="header-icon">
    <swiper :options="swiperOption">
      <swiper-slide v-for='(page, index) of pages' :key='index'>
        <div class="icon" v-for='item of page' :key='item.id'>
          <img class="icon-img" :src="item.imgUrl" />
          <span class="icon-title">{{item.desc}}</span>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </diV>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8) // page = 0,1
        if (!pages[page]) { // 如果pages中的page为空
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
  .header-icon >>> .swiper-container
    overflow inherit
  .header-icon
    box-sizing border-box
    height 3.8rem
    background #fff
    padding-top .1rem
    .swiper-pagination-bullets
      bottom -.4rem
    .icon
      width 25%
      height 1.5rem
      padding-top .1rem
      text-align center
      float left
      .icon-img
        width 1.1rem
        height 1.1rem
      .icon-title
        display block
        margin-top .1rem
</style>
