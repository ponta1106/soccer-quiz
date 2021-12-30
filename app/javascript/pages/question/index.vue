<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="col-12 col-lg-8 rounded shadow m-3 p-3">
        <h3 class="text-center">
          クイズ選択画面
        </h3>
        <div class="d-flex flex-column">
          <button
            class="btn shadow p-2 m-2"
            @click="handleOpenChampionsLeagueQuestionModal"
          >
            チャンピオンズリーグ：{{ championsLeagueQuestions.length }}問
          </button>
          <button
            class="btn shadow p-2 m-2"
            @click="handleOpenSerieAQuestionModal"
          >
            セリエA：{{ serieAQuestions.length }}問
          </button>
          <button
            class="btn shadow p-2 m-2"
            @click="handleOpenPremierLeagueQuestionModal"
          >
            プレミアリーグ：{{ premierLeagueQuestions.length }}問
          </button>
          <button
            class="btn shadow p-2 m-2"
            @click="handleOpenLaLigaQuestionModal"
          >
            ラリーガ：{{ laLigaQuestions.length }}問
          </button>
          <button
            class="btn shadow p-2 m-2"
            @click="handleOpenOthersQuestionModal"
          >
            その他：{{ othersQuestions.length }}問
          </button>
          <button
            class="btn btn-secondary shadow p-2 m-2"
            @click="handleShowQuestionCreateModal"
          >
            クイズを作成する
          </button>
          <transition name="fade">
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
            <QuestionModal
              v-if="isVisibleLaLigaQuestionModal"
              :questions="laLigaQuestions"
              @close-modal="handleCloseModal"
            />
            <QuestionModal
              v-if="isVisibleOthersQuestionModal"
              :questions="othersQuestions"
              @close-modal="handleCloseModal"
            />
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
        class="btn shadow mt-5"
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
      isVisibleChampionsLeagueQuestionModal: false,
      isVisibleSerieAQuestionModal: false,
      isVisiblePremierLeagueQuestionModal: false,
      isVisibleLaLigaQuestionModal: false,
      isVisibleOthersQuestionModal: false,
      isVisibleQuestionCreateModal: false,
    }
  },
  computed: {
    ...mapGetters('questions', ['questions']),
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
    laLigaQuestions() {
      return this.questions.filter(question => {
        return question.category == 'la_liga';
      })
    },
    othersQuestions() {
      return this.questions.filter(question => {
        return question.category == 'others';
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
    handleOpenChampionsLeagueQuestionModal() {
      this.isVisibleChampionsLeagueQuestionModal = true;
    },
    handleOpenSerieAQuestionModal() {
      this.isVisibleSerieAQuestionModal = true;
    },
    handleOpenPremierLeagueQuestionModal() {
      this.isVisiblePremierLeagueQuestionModal = true;
    },
    handleOpenLaLigaQuestionModal() {
      this.isVisibleLaLigaQuestionModal = true;
    },
    handleOpenOthersQuestionModal() {
      this.isVisibleOthersQuestionModal = true;
    },
    handleShowQuestionCreateModal() {
      this.isVisibleQuestionCreateModal = true;
    },
    handleCloseModal() {
      this.isVisibleChampionsLeagueQuestionModal = false;
      this.isVisibleSerieAQuestionModal = false;
      this.isVisiblePremierLeagueQuestionModal = false;
      this.isVisibleLaLigaQuestionModal = false;
      this.isVisibleOthersQuestionModal = false;
    },
    handleCloseQuestionCreateModal() {
      this.isVisibleQuestionCreateModal = false;
    },
    async handleCreateQuestion(question) {
      try{
        this.handleCloseQuestionCreateModal();
        await this.createQuestion(question);
      } catch(error) {
        console.log(error)
      }
    }
  }
}
</script>

<style scoped>

 .modal {
  display: block;
}

</style>