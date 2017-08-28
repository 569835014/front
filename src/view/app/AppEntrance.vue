<template>
  <div id="app-entrance">
    <div class="mask" ref="mask" :class="{'mask-open':mask}" @click="navigator"></div>
    <div class="app-top">
      <div class="navicon" @click="navigator">
        <Icon type="navicon-round" color="white" size="24"></Icon>
      </div>
      <div class="logo">
        <img src="../../assets/img/logo_1.png" alt="">
      </div>
      <div class="user">
        <ul>
          <li>
            <img src="../../assets/img/u=1145910223,109501347&fm=27&gp=0.jpg" alt="">
          </li>
          <li>
            <Icon type="person"></Icon>

          </li>
          <li>
            <Icon type="edit"></Icon>
          </li>
        </ul>


      </div>
    </div>
    <Row type="flex" class="body-content">
      <i-col  :xs="12" :md="0"  :lg="3" ref="left" class="app-left" :class="{'app-left-open':openNav}">

        <Menu theme="light" width="auto" :active-name="activeMenu+''" :open-names="[openName]" :accordion="true">
          <Menu-item name="1" class="first-menu">
            <router-link tag="div" :to="{name:'index'}">
              <Icon type="document-text"></Icon>
              首页
            </router-link>

          </Menu-item>
          <Submenu v-for="(item,index) in routers" :name="item.meta.level" :key="`par${index}`">
            <template slot="title">
              <Icon :type="item.icon"></Icon>
              {{item.meta.name}}
            </template>
            <Menu-item :name="list.meta.level||50" v-for="(list,_index) in item.children" :key="`chi${index}`">
              <router-link :to="{name:list.name}" tag="div">
                {{list.meta.name}}
              </router-link>
            </Menu-item>
          </Submenu>
          <Submenu name="11">
            <template slot="title">
              <Icon type="ios-people"></Icon>
              门店管理
            </template>
            <Menu-item name="1-1" >
              <router-link :to="{name:'homeEdit',params: { id: 'new' }}" tag="div">
                新增用户
              </router-link>
            </Menu-item>
            <Menu-item name="1-2">
              <router-link :to="{name:'homeEnter'}" tag="div">
                会员管理
              </router-link>
            </Menu-item>
            <Menu-item name="1-3">
              <router-link :to="{name:'homeCharts'}" tag="div">
                统计分析
              </router-link>
            </Menu-item>
          </Submenu>
        </Menu>
      </i-col>
      <i-col  :xs="24"  :md="24" :lg="21" ref="right" class="app-right">
        <div class="layout-content">
          <div class="table-filter">
            <Tabs>
              <Tab-pane label="门店管理" icon="social-apple"></Tab-pane>
              <Tab-pane label="门店管理" icon="social-windows"></Tab-pane>
              <Tab-pane label="门店管理" icon="social-tux"></Tab-pane>
            </Tabs>

          </div>
          <div class="page">
            <div class="item-group-title">
              <Breadcrumb v-if="$route.meta.arr">
                <Breadcrumb-item :href="item.path" v-for="(item,index) in $route.meta.arr" :key="index"> <Icon type="levels"></Icon> {{item.metaName}}</Breadcrumb-item>
              </Breadcrumb>
            </div>
            <keep-alive >
              <router-view v-if="keepList.indexOf($route.name)>=0">
                <!-- 这里是会被缓存的视图组件，比如 Home！ -->
              </router-view>
            </keep-alive>

            <router-view v-if="keepList.indexOf($route.name)<0">
              <!-- 这里是不被缓存的视图组件，比如 Edit！ -->
            </router-view>

          </div>

        </div>
      </i-col>
    </Row>
  </div>
</template>

<script>

  import { mapGetters ,mapActions} from 'vuex'
  import routers from '@/router/factory'
  import {nav} from '@/router/factory'
  export default {
    name: 'app',
    data(){
      return{
        openNav:false,
        mask:false,
        breadcrumb:[],
        routers,
        nav
      }
    },
    created(){
    },
    mounted(){
      this.$nextTick(function () {
        this.$refs.right.$el.style.left=this.$refs.left.$el.offsetWidth+'px';
      })
    },
    computed: {
      ...mapGetters([
        'keepList',
        'activeMenu'
      ]),
      isLgScreen(){
        let flag=true;
        if(window.screen.width<1199){
          flag=false
        }
        return flag
      },
      openName(){
          if(this.activeMenu){
            try{
              return this.activeMenu.split('-')[0]*1
            }catch (e){
              return this.activeMenu
            }
          }
         return 1
      }
    },
    methods:{
      ...mapActions([
        'saveKeep'
      ]),
      navigator(){

        this.openNav=!this.openNav;
        if(!this.openNav){
          setTimeout(()=>{
            this.mask=this.openNav
          },350)
        }else{
          this.mask=this.openNav
        }
      },
      open(str){

        if(str==='1-2'){
          this.$router.push({
            name:""
          })
        }else if(str==='1-1'){

        }
      }
    },
    watch:{
      '$route':function (router) {
//        this.saveKeep(router.name);
      }
    }
  }
