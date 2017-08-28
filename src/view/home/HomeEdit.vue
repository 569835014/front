
<template>
   <div class="home">
     <div>编辑</div>
     <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80" class="editForm">
       <Form-item label="姓名" prop="name">
         <Input v-model="formValidate.name" placeholder="请输入姓名"></Input>
       </Form-item>
       <Form-item label="邮箱" prop="mail">
         <Input v-model="formValidate.mail" placeholder="请输入邮箱"></Input>
       </Form-item>
       <Form-item label="城市" prop="city">
         <Select v-model="formValidate.city" placeholder="请选择所在地">
           <Option value="beijing">北京市</Option>
           <Option value="shanghai">上海市</Option>
           <Option value="shenzhen">深圳市</Option>
         </Select>
       </Form-item>
       <Form-item label="手机号" prop="tel">
         <Input v-model="formValidate.tel" placeholder="请输入手机号"></Input>
       </Form-item>
       <Form-item label="地区联动" prop="addr">
         <Cascader :data="data" trigger="hover"></Cascader>
       </Form-item>
       <Form-item label="选择日期" class="datetime">
         <Row>
           <Col span="11">
           <Form-item prop="date">
             <Date-picker  type="date" placeholder="选择日期" v-model="formValidate.date"></Date-picker>
           </Form-item>
           </Col>
           <Col span="2" style="text-align: center">-</Col>
           <Col span="11">
           <Form-item prop="time">
             <Time-picker type="time" placeholder="选择时间" v-model="formValidate.time"></Time-picker>
           </Form-item>
           </Col>
         </Row>
       </Form-item>
       <Form-item label="性别" prop="gender">
         <Radio-group v-model="formValidate.gender">
           <Radio label="male">男</Radio>
           <Radio label="female">女</Radio>
         </Radio-group>
       </Form-item>
       <Form-item label="爱好" prop="interest">
         <Checkbox-group v-model="formValidate.interest">
           <Checkbox label="吃饭"></Checkbox>
           <Checkbox label="睡觉"></Checkbox>
           <Checkbox label="跑步"></Checkbox>
           <Checkbox label="看电影"></Checkbox>
         </Checkbox-group>
       </Form-item>
       <Form-item label="介绍" prop="desc">
         <Input v-model="formValidate.desc" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="请输入..."></Input>
       </Form-item>
       <Form-item>
         <Button type="primary" @click="handleSubmit('formValidate')">提交</Button>
         <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">重置</Button>
       </Form-item>
     </Form>
   </div>
</template>
<script>
  import Service from '../../service/home/home'
//  import mixin from '../../mixins/mixin.js'
  export default {
    data () {
      return {
        formValidate: {
          name: '',
          mail: '',
          city: '',
          tel:'',
          addr:'',
          gender: '',
          interest: [],
          date: '',
          time: '',
          desc: ''
        },
        data: [{
          value: 'beijing',
          label: '北京',
          children: [
            {
              value: 'gugong',
              label: '故宫'
            },
            {
              value: 'tiantan',
              label: '天坛'
            },
            {
              value: 'wangfujing',
              label: '王府井'
            }
          ]
        }, {
          value: 'jiangsu',
          label: '江苏',
          children: [
            {
              value: 'nanjing',
              label: '南京',
              children: [
                {
                  value: 'fuzimiao',
                  label: '夫子庙',
                }
              ]
            },
            {
              value: 'suzhou',
              label: '苏州',
              children: [
                {
                  value: 'zhuozhengyuan',
                  label: '拙政园',
                },
                {
                  value: 'shizilin',
                  label: '狮子林',
                }
              ]
            }
          ],
        }]
        ,
        ruleValidate: {
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ],
          city: [
            { required: true, message: '请选择城市', trigger: 'change' }
          ],
          tel:[
            { required: true, message: '手机号不能为空', trigger: 'blur'},
            { pattern: /^1(3|4|5|7|8)\d{9}$/,message: '手机号格式不正确', trigger: 'blur'}
          ],
//          addr:[
//            { required: true, message: '不能为空'}
//          ],
          gender: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          interest: [
            { required: true,type: 'array', min: 1, message: '至少选择一个爱好', trigger: 'change' },
            { type: 'array', max: 2, message: '最多选择两个爱好', trigger: 'change' }
          ],
          date: [
            { required: true, type: 'date', message: '请选择日期', trigger: 'change' }
          ],
          time: [
            { required: true, type: 'date', message: '请选择时间', trigger: 'change' }
          ],
          desc: [
            { message: '请输入个人介绍', trigger: 'blur' },
            { type: 'string', min: 20, message: '介绍不能少于20字', trigger: 'blur' }
          ]
        }
      }

    },
    created(){
    },
    computed: {

    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!');
          } else {
            this.$Message.error('表单验证失败!');
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }

    },
  }
</script>
<style>
  .ivu-form-item-content{
    /*width:100%;*/
  }

  .ivu-form-item .ivu-form-item .ivu-form-item-content{
     width:100%;
  }

</style>
<style lang="less" type="text/less" scoped>


  .ivu-form-item{
    width:60%;
    margin:0 auto;
    margin-bottom:24px;
    @media screen and (max-width:768px){
      width: 80%;
    }
  }
  .ivu-row{
    .ivu-form-item {
      width:100%;
      margin-bottom:0;
      .ivu-date-picker{
        width:100%;
      }
    }
  }


</style>
