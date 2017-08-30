<template>
  <div class="right-page">
      <section>
        <data-table linkText="添加模板"
                    :columns="columns"
                    :list="list"
                    :paging="paging"
                    :link="{name:'contractModelListOption',params:{id:'add',list:list}}"
        >
          <div slot="search">
            <Form  :label-width="80" inline>
              <row>
                <Col :xs="12" :sm="12" :md="12" :lg="4">
                  <FormItem label="选择器">
                    <Select placeholder="请选择">
                      <Option value="beijing">北京市</Option>
                      <Option value="shanghai">上海市</Option>
                      <Option value="shenzhen">深圳市</Option>
                    </Select>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="12" :md="12" :lg="4">
                  <FormItem label="合同编号">
                    <Input type="text"  placeholder="Username" ></Input>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="12" :md="12" :lg="4">
                  <FormItem label="顾问名称">
                    <Input type="text"  placeholder="Username" ></Input>
                  </FormItem>
                </Col>
                <Col :xs="12" :sm="12" :md="12" :lg="4">
                  <FormItem label="学员名称">
                    <Input type="text"  placeholder="Username"></Input>
                  </FormItem>
                </Col>
                <Col :xs="24" :sm="24" :md="24" :lg="8">
                  <FormItem label="签约时间">
                    <DatePicker type="date"  placeholder="选择日期" style="width: 46%"></DatePicker>到
                    <DatePicker type="date"  placeholder="选择日期" style="width: 46%"></DatePicker>
                  </FormItem>
                </Col>
              </row>
            </Form>
          </div>
        </data-table>
      </section>

      <router-view class="option-link"></router-view>
    </div>
</template>
<script>

  import DataTable from '../../components/DataTable.vue'
  import Service from '../../service/contract/template'
  export default {
    data(){
      return {
          columns: [
            {
              title: '合同模板名称',
              key: 'templateName',
              align: "center",
            },
            {
              title: '创建时间',
              key: 'createTime',
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
          list: [],
          paging: {}
        }
    },
    created(){
      Service.init(this);
      Service.list();
    },
    components: {
      DataTable
    }
  }
</script>
<style lang="stylus" scoped>
  .ivu-form-inline .ivu-form-item
    margin-bottom 5px
    margin-top 5px
    width 100%

</style>
