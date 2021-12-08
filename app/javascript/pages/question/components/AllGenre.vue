<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="col-6 bg-light rounded shadow m-3 p-3">
        <div class="h4">オールジャンル</div>
        <div class="bg-white border shadow-sm rounded my-2 p-4">
          <span>{{ allGenreQuestions[0].title }}</span>
          <br>
          <span>{{ allGenreQuestions[0].choice1 }}</span>
          <br>
          <span>{{ allGenreQuestions[0].choice2 }}</span>
          <br>
          <span>{{ allGenreQuestions[0].choice3 }}</span>
          <br>
          <span>{{ allGenreQuestions[0].choice4 }}</span>
          <br>
          <span>{{ allGenreQuestions[0].answer }}</span>
          <br>
          <span>{{ allGenreQuestions[0].explanation }}</span>
          <br>
        </div>
      </div>
    </div>
    <div class="text-center">
      <router-link :to="{ name: 'TopIndex' }" class="btn btn-dark mt-5">トップ</router-link>
      <router-link :to="{ name: 'QuestionIndex' }" class="btn btn-dark mt-5">クイズ選択画面へ</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllGenre',
  data() {
    return {
      questions: [],
    }
  },
  computed: {
    allGenreQuestions() {
      return this.questions
    }
  },
  created() {
    this.fetchTasks();
  },
  methods: {
    fetchTasks() {
      this.$axios.get('questions')
        .then(res => this.questions = res.data)
        .catch(err => console.log(err.status));
    }
  }
}
</script>

<style scoped>
</style>