import {pageLoad} from './load'
import {firstUpCase} from '../common/common'
const nav=[
  {
    name: "post",
    meta: {
      "name": "店面部门管理",
      "icon": "fa-building",
      "level": "1",
      "id": 329279642399670272,
      "sid": "329279642399670272",
      "update_by": 329281874847334400,
      "del_flag": "0",
      "create_by": 1,
    },
    children: [
      {
        name: "postList",
        meta: {
          "parent_id": 329279642399670272,
          "parent_id_str": "329279642399670272",
          "id": 329279746305163264,
          "sid": "329279746305163264",
          "level": "2",
          "name": "部门管理",
          "sort": 1,
          "is_system": "1",
          "del_flag": "0",
        },
      }
    ],
  },
  {
    name:"contractModel",
    meta:{
      "name": "合同管理",
      "icon": "fa-file-word-o",
      "sort": 2,
      "level": "1",
      "is_system": "1",
      "id": 329279868220997632,
      "sid": "329279868220997632",
      "update_by": 329281874847334400,
      "del_flag": "0",
      "create_by": 1,
    },
    children:[
      {
        name:"contractModelList",
        meta:{
          "name": "合同模板设置",
          "parent_id": 329279868220997632,
          "sort": 1,
          "level": "2",
          "parent_id_str": "329279868220997632",
          "id": 329279952161603584,
          "sid": "329279952161603584",
          "del_flag": "0",
        }
      },
      {
        name:"contractList",
        meta:{
          "name": "合同管理",
          "parent_id": 329279868220997632,
          "sort": 1,
          "level": "2",
          "parent_id_str": "329279868220997632",
          "id": 329279952161603584,
          "sid": "329279952161603584",
          "del_flag": "0",
        }
      },
      {
        name:"contractCardOperation",
        meta:{
          "name": "会员卡修改审核",
          "parent_id": 329279868220997632,
          "sort": 1,
          "level": "2",
          "parent_id_str": "329279868220997632",
          "id": 329279952161603584,
          "sid": "329279952161603584",
          "del_flag": "0",
        }
      }
    ],
  },
  {
    name:"counselor",
    meta:{
      "icon": "fa-user",
      "sort": 2,
      "level": "1",
      "name": "门店用户管理",
      "id": 329279186264915968,
      "sid": "329279186264915968",
    },
    children:[
      {
        name:"counselorList",
        meta:{
          "icon": "",
          "parent_id": 329279186264915968,
          "sort": 8,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "329279186264915968",
          "id": 340314259613290496,
          "name": "会员管理",
        }
      }
    ]
  },
  {
    name:"storeUserManage",
    meta:{
      "name": "店面用户管理",
      "icon": "fa-users",
      "sort": 2,
      "level": "1",
      "is_system": "1",
      "id": 329299047942717440,
      "sid": "329299047942717440",
    },
    children:[
      {
        name:"roleList",
        meta:{
          "name": "职位管理",
          "parent_id": 329299047942717440,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "329299047942717440",
          "id": 329299213810663424,
          "sid": "329299213810663424",
        }
      },
      {
        name:"userList",
        meta:{
          "name": "职工管理",
          "parent_id": 329299047942717440,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "329299047942717440",
          "id": 329299213810663424,
          "sid": "329299213810663424",
        }
      },
      {
        name:"trainingIndex",
        meta:{
          "name": "老师培训",
          "parent_id": 329299047942717440,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "329299047942717440",
          "id": 329299213810663424,
          "sid": "329299213810663424",
        }
      },
      {
        name:"userAdviserList",
        meta:{
          "name": "顾问管理",
          "parent_id": 329299047942717440,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "329299047942717440",
          "id": 329299213810663424,
          "sid": "329299213810663424",
        }
      },
      {
        name:"userTeacherList",
        meta:{
          "name": "老师管理",
          "parent_id": 329299047942717440,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "329299047942717440",
          "id": 329299213810663424,
          "sid": "329299213810663424",
        }
      }
    ]
  },
  {
    name:"classRoom",
    meta:{
      "name": "教室管理",
      "icon": "fa-dedent",
      "sort": 3,
      "level": "1",
      "is_system": "1",
      "id": 329280025180241920,
      "sid": "329280025180241920",
    },
    children:[
      {
        name:"classRoomList",
        meta:{
          "name": "教室管理",
          "parent_id": 329280025180241920,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "329280025180241920",
          "id": 329280126669815808,
          "sid": "329280126669815808",
        }
      }
    ]
  },
  {
    name:"storeManage",
    meta:{
      "name": "门店管理",
      "icon": "fa-institution ",
      "sort": 3,
      "level": "1",
      "id": 329278879619350528,
      "sid": "329278879619350528",
    },
    children:[
      {
        name:"labelList",
        meta:{
          name:"门店标签管理",
          "icon": "fa-map",
          "parent_id": 329278879619350528,
          "sort": 2,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "329278879619350528",
          "id": 336526365832515584,
          "sid": "336526365832515584",
          "del_flag": "0",
        }
      },
      {
        name:"memberManage",
        meta:{
          name:"会员管理",
          "icon": "",
          "parent_id": 329278879619350528,
          "sort": 3,
          "level": "2",
          "parent_id_str": "329278879619350528",
          "id": 340491300035891200,
          "sid": "340491300035891200",
          "del_flag": "0",
        }
      }
    ]
  },
  {
    name:"subject",
    meta:{
      "name": "课程管理",
      "icon": "fa-book",
      "sort": 6,
      "level": "1",
      "is_system": "1",
      "id": 329280369104781312,
      "sid": "329280369104781312",
    },
    children:[
      {
        name:"subjectList",
        meta:{
          "name": "科目管理",
          "parent_id": 329280369104781312,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "329280369104781312",
          "id": 329280449299873792,
          "sid": "329280449299873792",
        },
      },
      {
        name:"courseList",
        meta:{
          "name": "课程管理",
          "parent_id": 329280369104781312,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "329280369104781312",
          "id": 329280449299873792,
          "sid": "329280449299873792",
        },
      }
    ]
  },
  {
    name:"period",
    meta:{
      "name": "课时管理 ",
      "icon": "fa-calculator",
      "sort": 7,
      "level": "1",
      "is_system": "1",
      "id": 329293991373701120,
      "sid": "329293991373701120",
    },
    children:[
      {
        name:"periodList",
        meta:{
          "name": "课时列表",
          "parent_id": 329293991373701120,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "329293991373701120",
          "id": 329294099477692416,
          "sid": "329294099477692416",
        }
      },
    ],
  },
  {
    name:"courseTerm",
    meta:{
      "name": "开课管理",
      "icon": "fa-check-square",
      "sort": 8,
      "level": "1",
      "is_system": "1",
      "id": 332524955814068224,
      "sid": "332524955814068224",
    },
    children:[
      {
        name:"courseTermStartCourseTerm",
        meta:{
          "name": "开课",
          "parent_id": 332524955814068224,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "332524955814068224",
          "id": 332525421889323008,
          "sid": "332525421889323008",
        }
      },
      {
        name:"courseTermList",
        meta:{
          "name": "开课",
          "parent_id": 332524955814068224,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "332524955814068224",
          "id": 332525421889323008,
          "sid": "332525421889323008",
        }
      },
      {
        name:"courseTermWeekly",
        meta:{
          "name": "周课表",
          "parent_id": 332524955814068224,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "332524955814068224",
          "id": 332525421889323008,
          "sid": "332525421889323008",
        }
      },
      {
        name:"courseTermListView",
        meta:{
          "name": "查看排课",
          "parent_id": 332524955814068224,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "332524955814068224",
          "id": 332525421889323008,
          "sid": "332525421889323008",
        }
      },
      {
        name:"courseTermDayList",
        meta:{
          "name": "日课表",
          "parent_id": 332524955814068224,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "332524955814068224",
          "id": 332525421889323008,
          "sid": "332525421889323008",
        }
      },
      {
        name:"courseTermChangList",
        meta:{
          "name": "调课",
          "icon": "fa-exchange",
          "parent_id": 332524955814068224,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "332524955814068224",
          "id": 332525421889323008,
          "sid": "332525421889323008",
        }
      }
    ]
  },
  {
    name:"statistics",
    meta:{
      name:"数据统计",
      "icon": "",
      "level": "1",
      "is_system": "1",
      "id": 338508511988158464,
      "sid": "338508511988158464",
    },
    children:[
      {
        name:"statisticsByTeacher",
        meta:{
          "name": "老师课时统计",
          "icon": "",
          "parent_id": 338508511988158464,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "338508511988158464",
          "id": 340313551350534144,
          "sid": "340313551350534144",
        }
      },
      {
        name:"statisticsClassHour",
        meta:{
          "name": "课时统计",
          "icon": "",
          "parent_id": 338508511988158464,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "338508511988158464",
          "id": 340313551350534144,
          "sid": "340313551350534144",
        }
      },
      {
        name:"statisticsSubject",
        meta:{
          "name": "报表统计",
          "icon": "",
          "parent_id": 338508511988158464,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "338508511988158464",
          "id": 340313551350534144,
          "sid": "340313551350534144",
        }
      },
      {
        name:"statisticsAdviser",
        meta:{
          "name": "顾问统计",
          "icon": "",
          "parent_id": 338508511988158464,
          "sort": 1,
          "level": "2",
          "is_system": "1",
          "parent_id_str": "338508511988158464",
          "id": 340313551350534144,
          "sid": "340313551350534144",
        }
      }
    ]
  }];

