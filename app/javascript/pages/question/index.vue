<template>
  <div class="container mt-5 mb-5">
    <h3 class="text-center mb-5 text-white">
      クイズ選択画面
    </h3>
    <VueLoading
      v-if="isLoading"
      type="bubbles"
      color="#333"
      class="loadingIcon"
      :size="{ width: '150px', height: '150px' }"
    />
    <template v-else>
      <div class="d-flex flex-wrap justify-content-around">
        <div
          class="card m-2"
          style="width: 18rem;"
          @click="handleOpenChampionsLeagueQuestionModal"
        >
          <img
            src="../../assets/cl_logo.png"
            class="card-img-top"
          >
          <div class="card-body">
            <p class="card-text">
              チャンピオンズリーグ： 全{{ championsLeagueQuestions.length }}問
            </p>
          </div>
        </div>
        <div
          class="card m-2"
          style="width: 18rem;"
          @click="handleOpenSerieAquestionModal"
        >
          <img
            src="../../assets/serie_a_logo.png"
            class="card-img-top"
          >
          <div class="card-body">
            <p class="card-text">
              セリエA： 全{{ serieAquestions.length }}問
            </p>
          </div>
        </div>
        <div
          class="card m-2"
          style="width: 18rem;"
          @click="handleOpenPremierLeagueQuestionModal"
        >
          <img
            src="../../assets/pl_logo.png"
            class="card-img-top"
          >
          <div class="card-body">
            <p class="card-text">
              プレミアリーグ： 全{{ premierLeagueQuestions.length }}問
            </p>
          </div>
        </div>
        <div
          class="card m-2"
          style="width: 18rem;"
          @click="handleOpenLaLigaQuestionModal"
        >
          <img
            src="../../assets/la_liga_logo.png"
            class="card-img-top"
          >
          <div class="card-body">
            <p class="card-text">
              ラリーガ： 全{{ laLigaQuestions.length }}問
            </p>
          </div>
        </div>
        <div
          class="card m-2"
          style="width: 18rem;"
          @click="handleOpenBundesLigaQuestionModal"
        >
          <img
            src="../../assets/bundes_liga_logo.png"
            class="card-img-top"
          >
          <div class="card-body">
            <p class="card-text">
              ブンデスリーガ： 全{{ bundesLigaQuestions.length }}問
            </p>
          </div>
        </div>
        <div
          class="card m-2"
          style="width: 18rem;"
          @click="handleOpenLeague1QuestionModal"
        >
          <img
            src="../../assets/ligue_1_logo.png"
            class="card-img-top"
          >
          <div class="card-body">
            <p class="card-text">
              リーグアン： 全{{ league1Questions.length }}問
            </p>
          </div>
        </div>
        <div
          class="card m-2"
          style="width: 18rem;"
          @click="handleOpenOthersQuestionModal"
        >
          <img
            src="../../assets/w_cup_logo.png"
            class="card-img-top"
          >
          <div class="card-body">
            <p class="card-text">
              その他： 全{{ othersQuestions.length }}問
            </p>
          </div>
        </div>
        <div
          v-if="authUser.name == 'ゲストユーザー'"
          class="card m-2"
          style="width: 18rem;"
          @click="handleShowUserRecomendModal"
        >
          <img
            src="../../assets/new.png"
            class="card-img-top"
          >
          <div class="card-body">
            <p class="card-text">
              クイズを作成する
            </p>
          </div>
        </div>
        <div
          v-else
          class="card m-3"
          style="width: 18rem;"
          @click="handleShowQuestionCreateModal"
        >
          <img
            src="../../assets/new.png"
            class="card-img-top"
          >
          <div class="card-body">
            <p class="card-text">
              クイズを作成する
            </p>
          </div>
        </div>
      </div>
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
          v-if="isVisibleBundesLigaQuestionModal"
          :questions="bundesLigaQuestions"
          @close-modal="handleCloseModal"
        />
        <QuestionModal
          v-if="isVisibleLeague1QuestionModal"
          :questions="league1Questions"
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
        <UserRecomendModal
          v-if="isVisibleUserRecomendModal"
          @close-modal="handleCloseUserRecomendModal"
        />
      </transition>
    </template>
    <div class="text-center">
      <router-link
        :to="{ name: 'TopIndex' }"
        class="btn btn-dark shadow mt-5 col-4"
      >
        戻る
      </router-link>
    </div>
  </div>
</template>

<script>
import QuestionModal from './components/QuestionModal.vue'
import QuestionCreateModal from './components/QuestionCreateModal.vue'
import UserRecomendModal from '../register/recomend.vue'
import { mapGetters, mapActions } from 'vuex';
import { VueLoading } from 'vue-loading-template'
export default {
  name: 'QuestionIndex',
  components: {
    QuestionModal,
    QuestionCreateModal,
    VueLoading,
    UserRecomendModal
  },
  data() {
    return {
      isVisibleUserRecomendModal: false,
      isVisibleSerieAquestionModal: false,
      isVisibleLaLigaQuestionModal: false,
      isVisibleOthersQuestionModal: false,
      isVisibleQuestionCreateModal: false,
      isVisibleLeague1QuestionModal: false,
      isVisibleBundesLigaQuestionModal: false,
      isVisiblePremierLeagueQuestionModal: false,
      isVisibleChampionsLeagueQuestionModal: false,
    }
  },
  computed: {
    ...mapGetters('questions', ['questions', 'isLoading']),
    ...mapGetters('users', ['authUser']),
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
    bundesLigaQuestions() {
      return this.questions.filter(question => {
        return question.category == 'bundes_liga';
      })
    },
    league1Questions() {
      return this.questions.filter(question => {
        return question.category == 'league_1';
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
    twitterShare(){
        //シェアする画面を設定
        var shareURL = 'https://twitter.com/intent/tweet?text=' + "欧州サッカークイズ" + "%20%23欧州サッカー" + "%20%23クイズ" + "%20%23サッカー" + '&url=' + "https://soccer-quiz.herokuapp.com/";
        //シェア用の画面へ移行
        window.open(shareURL, '_blank')
    },
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
    handleOpenBundesLigaQuestionModal() {
      this.isVisibleBundesLigaQuestionModal = true;
    },
    handleOpenLeague1QuestionModal() {
      this.isVisibleLeague1QuestionModal = true;
    },
    handleOpenOthersQuestionModal() {
      this.isVisibleOthersQuestionModal = true;
    },
    handleShowQuestionCreateModal() {
      this.isVisibleQuestionCreateModal = true;
    },
    handleShowUserRecomendModal() {
      this.isVisibleUserRecomendModal = true;
    },
    handleCloseModal() {
      this.isVisibleSerieAquestionModal = false;
      this.isVisibleLaLigaQuestionModal = false;
      this.isVisibleOthersQuestionModal = false;
      this.isVisibleLeague1QuestionModal = false;
      this.isVisibleBundesLigaQuestionModal = false;
      this.isVisiblePremierLeagueQuestionModal = false;
      this.isVisibleChampionsLeagueQuestionModal = false;
    },
    handleCloseQuestionCreateModal() {
      this.isVisibleQuestionCreateModal = false;
    },
    handleCloseUserRecomendModal() {
      this.isVisibleUserRecomendModal = false;
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

.card {
  cursor: pointer;
}

.modal {
  display: block;
}

</style>