<template>
  <div class="preparation">
    <img src="../../assets/img/preparation.png" alt="">
    <a href="/">返回首页</a>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="less" type="text/less" scoped>
  .preparation {
    img {
      display: block;
      margin: 40px auto;
      max-width: 100%;
      @media screen and (max-width: 560px) {
        width: 90%;
      }
    }
    a {
      /*text-decoration: underline;*/
      color: #999;
      display: block;
      text-align: center;
      margin: 10px auto;
      font-size: 18px;
      letter-spacing: 2px;
      width: 80px;
      border-bottom: 1px solid #999;
      line-height: 20px;
    }
  }
</style>
