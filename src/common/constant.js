/**
 * 常量键值对
 */
import Api from '../api/Api'
const USER_INFO='USER_INFO';
const SESSIONSTORAGE="sessionStorage";
const LOCALSTORAGE="localStorage";
const BASE_URL=Api.BASE_URL;
const KEEP="KEEP";//快捷导航
const BREADCRUMB="BREADCRUMB";
const ACTIVE_MENU="ACTIVE_MENU";
export {USER_INFO,SESSIONSTORAGE,LOCALSTORAGE,BASE_URL,KEEP,BREADCRUMB,ACTIVE_MENU}
var a={
  "code": "S0001",
  "msg": "",
  "data": {
    "list|10": [{
      "id": "@id()",
      "depName": "@string()",
      "remarks": "@csentence(3,10)"
    }],
    "paging": {
      "pageSize": 1,
      "pageNum": 10,
      "total": 100
    }
  }
}
