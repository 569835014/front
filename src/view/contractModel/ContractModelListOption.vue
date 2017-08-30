<template>
  <div class="">
    <Form :label-width="80">
      <Form-item label="门店名称:">
        <Input placeholder="请输入部门名称"></Input>
      </Form-item>
      <Form-item label="合同名称:">
        <Input placeholder="请输入部门名称"></Input>
      </Form-item>
      <Form-item label="备注:">
        <quill-editor ref="myTextEditor"
                      v-model="content"
        >
        </quill-editor>
      </Form-item>
      <Form-item>
        <Button type="primary" @click.active="submit">提交</Button>
        <Button type="ghost" style="margin-left: 8px" @click.active="$router.push({name:'postList'})">取消</Button>
      </Form-item>
    </Form>
  </div>
</template>
<script>
  import {quillEditor} from 'vue-quill-editor'

  export default {
    data() {
      return {
        content: ''
      }
    },
    created() {

    },
    components: {
      quillEditor
    }

  }
</script>
<style lang="stylus">
  .ql-editor
    min-height 300px

  .ql-toolbar, .ql-container
    border-color #dddee1 !important

  .ql-toolbar
    border-top-left-radius 4px
    border-top-right-radius 4px

  .ql-container
    border-bottom-left-radius 4px
    border-bottom-right-radius 4px
</style>
