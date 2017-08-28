import Service from '../Service'
class Home extends Service{
  constructor(){
    super();
  }
  login(){
    let _this=this.vm
    this.common({
      url:'/userList',
      method:'get',
      success(res){
        _this.list=res.list;
        _this.copyList=res.list.slice(0);
      },
    })
  }
}
export default new Home();
