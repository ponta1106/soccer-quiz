<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="col-8 bg-light rounded shadow m-3 p-3">
        <h3 class="text-center">
          クイズ選択画面
        </h3>
        <div class="d-flex flex-column">
          <button
            class="btn btn-secondary p-2 m-2"
            @click="handleOpenAllGenreQuestionModal"
          >
            オールジャンル
          </button>
          <button
            class="btn btn-secondary p-2 m-2"
            @click="handleOpenChampionsLeagueQuestionModal"
          >
            チャンピオンズリーグ
          </button>
          <button
            class="btn btn-secondary p-2 m-2"
            @click="handleOpenSerieAQuestionModal"
          >
            セリエA
          </button>
          <button
            class="btn btn-secondary p-2 m-2"
            @click="handleOpenPremierLeagueQuestionModal"
          >
            プレミアリーグ
          </button>
          <button
            class="btn btn-info p-2 m-2"
            @click="handleShowQuestionCreateModal"
          >
            クイズを作成する
          </button>
          <QuestionModal
            v-if="isVisibleAllGenreQuestionModal"
            :questions="allGenreQuestions"
            @close-modal="handleCloseModal"
          />
          <QuestionModal
            v-if="isVisibleChampionsLeagueQuestionModal"
            :questions="championsLeagueQuestions"
            @close-modal="handleCloseModal"
          />
          <QuestionModal
            v-if="isVisibleSerieAQuestionModal"
            :questions="serieAQuestions"
            @close-modal="handleCloseModal"
          />
          <QuestionModal
            v-if="isVisiblePremierLeagueQuestionModal"
            :questions="premierLeagueQuestions"
            @close-modal="handleCloseModal"
          />
          <transition name="fade">
            <QuestionCreateModal
              v-if="isVisibleQuestionCreateModal"
              @close-modal="handleCloseQuestionCreateModal"
              @create-question="handleCreateQuestion"
            />
          </transition>
        </div>
      </div>
    </div>
    <div class="text-center">
      <router-link
        :to="{ name: 'TopIndex' }"
        class="btn btn-dark mt-5"
      >
        戻る
      </router-link>
    </div>
  </div>
</template>

<script>
import QuestionModal from './components/QuestionModal.vue'
import QuestionCreateModal from './components/QuestionCreateModal.vue'
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'QuestionIndex',
  components: {
    QuestionModal,
    QuestionCreateModal,
  },
  data() {
    return {
      isVisibleAllGenreQuestionModal: false,
      isVisibleChampionsLeagueQuestionModal: false,
      isVisibleSerieAQuestionModal: false,
      isVisiblePremierLeagueQuestionModal: false,
      isVisibleQuestionCreateModal: false,
    }
  },
  computed: {
    ...mapGetters('questions', ['questions']),
    allGenreQuestions() {
      return this.questions;
    },
    championsLeagueQuestions() {
      return this.questions.filter(question => {
        return question.category == 'champions_league';
      })
    },
    serieAQuestions() {
      return this.questions.filter(question => {
        return question.category == 'serieA';
      })
    },
    premierLeagueQuestions() {
      return this.questions.filter(question => {
        return question.category == 'premier_league';
      })
    },
  },
  created() {
    this.fetchQuestions();
  },
  methods: {
    ...mapActions('questions',[
      'fetchQuestions',
      'createQuestion'
      ]),
    handleOpenAllGenreQuestionModal() {
      this.isVisibleAllGenreQuestionModal = true;
    },
    handleOpenChampionsLeagueQuestionModal() {
      this.isVisibleChampionsLeagueQuestionModal = true;
    },
    handleOpenSerieAQuestionModal() {
      this.isVisibleSerieAQuestionModal = true;
    },
    handleOpenPremierLeagueQuestionModal() {
      this.isVisiblePremierLeagueQuestionModal = true;
    },
    handleShowQuestionCreateModal() {
      this.isVisibleQuestionCreateModal = true;
    },
    handleCloseModal() {
      this.isVisibleAllGenreQuestionModal = false;
      this.isVisibleChampionsLeagueQuestionModal = false;
      this.isVisibleSerieAQuestionModal = false;
      this.isVisiblePremierLeagueQuestionModal = false;
    },
    handleCloseQuestionCreateModal() {
      this.isVisibleQuestionCreateModal = false;
    },
    async handleCreateQuestion(question) {
      try{
        await this.createQuestion(question)
        this.handleCloseQuestionCreateModal()
      } catch(error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>
</style>