</script>

<style lang="less" type="text/less">
  @import '~iview/src/styles/index.less';
  .clearfix:after{
    clear: both;
    content: ".";
    display: block;
    font-size: 0;
    height: 0;
    line-height: 0;
    visibility: hidden;
  }
</style>
<style lang="less" scoped>
  .item-group-title{
    padding: 20px 0 30px;
    border-bottom: 2px solid rgb(227,232,238);
    margin-bottom: 20px;
  }
</style>
<style lang="stylus">
  .right-page
    position relative;
    .option-link
      width 100%;
      height 100%
      position absolute
      top 0
      left 0
      background white
      z-index 10
</style>
<style>
  .body-content >div{
    height:calc(100vh - 60px);
  }

  .mask{
    width: 100%;
    height: calc(100vh - 60px);
    background: rgba(0,0,0,0.5);
    position: fixed;
    z-index: 996;
    display: none;
    top:60px;
    transition: 0.5s;
  }
</style>
<style lang="less" scoped>
  #app-entrance{

    .app-top{
      height: 60px;
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      z-index: 998;
      background-color: #2b83f9;
      background-image: linear-gradient(143deg,#2945cb 20%,#2b83f9 81%,#3a9dff);
      .navicon,.logo{
        float: left;
        height: 60px;
        display: none;
        margin-left: 20px;
        position: relative;
        i{
          line-height: 60px;
        }
      }
      .logo{
        display: block;
        img{
          position: absolute;
          top:50%;
          transform: translateY(-50%);
        }

      }
      .user{
        float: right;
        ul{
          li{
            float: left;
            height: 60px;
            line-height: 60px;
            margin-right: 20px;
            font-size: 16px;
            color: white;
            cursor: pointer;
            img{
              width: 40px ;
              height: 40px;
              border-radius: 50%;
              margin-top: 10px;
            }
          }
        }
      }
    }
    .app-left{
      box-sizing: border-box;
      border-right: 1px solid rgb(221,222,225);
      position: fixed;
      overflow-y: auto;
    }
    .body-content{
      padding-top: 60px;
      .table-filter{
        height: 56px;
        position: absolute;
        width: 100%;
        right: 0;
        z-index: 9;
        background: #fff;
      }
      .ivu-menu-submenu,.first-menu{
        /*i{*/
          /*display: inline-block;*/
          /*margin-right: 0;*/
          /*transform: translateX(-8px);*/
        /*}*/
      }
      .ivu-menu-submenu .ivu-menu-item,.first-menu{
        >div{
          padding-left: 50px;
        }

      }
      .ivu-menu-item{
        padding:  0;
        >div{
          padding: 14px 24px;
          width: 100%;
        }
      }
      .ivu-menu-item-active:not(.ivu-menu-submenu){
        border-right: 2px solid #2d8cf0 !important;
      }
      .ivu-menu-vertical.ivu-menu-light:after{
        width: 0;
      }
      .page{
        padding: 66px 15px 0;
      }
    }

  }

  @media (max-width:1199px){
    .logo{
      display: none !important;
    }
    .app-left{
      z-index: 998;
      width: 25vw !important;
      left:0;
      display: block;
      background: white;
      height: 100vh;
      transform: translate3d(-100%,0,0);
      transition: 0.5s;
    }
    .app-left-open{
      transform: translate3d(0,0,0);
    }
    .mask-open{
      display: block !important;
    }
    .app-right{
      left: 0 !important;
    }
    .navicon{
      display: block !important;
    }
  }
  @media (min-width: 768px) and (max-width:992px){
    .app-left{
      width: 35vw !important;
    }
  }
  @media  (max-width:767px){
    .app-left{
      width: 60vw !important;
    }
  }
</style>
<style lang="less">
  .ivu-table-border th, .ivu-table-border td{
    border-right: none;
  }
  .ivu-table:after{
    width: 0;
  }
  .ivu-table th{
    background: white;
  }
  .options{
    .ivu-input{
      border-radius: 24px;
    }
  }
  .table-filter{
    .ivu-tabs-tab{
      line-height: 56px;
      height: 56px;
      padding: 0 15px;
    }
    .ivu-tabs-bar{
      margin-bottom: 0;
    }
    .ivu-tabs-content{
      display: none;
    }
  }

</style>
