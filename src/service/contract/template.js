import Service from '../Service'
Service.isinIt=true;
class Template extends Service{
  constructor(){
    super();
  }
  list(){
    this.common({
      url:"contractManage/templateList",
      method:"get",
      success:(res)=>{
        let json=res.data;
        this.vm.list=json.list;
        this.vm.paging=json.paging;
      }
    })
  }
}
export default new Template();
