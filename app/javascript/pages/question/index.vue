<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="col-6 bg-light rounded shadow m-3 p-3">
        <h3 class="text-center">クイズ選択画面</h3>
        <div class="de-flex">
          <button
            class="btn btn-dark m-2"
            @click="handleOpenAllGenreQuestionModal"
          >
            オールジャンル
          </button>
          <button
            class="btn btn-dark m-2"
            @click="handleOpenChampionsLeagueQuestionModal"
          >
            チャンピオンズリーグ
          </button>
          <button
            class="btn btn-dark m-2"
            @click="handleOpenSerieAQuestionModal"
          >
            セリエA
          </button>
          <button
            class="btn btn-dark m-2"
            @click="handleOpenPremierLeagueQuestionModal"
          >
            プレミアリーグ
          </button>
          <Question
            :questions="allGenreQuestions"
            v-if="isVisibleAllGenreQuestionModal"
            @close-modal="handleCloseModal"
          ></Question>
          <Question
            :questions="championsLeagueQuestions"
            v-if="isVisibleChampionsLeagueQuestionModal"
            @close-modal="handleCloseModal"
          ></Question>
          <Question
            :questions="serieAQuestions"
            v-if="isVisibleSerieAQuestionModal"
            @close-modal="handleCloseModal"
          ></Question>
          <Question
            :questions="premierLeagueQuestions"
            v-if="isVisiblePremierLeagueQuestionModal"
            @close-modal="handleCloseModal"
          ></Question>
        </div>
      </div>
    </div>
    <div class="text-center">
      <router-link :to="{ name: 'TopIndex' }" class="btn btn-dark mt-5">戻る</router-link>
    </div>
  </div>
</template>

<script>
import Question from './components/Question.vue'

export default {
  name: 'QuestionIndex',
  components: {
    Question,
  },
  data() {
    return {
      questions: [],
      isVisibleAllGenreQuestionModal: false,
      isVisibleChampionsLeagueQuestionModal: false,
      isVisibleSerieAQuestionModal: false,
      isVisiblePremierLeagueQuestionModal: false,
    }
  },
  computed: {
    allGenreQuestions() {
      return this.questions;
    },
    championsLeagueQuestions() {
      return this.questions.filter(question => {
        return question.category == 1;
      })
    },
    serieAQuestions() {
      return this.questions.filter(question => {
        return question.category == 1;
      })
    },
    premierLeagueQuestions() {
      return this.questions.filter(question => {
        return question.category == 2;
      })
    },
  },
  created() {
    this.fetchQuestions();
  },
  methods: {
    handleOpenAllGenreQuestionModal() {
      this.isVisibleAllGenreQuestionModal = true;
    },
    handleOpenChampionsLeagueQuestionModal() {
      this.isVisibleChampionsQuestionModal = true;
    },
    handleOpenSerieAQuestionModal() {
      this.isVisibleSerieAQuestionModal = true;
    },
    handleOpenPremierLeagueQuestionModal() {
      this.isVisiblePremierLeagueQuestionModal = true;
    },
    handleCloseModal() {
      this.isVisibleAllGenreQuestionModal = false;
      this.isVisibleChampionsQuestionModal = false;
      this.isVisibleSerieAQuestionModal = false;
      this.isVisiblePremierLeagueQuestionModal = false;
    },
    fetchQuestions() {
      this.$axios.get('questions')
        .then(res => this.questions = res.data)
        .catch(err => console.log(err.status));
    }
  }
}
</script>

<style scoped>
</style>