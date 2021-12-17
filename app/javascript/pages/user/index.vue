<template>
  <div class="container col-8 text-center">
    <div
      class="rounded shadow m-3 p-3"
    >
      <h4>ユーザー詳細画面</h4>
      <p>{{ authUser.name }}</p>
      <p>{{ authUser.email }}</p>
      <h4>{{ authUser.name }}さんが作成した問題一覧</h4>
      <p
        v-for="question in authUser_questions"
        :key="question.id"
      >
       {{ question.title }}
      </p>
    </div>
    <router-link
      :to="{ name: 'TopIndex' }"
      class="btn shadow m-5"
    >
      トップへ
    </router-link>
    <router-link
      :to="{ name: 'QuestionIndex' }"
      class="btn shadow m-5"
    >
      クイズ一覧
    </router-link>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"

export default {
  name: 'UserIndex',
  computed: {
    ...mapGetters("users", ["users", "authUser"]),
    ...mapGetters('questions', ['questions']),
    authUser_questions() {
      return this.questions.filter(question => {
        return question.user_id == this.authUser.id
      })
    }
  },
  methods: {
    ...mapActions("users", ["fetchUsers"]),
    ...mapActions('questions',['fetchQuestions']),
  },
  created() {
    this.fetchUsers();
    this.fetchQuestions();
  },
}
</script>