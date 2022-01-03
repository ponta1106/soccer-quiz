import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import TopIndex from "../pages/top/index";
import UserIndex from "../pages/user/index";
import QuestionIndex from "../pages/question/index";
import RegisterIndex from "../pages/register/index";
import LoginIndex from "../pages/login/index";
import ContactIndex from "../pages/contact/index";

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
      meta: { requiredAuth: true },
    },
    {
      path: "/users",
      component: UserIndex,
      name: "UserIndex",
    },
    {
      path: "/register",
      component: RegisterIndex,
      name: "RegisterIndex",
    },
    {
      path: "/login",
      component: LoginIndex,
      name: "LoginIndex",
    },
    {
      path: "/contact",
      component: ContactIndex,
      name: "ContactIndex",
    }
  ]
});

router.beforeEach((to, from, next) => {
  store.dispatch('users/fetchAuthUser').then((authUser) => {
    if (to.matched.some(record => record.meta.requiredAuth) && !authUser) {
      next({ name: 'LoginIndex' });
    } else {
      next();
    }
  })
});

export default router