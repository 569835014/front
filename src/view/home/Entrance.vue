
<template>
  <div class="home">

    <section>
      <div class="options clearfix">
        <div class="options-left">
          <router-link :to="{name:'homeEdit',params: { id: 'new' }}">
            <Button type="primary" icon="plus">添加会员</Button>
          </router-link>

        </div>
        <div class="options-right">
          <Icon type="refresh" :size="20" color="rgb(189,197,213)" @click.native="refresh"></Icon>
          <Icon type="document-text"  :size="20" color="rgb(189,197,213)"></Icon>
          <Icon type="navigate"  :size="20" color="rgb(189,197,213)"></Icon>
          <Icon type="grid"  :size="20" color="rgb(189,197,213)"></Icon>
          <Input  icon="search" placeholder="请输入..." style="width: 200px"></Input>
        </div>

      </div>
      <Table  border  :columns="columns" :data="currentList" ></Table>
      <div style="margin: 10px;overflow: hidden" class="page">
        <div style="float: left;line-height: 32px">显示第 {{paging.pageSize}} 页共 {{paging.totalPage}} 页记录，总共 {{paging.total}} 条记录</div>
        <div style="float: right;">
          <Page :total="paging.total" :current="outPut.pageSize" @on-change="changePage"></Page>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import Service from '../../service/home/home'
  //  import mixin from '../../mixins/mixin'
  export default {
    data () {
      return {
        width:window.screen.width,
        columns: [
          {
            title: '姓名',
            key: 'name',
            align:"center",
          },
          {
            title: '年龄',
            key: 'age',
            align:"center"
          },
          {
            title: '省份',
            key: 'province',
            align:"center"

          },
          {
            title: '市区',
            key: 'city',
            align:"center"

          },
          {
            title: '地址',
            key: 'address',
            align:"center"

          },
          {
            title: '手机号',
            key: 'phone',
            align:"center"
          },
          {
            title: '邮编',
            key: 'zip',
            align:"center"

          },
          {
            title: '操作',
            key: 'action',
            align:"center",
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    icon:"compose",
                    size: 'small',

                  },
                }, '查看'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small',
                    icon:"edit"
                  },

                }, '编辑')
              ]);
            }
          }
        ],
        copyList:[],
        list:[],
        screenPar:{
          name:"",
          phone:""
        },
        outPut:{
          pageSize:1,
          pageNum:10,
        },
      }
    },
    created(){

      let breadcrumb={
        name:this.$route.name,
        meta:this.$route.meta,
        type:'clear'
      }

      Service.init(this);
      Service.login();
      this.mColumns();
    },
    computed: {
      currentList(){
        let index=(this.paging.pageSize-1)*this.paging.pageNum;
        return this.list.slice(index,index+10);
      },
      paging(){
        let obj={
        }
        obj.pageSize=this.outPut.pageSize;
        obj.pageNum=this.outPut.pageNum;
        let total=this.list.length;
        obj.totalPage=Math.ceil(total/obj.pageNum);
        obj.total=total;
        return obj
      },

    },
    methods: {
      changePage(index){
        this.outPut.pageSize=index
      },
      mColumns(){

        if(this.width<768){

          this.columns.map((item,index)=>{
            if(index===0){
              item.fixed='left'
            }
            item.width=150
          })
        }
      },
      refresh(){
        this.list=this.copyList.slice(0);
        this.outPut.pageSize=1;
        this.outPut.pageNum=10
      },
      screen(key){
        this.list=this.copyList.filter((item)=>{

          return item[key].indexOf(this.screenPar[key])>=0;
        });
        this.outPut.pageSize=1
      }
    },
  }
</script>
<style>

</style>
<style lang="less" type="text/less" scoped>
  .condition{
    li{
      display: inline-block;
      height: 57px;
      line-height: 57px;
    }
  }


  .ivu-table-wrapper{
    border-left: none;
  }
  .ivu-table-border th, .ivu-table-border td{
    border-right: none;
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
</style>
