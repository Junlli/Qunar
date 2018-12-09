<template>
  <div>
    <div class="ticket-list" :class="{'web-tab-fixed': isActive}">
      <div class="border-bottom">
        <span class="tab-item">门票</span>
        <span class="tab-item">一日游</span>
        <span class="tab-item">热销组合</span>
        <span class="tab-item">景区服务</span>
      </div>
    </div>
    <div class="ticket-group">
      <h3 class="ticket-type">
        <span class="tickettype-ticket"></span>
        故宫预售成人票
      </h3>
      <div class="ticket-list-multi">
        <div class="ticket-type-info">
          <h5 class="ticket-type-name">上午场</h5>
          <div class="ticket-type-price">
            ¥
            <em class="price-num">40</em>
            <span class="ticket-numword">起</span>
          </div>
        </div>
      </div>
      <div class="ticket-list-multi">
        <div class="ticket-type-info">
          <h5 class="ticket-type-name">上午场</h5>
          <div class="ticket-type-price">
            ¥
            <em class="price-num">40</em>
            <span class="ticket-numword">起</span>
          </div>
        </div>
      </div>
      <div class="more-refresh" @click='handleShow(0)' v-show='!show'>
        查看剩余产品
      </div>
      <div class="ticket-list-multi" v-show='show'>
        <div class="ticket-type-info">
          <h5 class="ticket-type-name">上午场</h5>
          <div class="ticket-type-price">
            ¥
            <em class="price-num">40</em>
            <span class="ticket-numword">起</span>
          </div>
        </div>
      </div>
      <div class="ticket-list-multi" v-show='show'>
        <div class="ticket-type-info">
          <h5 class="ticket-type-name">上午场</h5>
          <div class="ticket-type-price">
            ¥
            <em class="price-num">40</em>
            <span class="ticket-numword">起</span>
          </div>
        </div>
      </div>
      <div class="ticket-list-multi" v-show='show'>
        <div class="ticket-type-info">
          <h5 class="ticket-type-name">上午场</h5>
          <div class="ticket-type-price">
            ¥
            <em class="price-num">40</em>
            <span class="ticket-numword">起</span>
          </div>
        </div>
      </div>
    </div>

    <div class="ticket-group">
      <h3 class="ticket-type">
        <span class="tickettype-ticket"></span>
        故宫预售成人票
      </h3>
      <div class="ticket-list-multi">
        <div class="ticket-type-info">
          <h5 class="ticket-type-name">上午场</h5>
          <div class="ticket-type-price">
            ¥
            <em class="price-num">40</em>
            <span class="ticket-numword">起</span>
          </div>
        </div>
      </div>
      <div class="ticket-list-multi">
        <div class="ticket-type-info">
          <h5 class="ticket-type-name">上午场</h5>
          <div class="ticket-type-price">
            ¥
            <em class="price-num">40</em>
            <span class="ticket-numword">起</span>
          </div>
        </div>
      </div>
      <div class="more-refresh" @click='handleShow(1)' v-show='!show'>
        查看剩余产品
      </div>
      <div class="ticket-list-multi" v-show='show'>
        <div class="ticket-type-info">
          <h5 class="ticket-type-name">上午场</h5>
          <div class="ticket-type-price">
            ¥
            <em class="price-num">40</em>
            <span class="ticket-numword">起</span>
          </div>
        </div>
      </div>
      <div class="ticket-list-multi" v-show='show'>
        <div class="ticket-type-info">
          <h5 class="ticket-type-name">上午场</h5>
          <div class="ticket-type-price">
            ¥
            <em class="price-num">40</em>
            <span class="ticket-numword">起</span>
          </div>
        </div>
      </div>
      <div class="ticket-list-multi" v-show='show'>
        <div class="ticket-type-info">
          <h5 class="ticket-type-name">上午场</h5>
          <div class="ticket-type-price">
            ¥
            <em class="price-num">40</em>
            <span class="ticket-numword">起</span>
          </div>
        </div>
      </div>
    </div>

    <div class="ticket-group">
      <h3 class="ticket-type">
        <span class="tickettype-ticket"></span>
        故宫预售成人票
      </h3>
      <div class="ticket-list-multi">
        <div class="ticket-type-info">
          <h5 class="ticket-type-name">上午场</h5>
          <div class="ticket-type-price">
            ¥
            <em class="price-num">40</em>
            <span class="ticket-numword">起</span>
          </div>
        </div>
      </div>
      <div class="ticket-list-multi">
        <div class="ticket-type-info">
          <h5 class="ticket-type-name">上午场</h5>
          <div class="ticket-type-price">
            ¥
            <em class="price-num">40</em>
            <span class="ticket-numword">起</span>
          </div>
        </div>
      </div>
      <div class="more-refresh" @click='handleShow(2)' v-show='!show'>
        查看剩余产品
      </div>
      <div class="ticket-list-multi" v-show='show'>
        <div class="ticket-type-info">
          <h5 class="ticket-type-name">上午场</h5>
          <div class="ticket-type-price">
            ¥
            <em class="price-num">40</em>
            <span class="ticket-numword">起</span>
          </div>
        </div>
      </div>
      <div class="ticket-list-multi" v-show='show'>
        <div class="ticket-type-info">
          <h5 class="ticket-type-name">上午场</h5>
          <div class="ticket-type-price">
            ¥
            <em class="price-num">40</em>
            <span class="ticket-numword">起</span>
          </div>
        </div>
      </div>
      <div class="ticket-list-multi" v-show='show'>
        <div class="ticket-type-info">
          <h5 class="ticket-type-name">上午场</h5>
          <div class="ticket-type-price">
            ¥
            <em class="price-num">40</em>
            <span class="ticket-numword">起</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  

