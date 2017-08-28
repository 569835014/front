import Service from '../Service'

class Modify extends Service{
  constructor(){
    super();
  }
  modify(){
    this.common({
      url:"department/modify",
      data:this.vm.item,
      success:(res)=>{
        this.vm.item=res.data;
        if( this.vm.$route.params.list){

          this.vm.$route.params.list.push( this.vm.item);
        }
        console.info( this.vm.item);
        this.vm.$router.push({
          'name':"postList"
        })
      }
    })
  }
}
export default new Modify();
