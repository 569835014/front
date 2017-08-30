<template>
    <div class="data-table">
      <div class="options clearfix">
        <div class="searchDom" v-if="searchDom">
          <slot name="search" >
            <Input  icon="search" v-model="search" placeholder="请输入..." style="width: 200px" @on-change="queryOfSearch"></Input>
          </slot>
        </div>

        <div class="options-left">
          <router-link :to="link">
            <slot name="add">
              <Button type="primary" icon="plus" >{{linkText}}</Button>
            </slot>

          </router-link>
          <span @click="searchDom=!searchDom">
              <slot name="searchBtn" >
            <Button type="primary" icon="search" >搜索信息</Button>
          </slot>
          </span>

        </div>
        <div class="options-right" slot="options">
          <Icon type="refresh" :size="20" color="rgb(189,197,213)" @click.native="refresh" ></Icon>
          <Icon type="document-text"  :size="20" color="rgb(189,197,213)"></Icon>
          <Icon type="navigate"  :size="20" color="rgb(189,197,213)"></Icon>
          <Select v-model="select" multiple style="width:20px" class="table-columns table-select" >
            <Option key="1" value="1">
              <Checkbox-group v-model="fruit" >
                <Checkbox :label="item.value" v-for="(item,index) in attrs" :key="index" :disabled="fruit.length===1&&fruit[0]===item.value">{{item.label}}</Checkbox>
              </Checkbox-group>
            </Option>
          </Select>


        </div>

      </div>
      <Table  border  :columns="currentColumns"  :data="list"></Table>
      <div style="margin: 10px;overflow: hidden" class="page" v-if="paging">
        <div style="float: left;line-height: 32px">显示第 {{paging.pageSize}} 页共 {{paging.pageNum}} 页记录，总共 {{paging.total}} 条记录</div>
        <div style="float: right;">
          <Page :total="paging.total"  ></Page>
        </div>
      </div>
    </div>
</template>
<script>
  import {extend} from '../common/common.js'
    export default {
      data(){
        return{
          select:[],
          fruit:[],
          search:"",
          searchDom:false,
        }
      },
      created(){
        this.columns.map((item)=>{
          let value=item.key||'option';
          this.fruit.push(value);
          this.time=null;
        })
      },
      props:{
        link:{
          type:Object,
          default(){
            return {}
          }
        },
        columns:{
          type:Array,
          default(){
            return []
          }
        },
        list:{
          type:Array,
          default:function () {
            return []
          }
        },
        paging:{
          type:Object,
          default(){
            return {
              pageSize:10,
              pageNum:1,
              total:null
            }
          }
        },
        linkText:{
          type:String,
          default:"添加会员"
        }
      },
      methods:{

        refresh(){//刷新
          this.$emit('refresh')
        },
        active(){
          console.info(arguments);
        },
        queryOfSearch(){
          clearTimeout(this.time);
          this.time=setTimeout(()=>{
            this.$emit('query',this.search)
          },300)

        }
      },
      computed:{
        //生成checkbox
        attrs(){
          let arr=[]
          for(let key in this.columns){
            let item=this.columns[key];
            let value=item.key||'option';
            arr.push({
              label:item.title,
              value:value
            })
          };
          return arr
        },
        //自定义列
        currentColumns(){
          let columns=[];
          this.fruit.map((item)=>{
            let index=this.keyToIndex[item];
            columns.push(this.columns[index]);
          });
          columns.sort((a,b)=>{
            return this.keyToIndex[a.key||'option']-this.keyToIndex[b.key||'option']>0;
          });
          return columns;
        },
        //列对应的下标
        keyToIndex(){
          let obj={}
          this.columns.map((item,index)=>{
            obj[item.key||'option']=index;
          });
          return obj;
        },
      }
    }
</script>
<style  lang="stylus">
  .table-columns{
    width auto;

    .ivu-checkbox-group-item{
      display block;
      /*float left*/
      text-align left
    }
    .ivu-select-item-selected{
      background white !important;
      color #495060 !important
    }
    .ivu-select-arrow{
      color: rgb(189, 197, 213) !important;
      font-size 20px
    }
    .ivu-select-item:hover{
      background white !important
    }
    .ivu-select-item{
      padding:7px 10px
    }
    .ivu-select-item:after {
      content ".";
      display: block;
      height: 0;
      clear: both;
      visibility: hidden;
    }
    .ivu-select-selection{
      box-shadow none
      border none
      padding 0
    }
    .ivu-select-visible{
      border none
      outline none
    }
    .ivu-tag{
      display none !important
    }
    .ivu-select-placeholder{
      display none !important
    }

  }
  .table-columns
      .ivu-tag-text
        display none
      .ivu-select-dropdown
        width 150px !important

</style>
<style lang="stylus" scoped>
  .searchDom
    margin-bottom 18px
    padding 20px
    background rgb(247,248,248)
</style>
