<template>
    <div class="index">
      <Row type="flex" class="class-info">
        <i-col  :xs="24" :md="12"  class="class-info-left" >
          <Card >
             <div slot="title">班级情况</div>
            <form v-form="form">
              <div>
                用户名：<input type="text" name="username" v-lidate.input v-model="form.username" @click="">
                <p v-if="validations.form.username.result&&validations.form.username.result.flg===false">{{validations.form.username.result.msg}}</p>
              </div>
              <div>
                用户名2：<input type="text" name="username2" v-lidate.input.username v-model="form.username2" @click="">
                <p v-if="validations.form.username2.result&&validations.form.username2.result.flg===false">{{validations.form.username2.result.msg}}</p>
              </div>
              <div>
                idCard：<input type="text" name="idCard" v-lidate.input v-model="form.idCard" @click="">
                <p v-if="validations.form.idCard.result&&validations.form.idCard.result.flg===false">{{validations.form.idCard.result.msg}}</p>
              </div>
              <div>
                电话：<input type="text" name="tel" v-lidate.change v-model="form.tel">
                <p v-if="validations.form.tel.result&&validations.form.tel.result.flg===false">{{validations.form.tel.result.msg}}</p>
              </div>
              <div @click="submit">subitm</div>
            </form>
            <form v-form="form2">
              <div>
                用户名：<input type="text" name="username" v-lidate.input v-model="form2.username" @click="">
                <p v-if="validations.form2.username.result&&validations.form2.username.result.flg===false">{{validations.form2.username.result.msg}}</p>
              </div>
              <div>
                用户名2：<input type="text" name="username2" v-lidate.input.username v-model="form2.username2" @click="">
                <p v-if="validations.form2.username2.result&&validations.form2.username2.result.flg===false">{{validations.form2.username2.result.msg}}</p>
              </div>
              <div>
                idCard：<input type="text" name="idCard" v-lidate.input v-model="form2.idCard" @click="">
                <p v-if="validations.form2.idCard.result&&validations.form2.idCard.result.flg===false">{{validations.form2.idCard.result.msg}}</p>
              </div>
              <div>
                电话：<input type="text" name="tel" v-lidate.change v-model="form.tel">
                <p v-if="validations.form.tel.result&&validations.form.tel.result.flg===false">{{validations.form.tel.result.msg}}</p>
              </div>
              <div @click="submit2">subitm</div>
            </form>
            <!--<input class="form__input" v-model.trim="form.age">-->
            <!--<input class="form__input" v-model.trim="form.name" >-->

          </Card>
        </i-col>
        <i-col  :xs="24" :md="12"  class="class-info-right"  >
          <Card >
            <div slot="title">教师情况</div>
          </Card>
        </i-col>
      </Row>
      <Row type="flex">
        <i-col :xs="24">
          <Card >
            <div slot="title">学员情况</div>
          </Card>
        </i-col>
      </Row>
      <Row>
        <i-col :xs="24">
          <Card >
            <div slot="title">教师情况</div>
          </Card>
        </i-col>
      </Row>
    </div>
</template>
<script>
    export default {
      data(){
        return{

        }
      },
      methods:{
      }
    }
</script>
<style lang="less" scoped>

  .index{

    .ivu-row-flex{
      margin-bottom: 15px;
    }
  }
  @media (max-width:767px){
    .index{
      .class-info-left{
        margin-bottom: 15px;
      }
    }
  }
  @media (min-width:768px){
    .index{
      .class-info-left{
        padding-right: 7.5px;
      }
      .class-info-right{
        padding-left: 7.5px;
      }
    }
  }
</style>
