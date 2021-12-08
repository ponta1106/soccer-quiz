import Vue from 'vue'
import Router from 'vue-router'
import TopIndex from "../pages/top/index";
import UserIndex from "../pages/user/index";
import AllGenre from "../pages/question/components/AllGenre";
import ChampionsLeague from "../pages/question/components/ChampionsLeague";
import SerieA from "../pages/question/components/SerieA";
import Premier from "../pages/question/components/Premier";
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
      path: "/allGenre",
      component: AllGenre,
      name: "AllGenre",
    },
    {
      path: "/championsLeague",
      component: ChampionsLeague,
      name: "ChampionsLeague",
    },
    {
      path: "/serieA",
      component: SerieA,
      name: "SerieA",
    },
    {
      path: "/premier",
      component: Premier,
      name: "Premier",
    },
    {
      path: "/users",
      component: UserIndex,
      name: "UserIndex",
    },
  ]
})

export default router