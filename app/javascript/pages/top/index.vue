<template>
  <div class="container">
    <div class="container text-center p-3">
      <div class="m-2 p-2">
        <h1>欧州サッカークイズ</h1>
      </div>
      <div class="m-2 p-2">
        <p>欧州サッカーガチ勢向けの
          <br>
          難問クイズアプリです
        </p>
      </div>
      <div class="m-2 p-2">
        <router-link
          :to="{ name: 'QuestionIndex' }"
          class="btn btn-dark shadow col-4"
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
  h1 {
    font-size: 3rem;
    font-weight: bold;
  }

  p {
    font-weight: bold;
  }
</style>