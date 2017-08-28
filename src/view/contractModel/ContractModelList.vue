<template>
    <div class="right-page">
      <section>
        <data-table linkText="添加模板"
                    :columns="columns"
                    :list="list"
                    :paging="paging"
                    :link="{name:'contractModelListOption',params:{id:'add',list:list}}"
        ></data-table>
      </section>

      <router-view class="option-link"></router-view>
    </div>
</template>
<script>
  import DataTable from '../../components/DataTable.vue'
  import Service from '../../service/contract/template'
  export default {
    data(){
      return{
        columns: [
          {
            title: '合同模板名称',
            key: 'templateName',
            align:"center",
          },
          {
            title: '创建时间',
            key: 'createTime',
            align:"center",
          },
          {
            title: '操作',
            align:"center",
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small',
                    icon:'compose'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.$router.push({
                        name:"postListOption",
                        params:{
                          id:params.row.id,
                          item:params.row,
                          index:params.index
                        }
                      });
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small',
                    icon:'close'
                  },
                  on: {
                    click: () => {
                      this.remove(params.index)
                    }
                  }
                }, '删除')
              ]);
            }
          }
        ],
        list:[],
        paging:{}
      }
    },
    created(){
      Service.init(this);
      Service.list();
    },
    components:{
      DataTable
    }

  }
</script>
<style scoped>
</style>
