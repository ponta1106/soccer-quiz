<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="col-6 bg-light rounded shadow m-3 p-3">
        <div class="h4">プレミア</div>
        <div v-for="question in premierQuestions" :key="question.id" class="bg-white border shadow-sm rounded my-2 p-4">
          <span>{{ question.title }}</span>
          <br>
          <span>{{ question.choice1 }}</span>
          <br>
          <span>{{ question.choice2 }}</span>
          <br>
          <span>{{ question.choice3 }}</span>
          <br>
          <span>{{ question.choice4 }}</span>
          <br>
          <span>{{ question.answer }}</span>
          <br>
          <span>{{ question.explanation }}</span>
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
  name: 'Premier',
  data() {
    return {
      questions: [],
    }
  },
  computed: {
    premierQuestions() {
      return this.questions.filter(question => {
        return question.category == 2;
      })
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