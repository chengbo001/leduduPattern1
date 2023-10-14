/// 基础路由
export default [
  {
    path: "/",
    redirect: "/aMenu",
    hidden: true,
  },
  {
    path: "/login",
    component: () => import("@/view/account/login.vue"),
    meta: {
      title: "登录",
    },
    hidden: true,
  },
];
