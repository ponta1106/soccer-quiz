<template>
  <div class="container col-8 text-center">
    <div
      class="rounded shadow m-3 p-3"
    >
      <h4>ユーザー詳細画面</h4>
      <p>{{ authUser.name }}</p>
      <p>{{ authUser.email }}</p>
    </div>
    <h4>登録ユーザー一覧</h4>
    <p
      v-for="user in users"
      :key="user.id"
    >{{ user.name }}</p>
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
    ...mapGetters("users", ["users", "authUser"])
  },
  methods: {
    ...mapActions("users", ["fetchUsers"])
  },
  created() {
    this.fetchUsers();
  },
}
</script>