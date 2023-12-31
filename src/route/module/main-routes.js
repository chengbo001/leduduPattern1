/// 动态路由
import Layout from "@/layout/index.vue";

export default {
  Layout,
  "account-center": () => import("@/view/account/center.vue"),
  "dashboard-console": () => import("@/view/dashboard/console.vue"),
  "dashboard-workspace": () => import("@/view/dashboard/workspace.vue"),
  "more-form": () => import("@/view/form/moreForm.vue"),
  "base-form": () => import("@/view/form/baseForm.vue"),
  "step-form": () => import("@/view/form/stepForm.vue"),
  "base-list": () => import("@/view/list/baseList.vue"),
  "card-list": () => import("@/view/list/cardList.vue"),
  "a-card-list": () => import("@/view/list/aCardList.vue"),
  "news-list": () => import("@/view/list/newsList.vue"),
  "table-list": () => import("@/view/list/tableList.vue"),
  "result-success": () => import("@/view/result/success.vue"),
  "result-failure": () => import("@/view/result/failure.vue"),
  "result-warning": () => import("@/view/result/warning.vue"),
  "result-info": () => import("@/view/result/info.vue"),
  "error-403": () => import("@/view/error/403.vue"),
  "error-404": () => import("@/view/error/404.vue"),
  "error-500": () => import("@/view/error/500.vue"),
  "permission-test": () => import("@/view/permission/permission.vue"),
  userInfo: () => import("@/view/systemManager/userInfo.vue"),
  systemSetup: () => import("@/view/systemManager/systemSetup.vue"),
  "a-table-list": () => import("@/view/list/aTableList.vue"),
  "b-table-list": () => import("@/view/list/bTableList.vue"),
  "c-table-list": () => import("@/view/list/cTableList.vue"),
  "d-table-list": () => import("@/view/list/dTableList.vue"),
  "e-table-list": () => import("@/view/list/eTableList.vue"),
  "f-table-list": () => import("@/view/list/fTableList.vue"),
  "g-table-list": () => import("@/view/list/gTableList.vue"),
  "a-base-list": () => import("@/view/list/aBaseList.vue"),
  "a-state-list": () => import("@/view/list/aStateList.vue"),
  "b-state-list": () => import("@/view/list/bStateList.vue"),
  "worker-table-list": () => import("@/view/list/workerTableList.vue"),
  "a-base-form": () => import("@/view/form/aBaseForm.vue"),
  "b-base-form": () => import("@/view/form/bBaseForm.vue"),
  "c-base-form": () => import("@/view/form/cBaseForm.vue"),
  "d-base-form": () => import("@/view/form/dBaseForm.vue"),
  "a-more-form": () => import("@/view/form/aMoreForm.vue"),
  "b-more-form": () => import("@/view/form/bMoreForm.vue"),
  "c-more-form": () => import("@/view/form/cMoreForm.vue"),
  "d-more-form": () => import("@/view/form/dMoreForm.vue"),
  "worker-base-form": () => import("@/view/form/workerBaseForm.vue"),
  "a-dashboard-console": () => import("@/view/dashboard/aConsole.vue"),
  "b-dashboard-console": () => import("@/view/dashboard/bConsole.vue"),
  "c-dashboard-console": () => import("@/view/dashboard/cConsole.vue"),
  "d-dashboard-console": () => import("@/view/dashboard/dConsole.vue"),
  "a-box-list": () => import("@/view/boxList/a.vue"),
  "b-box-list": () => import("@/view/boxList/b.vue"),
  "c-box-list": () => import("@/view/boxList/c.vue"),
  "d-box-list": () => import("@/view/boxList/d.vue"),
  "e-box-list": () => import("@/view/boxList/e.vue"),
  notice: () => import("@/view/notice/notice.vue"),
  forum: () => import("@/view/forum/index.vue"),
  "b-forum": () => import("@/view/forum/b.vue"),
  editor: () => import("@/view/editor/index.vue"),
  networkChart: () => import("@/view/chart/network.vue"),
  "a-exercise": () => import("@/view/exercise/index.vue"),
  "a-pic-wrap": () => import("@/view/picWrap/a.vue"),
  "b-pic-wrap": () => import("@/view/picWrap/b.vue"),
  "c-pic-wrap": () => import("@/view/picWrap/c.vue"),
  "d-pic-wrap": () => import("@/view/picWrap/d.vue"),
  "e-pic-wrap": () => import("@/view/picWrap/e.vue"),
  "f-pic-wrap": () => import("@/view/picWrap/f.vue"),
  "a-report": () => import("@/view/createReport/a.vue"),
  "a-map": () => import("@/view/map/a.vue"),
  "b-map": () => import("@/view/map/b.vue"),
  "c-map": () => import("@/view/map/c.vue"),
  "a-detail": () => import("@/view/detail/a.vue"),
  "b-detail": () => import("@/view/detail/b.vue"),
  "a-permission": () => import("@/view/permission/a.vue"),
  "b-permission": () => import("@/view/permission/b.vue"),
  "a-history": () => import("@/view/history/a.vue"),
  "b-history": () => import("@/view/history/b.vue"),
  "c-history": () => import("@/view/history/c.vue"),
  "a-adv": () => import("@/view/adv/a.vue"),
  "b-adv": () => import("@/view/adv/b.vue"),
  "c-adv": () => import("@/view/adv/c.vue"),
  "a-createFile": () => import("@/view/createFile/a.vue"),
  "a-works-history": () => import("@/view/worksHistory/a.vue"),
  "a-function": () => import("@/view/function/a.vue"),
  "b-function": () => import("@/view/function/b.vue"),
  "c-function": () => import("@/view/function/c.vue"),
  "d-function": () => import("@/view/function/d.vue"),
  "e-function": () => import("@/view/function/e.vue"),
  "f-function": () => import("@/view/function/f.vue"),
  "g-function": () => import("@/view/function/g.vue"),
  "h-function": () => import("@/view/function/h.vue"),
  "i-function": () => import("@/view/function/i.vue"),
  "j-function": () => import("@/view/function/j.vue"),
  customerService: () => import("@/view/customerService/a.vue"),
  "a-collapse": () => import("@/view/collapse/a.vue"),
  "b-collapse": () => import("@/view/collapse/b.vue"),
  "c-collapse": () => import("@/view/collapse/c.vue"),
  "a-description": () => import("@/view/description/a.vue"),
  "b-description": () => import("@/view/description/b.vue"),
  "c-description": () => import("@/view/description/c.vue"),
  "d-description": () => import("@/view/description/d.vue"),
  "e-description": () => import("@/view/description/e.vue"),
  "a-base-description": () => import("@/view/description/aBase.vue"),
  "a-item-show": () => import("@/view/itemShow/a.vue"),
  "a-home": () => import("@/view/home/a.vue"),
  xiezuo: () => import("@/view/xiezuo/a.vue"),
  "a-tabs": () => import("@/view/tabs/a.vue"),
  "a-calendar": () => import("@/view/calendar/a.vue"),
  "a-left-and-right": () => import("@/view/leftAndRight/a.vue"),
  "b-left-and-right": () => import("@/view/leftAndRight/b.vue"),
  "c-left-and-right": () => import("@/view/leftAndRight/c.vue"),
  "d-left-and-right": () => import("@/view/leftAndRight/d.vue"),
  "e-left-and-right": () => import("@/view/leftAndRight/e.vue"),
  "f-left-and-right": () => import("@/view/leftAndRight/f.vue"),
  "g-left-and-right": () => import("@/view/leftAndRight/g.vue"),
  "h-left-and-right": () => import("@/view/leftAndRight/h.vue"),
  "i-left-and-right": () => import("@/view/leftAndRight/i.vue"),
  "j-left-and-right": () => import("@/view/leftAndRight/j.vue"),
  "k-left-and-right": () => import("@/view/leftAndRight/k.vue"),
  "l-left-and-right": () => import("@/view/leftAndRight/l.vue"),
  "a-video-monitor": () => import("@/view/videoMonitor/a.vue"),
  "a-screen-list": () => import("@/view/screenList/a.vue"),
};

// 修改路由的地方，写的挺复杂，找1.5h
