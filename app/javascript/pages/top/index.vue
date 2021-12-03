<template>
  <div class="d-flex flex-column min-vh-100">
    <header class="mb-auto">
      <nav class="navbar navbar-dark bg-dark">
        <span class="navbar-brand mb-0 h1">欧州サッカークイズ</span>
      </nav>
    </header>
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
    <footer class="mt-auto text-center">
      <small>Copyright &copy; 2021. Ponta</small>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'TopIndex',
  data() {
    return {
    }
  }
}
</script>
