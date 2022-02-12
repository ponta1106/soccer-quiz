<template>
  <div class="container col-lg-8">
    <div class="h3 m-5 text-white">
      ユーザー詳細
    </div>
    <div
      class="rounded bg-light shadow m-3 p-3"
    >
      <p>{{ authUser.name }}</p>
      <p>{{ authUser.email }}</p>
      <button
        v-if="authUser.name != 'ゲストユーザー'"
        class="btn btn-success col-6 col-sm-4"
        @click="handleShowUserEditModal"
      >
        ユーザーを編集
      </button>
      <transition name="fade">
        <UserEditModal
          v-if="isVisibleUserEditModal"
          @close-modal="handleCloseUserEditModal"
        />
      </transition>
    </div>
    <div class="h3 m-5 text-white">
      {{ authUser.name }}さんが作成した問題一覧
    </div>
    <VueLoading
      v-if="isLoading"
      type="spin"
      color="#333"
      class="loadingIcon"
      :size="{ width: '50px', height: '50px' }"
    />
    <template v-else>
      <div class="h5 m-5 text-white">
        チャンピオンズリーグ
      </div>
      <div
        v-for="question in championsLeagueQuestions"
        :key="question.id"
        class="rounded bg-light shadow m-3 p-3"
      >
        <p
          class="mb-4"
        >
          {{ question.title }}
        </p>
        <button
          v-if="authUser.name != 'ゲストユーザー'"
          class="btn btn-success col-6 col-sm-4"
          @click="handleShowQuestionEditModal(question)"
        >
          クイズを編集
        </button>
      </div>
      <div class="h5 m-5 text-white">
        セリエA
      </div>
      <div
        v-for="question in serieAquestions"
        :key="question.id"
        class="rounded bg-light shadow m-3 p-3"
      >
        <p
          class="mb-4"
        >
          {{ question.title }}
        </p>
        <button
          v-if="authUser.name != 'ゲストユーザー'"
          class="btn btn-success col-6 col-sm-4"
          @click="handleShowQuestionEditModal(question)"
        >
          クイズを編集
        </button>
      </div>
      <div class="h5 m-5 text-white">
        プレミアリーグ
      </div>
      <div
        v-for="question in premierLeagueQuestions"
        :key="question.id"
        class="rounded bg-light shadow m-3 p-3"
      >
        <p
          class="mb-4"
        >
          {{ question.title }}
        </p>
        <button
          v-if="authUser.name != 'ゲストユーザー'"
          class="btn btn-success col-6 col-sm-4"
          @click="handleShowQuestionEditModal(question)"
        >
          クイズを編集
        </button>
      </div>
      <div class="h5 m-5 text-white">
        ラリーガ
      </div>
      <div
        v-for="question in laLigaQuestions"
        :key="question.id"
        class="rounded bg-light shadow m-3 p-3"
      >
        <p
          class="mb-4"
        >
          {{ question.title }}
        </p>
        <button
          v-if="authUser.name != 'ゲストユーザー'"
          class="btn btn-success col-6 col-sm-4"
          @click="handleShowQuestionEditModal(question)"
        >
          クイズを編集
        </button>
      </div>
      <div class="h5 m-5 text-white">
        ブンデスリーガ
      </div>
      <div
        v-for="question in bundesLigaQuestions"
        :key="question.id"
        class="rounded bg-light shadow m-3 p-3"
      >
        <p
          class="mb-4"
        >
          {{ question.title }}
        </p>
        <button
          v-if="authUser.name != 'ゲストユーザー'"
          class="btn btn-success col-6 col-sm-4"
          @click="handleShowQuestionEditModal(question)"
        >
          クイズを編集
        </button>
      </div>
      <div class="h5 m-5 text-white">
        リーグアン
      </div>
      <div
        v-for="question in league1Questions"
        :key="question.id"
        class="rounded bg-light shadow m-3 p-3"
      >
        <p
          class="mb-4"
        >
          {{ question.title }}
        </p>
        <button
          v-if="authUser.name != 'ゲストユーザー'"
          class="btn btn-success col-6 col-sm-4"
          @click="handleShowQuestionEditModal(question)"
        >
          クイズを編集
        </button>
      </div>
      <div class="h5 m-5 text-white">
        その他
      </div>
      <div
        v-for="question in othersQuestions"
        :key="question.id"
        class="rounded bg-light shadow m-3 p-3"
      >
        <p
          class="mb-4"
        >
          {{ question.title }}
        </p>
        <button
          v-if="authUser.name != 'ゲストユーザー'"
          class="btn btn-success col-6 col-sm-4"
          @click="handleShowQuestionEditModal(question)"
        >
          クイズを編集
        </button>
      </div>
      <div class="d-flex justify-content-between mt-5">
        <router-link
          :to="{ name: 'TopIndex' }"
          class="btn btn-dark shadow m-3 col-4 router-link-active"
        >
          トップへ
        </router-link>
        <router-link
          :to="{ name: 'QuestionIndex' }"
          class="btn btn-dark shadow m-3 col-4 router-link-active"
        >
          クイズ一覧
        </router-link>
      </div>
      <transition name="fade">
        <QuestionEditModal
          v-if="isVisibleQuestionEditModal"
          :question="questionEdit"
          @close-modal="handleCloseQuestionEditModal"
          @update-question="handleUpdateQuestion"
          @delete-question="handleDeleteQuestion"
        />
      </transition>
    </template>
  </div>
