
//初始化配置操作根据生产环境还是线上环境
class Api{
  constructor(){

    if(process.env.NODE_ENV==='development'){
      this.BASE_URL='https://easy-mock.com/mock/599aabd4059b9c566dc9e7d5/stores/'
    }else{
       this.BASE_URL='https://easy-mock.com/mock/599aabd4059b9c566dc9e7d5/stores/'
    }
  }
}
export default new Api();
