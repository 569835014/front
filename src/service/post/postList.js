import Service from '../Service'

class PostLis extends Service{
  constructor(){
    super();
  }
  queryList(){
    this.common({
      url:"department/list",
      method:"get",
      success:(res)=>{
        this.vm.res=res.data;
      }
    })
  }
  query(){
    this.common({
      url:"department/query",
      method:"get",
      params:{
        depName:this.vm.search
      },
      success:(res)=>{
        this.vm.res=res.data;
      }
    })
  }
}
export default new PostLis();
