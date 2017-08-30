<template>
    <div class="">
      <Form :model="item" :label-width="80">
        <Form-item label="部门名称:">
          <Input v-model="item.depName" placeholder="请输入部门名称"></Input>
        </Form-item>
        <Form-item label="门店:">
          <Select >

            <Option value="门店" key="门店">门店</Option>
          </Select>
        </Form-item>
        <Form-item label="备注:">
          <Input  type="textarea" v-model="item.remarks" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入备注"></Input>
        </Form-item>
        <Form-item>
          <Button type="primary" @click.active="submit">提交</Button>
          <Button type="ghost" style="margin-left: 8px" @click.active="$router.push({name:'postList'})">取消</Button>
        </Form-item>
      </Form>
    </div>
</template>
<script>
  import Service from '../../service/post/modify'
  import modify from '../../mixins/modify'
  export default {
    data () {
      return {
        item: {
          depName: '',
          remarks: '',
          index:0,
        },
      }
    },
    created(){
      Service.init(this);
    },
    methods:{
      submit(){
        Service.modify();
      }
    },
    mixins:[modify]
  }
</script>
<style scoped lang="stylus">
</style>
