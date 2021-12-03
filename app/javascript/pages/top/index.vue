<template>
  <div>
    <div class="text-center">
      <h3>ガチ勢じゃないとわからない？</h3>
      <h2>欧州サッカークイズ</h2>
      <div class="mt-4">欧州サッカーファンが、知識を腕試しするクイズアプリです。</div>
      <router-link
        :to="{ name: 'QuestionIndex' }"
        class="btn btn-dark shadow m-5"
      >
        はじめる
      </router-link>
    </div>
  </div>
</template>
