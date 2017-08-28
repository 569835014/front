import Vue from 'vue'
import Router from 'vue-router'
import load from './load'
import routeList from './factory'
Vue.use(Router);
let routes= [
  {
    path: '/',
    redirect:'/app'//重定向到home页面
  },
  {
    path:"/app",
    redirect:'/index',
    component:load('view/app','AppEntrance'),
    meta:{
    },
    children:[
      {
        path:"/about",
        name:"about",
        meta:{
          name:'关于',
          requireAuth:true
        },
        component:load('view','About')
      },
      {
        path:"/vuetifyjs",
        name:"vuetifyjs",
        meta:{
          name:'关于',
        },
        component:load('view','Vuetifyjs')
      },
      {
        path:"/home",
        name:"home",
        redirect:'/homeEnter',
        component:load('view','Home'),
        children:[
          {
            path:"/homeEnter",
            name:"homeEnter",
            component:load('view/home','Entrance'),

            meta:{
              breadcrumb:true,
              name:"会员管理",

            }
          },
          {
            path:"/update/:id",
            name:"homeEdit",
            component:load('view/home','HomeEdit'),
            meta:{
              name:"编辑",
            }
          },
          {
            path:"/homeCharts",
            name:"homeCharts",
            component:load('view/home','ECharts'),
            meta:{
              name:"分析统计"
            }
          }
        ],
        meta:{
          name:"会员管理",
        }
      },
      {
        path:'/preparation',
        name:'preparation',
        meta:{
          name:'网站建设'
        },
        component:load('view/other','Preparation')
      },
      {
        path:'/user',
        name:'user',
        meta:{
          name:'用户登录'
        },
        component:load('view','User')
      },
      {
        path:'/index',
        name:'index',
        meta:{
          level:1,
          name:"首页",
          arr:[
            {
              name:"index",
              metaName:"首页"
            }
          ]
        },
        component:load('view','Index')
      },
      {
        path:'/update',
        name:'update',
        component:load('view','Update')
      }
    ]
  },
  {
    path:"*",
    name:"404",
    meta:{
      name:'404'
    },
    component:load('view/other','404')
  },
  {
    path:"/login",
    name:"login",
    meta:{
      name:"登录"
    }
  }
];
const breadcrumbWork=function (obj,arr){
  if(!arr){
    arr=[];
  }
  if(!obj.meta){
    return;
  }
  let bread={
    name:obj.name,
    path:obj.path,
    metaName:obj.meta.name
  }
  if(!obj.meta.breadcrumb){
    arr.push(bread);
  }
  obj.meta.arr=arr.slice(0);
  if(obj.children){
    for(let i=0;i<obj.children.length;i++) {
      let newArr=arr.slice(0)
      breadcrumbWork(obj.children[i], newArr);
    }
  }
};
const addBreadcrumb=function (route) {
  route.map((item)=>{
    breadcrumbWork(item);
  });
  return route;
};
routes=addBreadcrumb(routes);//为路由添加面包屑导航
routes[1].children=routes[1].children.concat(routeList);
console.info(routes);
export default new Router({
  linkActiveClass:"front-active",
  mode: process.env.NODE_ENV==='development'?'history':"hash",
  routes:routes
})


