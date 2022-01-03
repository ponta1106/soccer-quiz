<template>
  <div class="container">
    <div class="d-flex justify-content-center">
      <div class="col-12 col-lg-8 rounded shadow m-3 p-3">
        <h3 class="text-center">
          クイズ選択画面
        </h3>
        <VueLoading
          type="spin"
          color="#333"
          v-if="isLoading"
          class="loadingIcon"
          :size="{ width: '50px', height: '50px' }"
        />
        <template v-else>
          <div class="d-flex flex-column">
            <a
              :href="sns.twitter"
              class="btn btn-primary shadow p-2 m-2"
              target="_blank">
              <font-awesome-icon :icon="['fab', 'twitter']"/>
              シェアする
            </a>
            <a
              href="https://reffect.co.jp/vue"
              target="_blank"
              class="btn btn-success shadow p-2 m-2">シェアする</a>
            <button
              class="btn shadow p-2 m-2"
              @click="handleOpenChampionsLeagueQuestionModal"
            >
              チャンピオンズリーグ：{{ championsLeagueQuestions.length }}問
            </button>
            <button
              class="btn shadow p-2 m-2"
              @click="handleOpenSerieAquestionModal"
            >
              セリエA：{{ serieAquestions.length }}問
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
                v-if="isVisibleSerieAquestionModal"
                :questions="serieAquestions"
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
        </template>
      </div>
    </div>
    <div class="text-center">
      <router-link
        :to="{ name: 'TopIndex' }"
        class="btn shadow mt-5 col-4"
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
import { VueLoading } from 'vue-loading-template'
export default {
  name: 'QuestionIndex',
  components: {
    QuestionModal,
    QuestionCreateModal,
    VueLoading
  },
  data() {
    return {
      sns: {
        twitter: 'https://twitter.com/intent/tweet?url=https://salty-sands-43689.herokuapp.com/&text=欧州サッカークイズ&hashtags=欧州サッカー,サッカー,クイズ',
      },
      isVisibleSerieAquestionModal: false,
      isVisibleLaLigaQuestionModal: false,
      isVisibleOthersQuestionModal: false,
      isVisibleQuestionCreateModal: false,
      isVisiblePremierLeagueQuestionModal: false,
      isVisibleChampionsLeagueQuestionModal: false,
    }
  },
  computed: {
    ...mapGetters('questions', ['questions', 'isLoading']),
    championsLeagueQuestions() {
      return this.questions.filter(question => {
        return question.category == 'champions_league';
      })
    },
    serieAquestions() {
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
    handleOpenSerieAquestionModal() {
      this.isVisibleSerieAquestionModal = true;
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
      this.isVisibleSerieAquestionModal = false;
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