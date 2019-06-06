import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/home'   //重定向
    },
    {
      path: '/home',
      name: 'Home',
      meta: {
        require: true
      },
      component: ()=>import("@/page")
    },
    {
      path: '/login',
      name: 'Login',
      component: ()=>import("@/components/login")
    },
    {
      path: '**',   // 错误路由
      redirect: '/home'   //重定向
    },
  ]
})
export default router;
router.beforeEach((to, form, next) => {
  if(to.name!="Login" && to.meta.require) {
    router.push({path: "/login"})
  }
  next()
})
