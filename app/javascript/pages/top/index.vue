<template>
  <div class="container shadow rounded top">
    <div class="container text-center p-3">
      <div class="m-3">
        <h1>欧州サッカークイズ</h1>
      </div>
      <div class="m-3">
        <p>欧州サッカーガチ勢向けの
          <br>
          難問クイズアプリです
        </p>
      </div>
      <div class="m-3">
        <router-link
          :to="{ name: 'QuestionIndex' }"
          class="btn btn-secondary shadow"
        >
          はじめる
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopIndex'
}
</script>

<style scoped>
 .top {
   backdrop-filter: blur(5px);
 }
</style>