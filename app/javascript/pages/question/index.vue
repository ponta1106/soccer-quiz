<template>
  <div>
    <div class="d-flex">
      <div class="col-4 bg-light rounded shadow m-3 p-3">
        <div class="h4">クイズ一覧</div>
        <div v-for="question in questions" :key="question.id" class="bg-white border shadow-sm rounded my-2 p-4">
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
  name: 'QuestionIndex',
  data() {
    return {
      questions: [],
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