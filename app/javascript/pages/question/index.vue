<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="col-6 bg-light rounded shadow m-3 p-3">
        <h3 class="text-center">クイズ選択画面</h3>
        <div class="de-flex">
          <router-link :to="{ name: 'AllGenre' }" class="btn btn-dark mt-5">オールジャンル</router-link>
          <router-link :to="{ name: 'ChampionsLeague' }" class="btn btn-dark mt-5">チャンピオンズリーグ</router-link>
          <router-link :to="{ name: 'SerieA' }" class="btn btn-dark mt-5">セリエA</router-link>
          <router-link :to="{ name: 'Premier' }" class="btn btn-dark mt-5">プレミアリーグ</router-link>
        </div>
      </div>
    </div>
    <div class="text-center">
      <router-link :to="{ name: 'TopIndex' }" class="btn btn-dark mt-5">戻る</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'QuestionIndex'
}
</script>

<style scoped>
</style>