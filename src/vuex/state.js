import Session from '../common/Session'
const state = {
  userInfo:Session.getItem('user')||{},
  keep:Session.getItem('keep')||[],
  activeMenu:Session.getItem('activeMenu')||'',
  token:"123456"
  // breadcrumb:Session.getItem('Session')||[]
}

export default state
