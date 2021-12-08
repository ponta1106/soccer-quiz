import Vue from 'vue'
import Router from 'vue-router'
import TopIndex from "../pages/top/index";
import UserIndex from "../pages/user/index";
import QuestionIndex from "../pages/question/index";

Vue.use(Router)

const router = new Router ({
  mode: 'history',
  routes: [
    {
      path: "/",
      component: TopIndex,
      name: "TopIndex",
    },
    {
      path: "/questions",
      component: QuestionIndex,
      name: "QuestionIndex",
    },
    {
      path: "/users",
      component: UserIndex,
      name: "UserIndex",
    },
  ]
})

export default router