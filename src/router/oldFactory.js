import load from './load'
import {firstUpCase} from '../common/common'
function childPath(str,item) {
  str=takePath(item.url);
  if(str.indexOf('/')>0){
    str=str.split('/')[1]
  }
  let nameArr=item.url.substr(item.url.indexOf('/')+1).split('/');
  for(let i=1;i<nameArr.length;i++){
    nameArr[i]=nameArr[i].replace('to','');
    nameArr[i]=firstUpCase(nameArr[i]);
  }
  str=nameArr.join('');
  return str
}
function standardize(data,list,level,breadcrumb,parentName) {
  let routes=[];
  let bread=[];
  if(list){
    routes=list;
  }
  if(breadcrumb){
    bread=breadcrumb
  }
  data.map((item,index)=>{
    index++;//生成iview导航认识的层级 例如 1 1-1 1-2
    let hasChild=item.meunList;
    let route={
      meta:{}
    };
    let routeLevel='';
    if(!level){
      routeLevel=index;
    }else{
      routeLevel+=`${level}-${index}`
    }
    route.meta.level=routeLevel;
    route.meta.name=item.name;
    route.meta.icon=item.icon;
    let name="";
    let breadcrumb=bread.slice(0);
    route.meta.arr=breadcrumb;
    if(!parentName){
      name=takePath(hasChild[0].url,item.url);
      route.children=[];
      route.name=name;
      breadcrumb.push({
        metaName:route.meta.name,
        name:route.name,
        path:route.name
      });
      route.path="/"+route.name;
      route.redirect="/"+childPath('',item.meunList[0]);
      let fName=firstUpCase(name);
      route.component=load(`view/${name}`,fName);
      standardize(hasChild,route.children,route.meta.level,breadcrumb,name);

    }else{
      name=childPath(name,item);
      route.name=name;
      route.path="/"+route.name;
      breadcrumb.push({
        metaName:route.meta.name,
        name:route.name,
        path:route.name
      });
      route.component=load(`view/${parentName}`,firstUpCase(name));
    }
    route.meta.arr=breadcrumb;
    if(process.env.NODE_ENV==='development'){
      route.meta.requireAuth=false;//加入这个属性之后进入页面需要权限
    }else{
      route.meta.requireAuth=true
    }

    routes.push(route);
  });
  return routes;
}
function repeat(nav) {//把同名路由的字路由合并
  let arr=standardize(nav);
  let obj={
    rep:[]
  };

  arr.map((item,index)=>{
    if(!obj[item.name]){
      obj[item.name]={
        child:item.children,
        index:index
      };
    }else{
      obj[item.name].child=obj[item.name].child.concat(item.children);
      arr[obj[item.name].index].children=obj[item.name].child;
      arr[index]=null;
    }
  });
  for(let i=arr.length;i>=0;i--){
    if(!arr[i]){
      arr.splice(i,1);
    }
  }
  return arr
}
function takePath(childUrl,parentUrl) {
  if(childUrl){
    if(childUrl.indexOf('/')>=0){
      let arrUrl=childUrl.split('/');
      if(parentUrl){
        return arrUrl[arrUrl.length-2]
      }else{
        return arrUrl.slice(1).join('/')
      }
    }else{
      return childUrl
    }
  }else{
    return takePath(parentUrl);
  }
}