</template>

<script>
import QuestionEditModal from '../question/components/QuestionEditModal'
import UserEditModal from './components/UserEditModal'
import { mapGetters, mapActions } from "vuex"
import { VueLoading } from 'vue-loading-template'

export default {
  name: 'UserIndex',
  components: {
    QuestionEditModal,
    UserEditModal,
    VueLoading
  },
  data() {
    return {
      questionEdit: {},
      isVisibleQuestionEditModal: false,
      isVisibleUserEditModal: false,
    }
  },
  computed: {
    ...mapGetters('users', ['authUser']),
    ...mapGetters('questions', ['questions', 'isLoading']),
    isAuthUserQuestions() {
      return this.questions.filter(question => {
        return question.user_id == this.authUser.id
      })
    },
    championsLeagueQuestions() {
      return this.isAuthUserQuestions.filter(question => {
        return question.category == 'champions_league'
      })
    },
    serieAquestions() {
      return this.isAuthUserQuestions.filter(question => {
        return question.category == 'serieA'
      })
    },
    premierLeagueQuestions() {
      return this.isAuthUserQuestions.filter(question => {
        return question.category == 'premier_league'
      })
    },
    laLigaQuestions() {
      return this.isAuthUserQuestions.filter(question => {
        return question.category == 'la_liga'
      })
    },
    bundesLigaQuestions() {
      return this.isAuthUserQuestions.filter(question => {
        return question.category == 'bundes_liga'
      })
    },
    league1Questions() {
      return this.isAuthUserQuestions.filter(question => {
        return question.category == 'league_1'
      })
    },
    othersQuestions() {
      return this.isAuthUserQuestions.filter(question => {
        return question.category == 'others';
      })
    },
  },
  created() {
    this.fetchQuestions();
  },
  methods: {
    ...mapActions("users", [
      'updateUser',
      'fetchUsers'
      ]),
    ...mapActions('questions',[
      'fetchQuestions',
      'updateQuestion',
      'deleteQuestion',
      ]),
    handleCloseUserEditModal() {
      this.isVisibleUserEditModal = false;
    },
    handleCloseQuestionEditModal() {
      this.isVisibleQuestionEditModal = false;
    },
    handleShowUserEditModal() {
      this.isVisibleUserEditModal = true;
    },
    handleShowQuestionEditModal(question) {
      this.questionEdit = Object.assign({}, question);
      this.isVisibleQuestionEditModal = true;
    },
    async handleUpdateQuestion(question) {
      try {
        this.handleCloseQuestionEditModal();
        await this.updateQuestion(question);
      } catch (error) {
        console.log(error);
      }
    },
    async handleDeleteQuestion(question) {
      try {
        this.handleCloseQuestionEditModal();
        await this.deleteQuestion(question);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>