</template>

<script>
export default {
  name: 'DetailList',
  data () {
    return {
      show: false,
      isActive: false
    }
  },
  methods: {
    handleShow (index) {
      if (index == 0) {
        this.show = true
      }
    },
    handleScroll () {
      const fixedTop = 266
      const scrolltop = document.documentElement.scrollTop
      if (scrolltop >= fixedTop) {
        this.isActive = true
      } else {
        this.isActive = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang='stylus' scoped>
  .web-tab-fixed
    position: fixed!important
    top .88rem
    z-index: 81
    width: 100%
    overflow-x: scroll
  .ticket-list
    position relative
    background-color: #fff
    color: #212121
    height: .96rem
    line-height: .96rem
    white-space: nowrap
    overflow-x: auto
    .tab-item
      display: inline-block
      height: .92rem
      line-height: .96rem
      width: 2.4rem
      text-align: center
      font-size: .32rem
  .ticket-group
    margin-bottom: .2rem
    background: #fff
    .ticket-type
      overflow: hidden
      position: relative
      z-index: 4
      margin-bottom: -.02rem
      padding: 0 .2rem
      height: .88rem
      background: #fff
      color: #333
      font-size: .32rem
      line-height: .88rem
      text-indent: .4rem
      .tickettype-ticket
        display: inline-block
        position: absolute
        width: .36rem
        height: .36rem
        top: .26rem
        left: .2rem
        background: url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right: .1rem
        background-size: .4rem 3rem
    .ticket-list-multi
      overflow hidden
      .ticket-type-info
        position: relative
        z-index: 2
        margin-bottom: -.02rem
        padding: .24rem .2rem
        background: #fff
        .ticket-type-name
          margin-right: 1.8rem
          color: #333
          font-size: .3rem
          line-height: .48rem
        .ticket-type-price
          right: .46rem
          margin-top: -.28rem
          color: #ff9800
          font-size: .24rem
          overflow: hidden
          position: absolute
          top: 50%
          height: .4rem
          line-height: .4rem
        .price-num
          margin-left: .04rem
          font-size: .4rem
    .more-refresh
      position: relative
      margin-top: -.02rem
      height: .8rem
      background: #fff
      color: #616161
      line-height: .8rem
      text-align: center
      z-index: 2
</style>
