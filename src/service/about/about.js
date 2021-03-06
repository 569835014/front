import Service from '../Service'
Service.isinIt=true;
class About extends Service{
  constructor(){
    super();
  }
  login(){
    let _this=this.vm
    this.common({
      baseURL:"",
      url:'/logo',
      method:'get',
      params:{
        userName:_this.userName,
        pwd:_this.pwd
      },
      success(res){
        _this.saveUserInfo(res);//登录成功后把用户信息保存到vuex里面
        if(_this.redirect){//this.redirect有值说明是被没有登录被拦截，然后转发到登录，登录后才能跳到这个路由，这是为了用户体验
          _this.$router.push({
            name:_this.redirect
          })
        }
      },
    })
  }
  login1(){
    let _this=this.vm
    this.common({
      url:'/logo',
      method:'get',
      params:{
        userName:_this.userName,
        pwd:_this.pwd
      },
      success(res){
        var obj=res.data;
        _this.saveUserInfo(obj);//登录成功后把用户信息保存到vuex里面
        if(_this.redirect){//this.redirect有值说明是被没有登录被拦截，然后转发到登录，登录后才能跳到这个路由，这是为了用户体验
          _this.$router.push({
            name:_this.redirect
          })
        }
      },
      abnormal(res){
        _this.$swal({
          title: '异常',
          text: "自定义异常",
          type: 'warning',
        });
        console.info(res);
      }
    })
  }
  login2(){

    let _this=this.vm
    this.common({
      url:'/logo1',
      method:'get',
      params:{
        userName:_this.userName,
        pwd:_this.pwd
      },
      success(res){
        var obj=res.data;
        _this.saveUserInfo(obj);//登录成功后把用户信息保存到vuex里面
        if(_this.redirect){//this.redirect有值说明是被没有登录被拦截，然后转发到登录，登录后才能跳到这个路由，这是为了用户体验
          _this.$router.push({
            name:_this.redirect
          })
        }
      },
    })
  }
}
export default new About();
