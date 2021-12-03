<template>
  <div class="col-12 col-lg-4">
    <div
      class="bg-light rounded shadow m-3 p-3"
    >クイズ一覧画面
    </div>
      <router-link
      :to="{ name: 'TopIndex' }"
      class="btn btn-dark shadow m-5"
    >
      戻る
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'QuestionIndex'
}
</script>