<template>
  <div class="postList right-page">
    <section>
      <data-table v-if="res.list"
                  @refresh="refresh"
                  @query="queryOfSearch"
                  :paging="res.paging"
                  :columns="columns"
                  :list="res.list"
                  :link="{name:'postListOption',params:{id:'add',list:res.list}}"
      >

      </data-table>
    </section>
    <router-view class="option-link"></router-view>
  </div>
</template>
<script>
  import Service from '../../service/post/postList'
  import DataTable from '../../components/DataTable.vue'

  export default {
    data() {
      return {
        res: {},
        columns: [
          {
            title: '部门姓名',
            key: 'depName',
            align: "center",
          },
          {
            title: '备注',
            key: 'remarks',
            align: "center",
          },
          {
            title: '操作',
            align: "center",
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small',
                    icon: 'compose'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.$router.push({
                        name: "postListOption",
                        params: {
                          id: params.row.id,
                          item: params.row,
                          index: params.index
                        }
                      });
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small',
                    icon: 'close'
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
        search: ''
      }
    },
    created() {
      Service.init(this);
      Service.queryList();
    },
    methods: {
      show() {
        console.info(arguments)
      },
      queryOfSearch(search) {
        this.search = search;
        Service.query()
      },
      remove(index) {
        this.res.list.splice(index, 1)
      },
      refresh() {
        Service.queryList();
      }
    },
    components: {
      DataTable
    }
  }
</script>
<style scoped lang="stylus">
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
