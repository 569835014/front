import * as NAME from '../common/constant'
import {keepAction} from '../common/common'
export const saveUserInfo = function ({commit}, userInfo) {
  commit(NAME.USER_INFO, userInfo);
};
export const saveKeep = function ({commit,state}, keep) {
  keepAction(keep,state.keep,(list)=>{
    if(list){
      keep=list;
    }
    commit(NAME.KEEP, keep);
  })

};
export const saveactiveMenu = function ({commit}, activeMenu) {
  commit(NAME.ACTIVE_MENU, activeMenu);
};
// export const saveBreadcrumb = function ({commit,state}, breadcrumb) {
//   let arr=state.breadcrumb.slice(0,breadcrumb.level);
//   arr[arr.length-1]=breadcrumb
//   commit(NAME.BREADCRUMB, arr);
// };

