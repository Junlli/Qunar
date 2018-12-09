<template>
  <div class="baseinfo">
    <div class="card">
      <div class='card-left'>
        <div>
          <span class="score">5.0</span>
          <span class="score-text">分</span>
          <span class="desc">超赞</span>
        </div>
        <div>
          <span class="comment-num">335840条评论</span>
          <span class="comment-num">90条攻略</span>
          <span class="rightarrow iconfont">&#xe62d;</span>
        </div>
      </div>
      <div class="card-right">
        <div>
          <span class="sight-title">景点简介</span>
        </div>
        <div>
          <span class="sight-text">开放时间、贴士</span>
          <span class="rightarrow iconfont">&#xe62d;</span>          
        </div>
      </div>
    </div>
    <div class="address">
      <p class="address-text">
        <span class="iconfont address-icon">&#xe652;</span>
        北京市东城区景山前街4号
        <span class="rightarrow iconfont">&#xe62d;</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBase'
}
</script>

<style lang='stylus' scoped>
  .baseinfo
    position relative
    top -.1rem
    padding .1rem .2rem 0 .2rem
    margin-bottom .1rem
    background #fff
    .card
      padding-top .1rem
      padding-bottom .2rem
      display flex
      width 100%
      .card-left
        position relative
        flex 1
        .score
          font-size .44rem
          color #ff8300
          line-height .44rem
        .score-text
          font-size .28rem
          color #ff8300
          line-height .48rem
        .desc
          font-size .28rem
          color #ff8300
          line-height .48rem
          margin-left .2rem
        .comment-num
          font-size .24rem
          color #9e9e9e
          line-height .32rem
          margin-right .2rem
        .rightarrow
          position absolute
          top .3rem
          right .2rem
          color #9e9e9e
          font-size .24rem
      .card-right
        position relative
        flex 1
        .sight-title
          font-size .28rem
          color #212121
          line-height .48rem
          padding-left .3rem
        .sight-text
          color #9e9e9e
          font-size .24rem
          padding-left .3rem
        .rightarrow
          position absolute
          top .3rem
          right .2rem
          color #9e9e9e
          font-size .24rem
    .address
      display block
      position relative
      padding .2rem 0
      line-height .36rem
      color #212121
      .address-text
        padding-right .56rem
        position relative
        padding-left .56rem
        .address-icon
          display block
          height 100%
          line-height 100%
          position absolute
          left 0
          top .16rem
          margin-top -.16rem
          margin-right .2rem
          color #9e9e9e
          font-size .36rem
        .rightarrow
          position absolute
          right 0
          top 50%
          margin-top -.14rem
          color #9e9e9e
          font-size .24rem
</style>
