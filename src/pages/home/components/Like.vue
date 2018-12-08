<template>
  <div class="like">
    <div class="like-header">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" />
      猜你喜欢
    </div>
    <ul class="like-list">
      <li class="like-item">
        <img class="like-img" src="http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg" alt="">
        <div class="like-info">
          <div class="like-title">长隆野生动物世界</div>
          <div class="like-comment">
            <span class="like-star">☆☆☆☆☆</span>
            <span class="comment-num">85400条评论</span>
          </div>
          <div class="like-price">
            ￥
            <span class="price">209.5</span>起
            <span class="like-address">广州长隆</span>
          </div>
        </div>
      </li>
      <li class="like-item">
        <img class="like-img" src="http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg" alt="">
        <div class="like-info">
          <div class="like-title">长隆野生动物世界</div>
          <div class="like-comment">
            <span class="like-star">☆☆☆☆☆</span>
            <span class="comment-num">85400条评论</span>
          </div>
          <div class="like-price">
            ￥
            <span class="price">209.5</span>起
            <span class="like-address">广州长隆</span>
          </div>
        </div>
      </li>
      <li class="like-item">
        <img class="like-img" src="http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg" alt="">
        <div class="like-info">
          <div class="like-title">长隆野生动物世界</div>
          <div class="like-comment">
            <span class="like-star">☆☆☆☆☆</span>
            <span class="comment-num">85400条评论</span>
          </div>
          <div class="like-price">
            ￥
            <span class="price">209.5</span>起
            <span class="like-address">广州长隆</span>
          </div>
        </div>
      </li>
      <li class="like-item">
        <img class="like-img" src="http://img1.qunarzz.com/sight/p0/1811/d4/d4a663613604238ea3.img.jpg_200x200_b412a8a2.jpg" alt="">
        <div class="like-info">
          <div class="like-title">长隆野生动物世界</div>
          <div class="like-comment">
            <span class="like-star">☆☆☆☆☆</span>
            <span class="comment-num">85400条评论</span>
          </div>
          <div class="like-price">
            ￥
            <span class="price">209.5</span>起
            <span class="like-address">广州长隆</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeLike'
}
</script>

<style lang='stylus' scoped>
  .like-header
    padding .24rem 0 .26rem
    font-size .32rem
    .title-img
      width .3rem
      height .3rem
      margin-left .2rem
  .like-list
    margin-left .24rem
    .like-item
      padding .2rem 0
      .like-img
        width 2rem
        height 2rem
        float left
      .like-info
        overflow hidden
        padding-left .22rem
        .like-title
          margin-top .26rem
          font-size .32rem
          line-height .44rem
        .like-comment
          margin-top .14rem
          .like-star
            height .28rem
            line-height .28rem
            font-size .28rem
            letter-spacing .02rem
          .comment-num
            font-size .24rem
            line-height .34rem
            margin-left .2rem
        .like-price
          position relative
          margin-top .22rem
          .price
            color #ff8300
            font-size .4rem
          .like-address
            position absolute 
            right .24rem
            bottom 0
</style>
