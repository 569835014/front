
<template>
   <div id="home">
     <keep-alive >
       <router-view></router-view>
     </keep-alive>

   </div>
</template>
<style lang="less">
  #home{
    .options{
      margin: 0 0 10px;
      .options-left{
        float: left;
        .ivu-btn{
          border-radius: 25px;
        }
      }
      .options-right{
        text-align: right;
        float: right;
        >i{
          margin-right: 10px;
          cursor: pointer;
          transition: 0.5s;
          display: inline-block;
          transform: translateY(6px);
        }
        >i:hover{
          color: rgb(51,144,255) !important;
        }
        >i:last-child{
          margin-right: 0;
        }
      }
    }
  }
</style>
<style lang="less" scoped>
  .item-group-title{
    padding: 20px 0 30px;
    border-bottom: 2px solid rgb(227,232,238);
    margin-bottom: 20px;
  }

</style>

