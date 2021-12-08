<template>
  <div class="container col-8 text-center">
    <div
      class="bg-light rounded shadow m-3 p-3"
    >
      <h4>ユーザー詳細画面</h4>
      <p>{{ users[0].name }}</p>
      <p>{{ users[0].email }}</p>
    </div>
      <router-link
        :to="{ name: 'TopIndex' }"
        class="btn btn-dark shadow m-5"
      >
      トップ
    </router-link>
      <router-link
        :to="{ name: 'QuestionIndex' }"
        class="btn btn-dark shadow m-5"
      >
      クイズ一覧
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'UserIndex',
  data() {
    return {
      users: [
        {
          name: 'ponta',
          email: 'example.com'
        }
      ]
    }
  }
}
</script>