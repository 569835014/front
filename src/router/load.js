
import arr from './router.json'
console.info(arr);
function load (url,component) {//按需加载组件
  let _router=url||'components';
  return () => System.import(`../${_router}/${component}`)


}
export  function pageLoad(url,component) {
  let _router=url||'components';
  let page=component+'.vue';
  if(arr.indexOf(page)>=0){
    return () => System.import(`../${_router}/${component}`)
  }else{
    return () => System.import(`../view/other/Preparation.vue`)
  }

}
// export function  loadTry(url) {
//
//    const component = resolve => {
//     // require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
//     // （代码分块）
//
//      try{
//        // console.info("window.require.ensure(['"+url+"'],function(){window.resolve(window.require('"+url+"'))})")
//        require.ensure([`${url}`],function(){resolve()})
//        // require.ensure([url], () => {
//        //
//        //   resolve(require(`${url}`));
//        // })
//       // new Function("window.require.ensure(['"+url+"'],function(){window.resolve(window.require('"+url+"'))})");
//        // require.ensure([url],function () {
//        //   resolve(require(url));
//        // });
//
//      }catch (e){
//        console.info(e);
//        require.ensure(['../view/other/Preparation.vue'], () => {
//
//          resolve(require("../view/other/Preparation.vue"));
//        })
//      }
//
//   }
//   return component
// }

export default load
