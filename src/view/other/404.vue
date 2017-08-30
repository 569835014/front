<template>
  <div class="notFound">
    <img src="../../assets/img/404.png" alt="">
    <!--<a href="">返回上一页</a>-->
    <button @click=" back">返回上一页</button>
  </div>

</template>
<script>
  export default {
    methods: {
      back() {
        history.go(-1)
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .notFound {
    width: 520px;
    height: 400px;
    position: fixed;
    top: 50%;
    margin-top: -220px;
    left: 50%;
    margin-left: -260px;
    img {
      display: block;
      max-width: 100%;

    }
    button {
      background: transparent;
      border: none;
      color: #999;
      display: block;
      text-align: center;
      margin: 30px auto;
      font-size: 18px;
      letter-spacing: 2px;
      width: 112px;
      border-bottom: 1px solid #999;
      line-height: 22px;
      outline: none;

    }
  }
</style>
