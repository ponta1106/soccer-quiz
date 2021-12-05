<template>
  <div class="container col-8 text-center">
    <div
      class="bg-light rounded shadow m-3 p-3"
    >ユーザー詳細画面
    </div>
      <router-link
        :to="{ name: 'QuestionIndex' }"
        class="btn btn-dark shadow m-5"
      >
      クイズ一覧へ
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'UserIndex',
  data() {
    return {
    }
  }
}
</script>