function normal(nav,breadcrumb,parentLevel,parentName) {
  let bread=[];
  if(breadcrumb){
    bread=breadcrumb
  }

  nav.map((item,index)=>{
    index++;
    let name=item.name;
    if(parentName){
        item.component=pageLoad(`view/${parentName}`,firstUpCase(name));

    }else{
         item.component=pageLoad(`view/${name}`,firstUpCase(name));
    }
    let _bread=bread.slice(0)
    item.path=`/${item.name}`;
    if(parentLevel){
      item.meta.level=`${parentLevel}-${index}`
    }else{
      item.meta.level=index
    }
    _bread.push({
      name:item.name,
      metaName:item.meta.name,
      path:item.path
    });
    item.meta.arr=_bread;

    // item.beforeEnter=(to, from, next) => {
    //   try{
    //     next();
    //   }catch (e){
    //     console.info(e)
    //   }
    // };
    if(item.children&&item.children.length){
      item.redirect="/"+item.children[0].name;
      normal(item.children,_bread,index,item.name);
    }
  });
  return nav
};
function addRouter(nav) {
  for(let i=0,j=nav.length;i<j;i++){
    let item=nav[i];

    if(!item.children){
      addChildren(item);
    }else{
       item.children.map((_item)=>{
        addChildren(_item,item.name);
      })
    }
  }
  return nav
}
function addChildren(item,parentName) {
  if(!item.children||item.children.length<=0){
    item.children=[];
    let name=`${item.name}Option`;
    let files=parentName||item.name;
    let arr=[];
    if(item.meta.arr){
      arr=item.meta.arr.slice(0);
    }
    arr.push({
      name:name,
      metaName:'操作'
    });
    item.children.push({
      name:name,
      path:":id",
      component:pageLoad(`view/${files}`,firstUpCase(name)),
      meta:{
        name:"操作",
        arr:arr
      }
    })
  }
}
let routeList=normal(nav);
export {nav};
export  default addRouter(routeList);
