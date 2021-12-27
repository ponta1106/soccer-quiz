<template>
  <div class="container col-lg-8">
    <div class="h3 m-5">
      ユーザー詳細
    </div>
    <div
      class="rounded shadow m-3 p-3"
    >
      <p>{{ authUser.name }}</p>
      <p>{{ authUser.email }}</p>
      <button
      class="btn btn-success"
      @click="handleShowUserEditModal"
      >ユーザーを編集</button>
      <UserEditModal
        v-if="isVisibleUserEditModal"
        @close-modal="handleCloseUserEditModal"
      />
    </div>
    <div class="h3 m-5">
      {{ authUser.name }}さんが作成した問題一覧
    </div>
    <div
      class="rounded shadow m-3 p-3"
      v-for="question in isAuthUserQuestions"
      :key="question.id"
    >
      <p>{{ question.title }}</p>
      <button
      class="btn btn-success"
      @click="handleShowQuestionEditModal(question)"
      >クイズを編集</button>
      <QuestionEditModal
        v-if="isVisibleQuestionEditModal"
        :question="questionEdit"
        @close-modal="handleCloseQuestionEditModal"
        @update-question="handleUpdateQuestion"
        @delete-question="handleDeleteQuestion"
      />
    </div>
    <router-link
      :to="{ name: 'TopIndex' }"
      class="btn shadow m-5"
    >
      トップへ
    </router-link>
    <router-link
      :to="{ name: 'QuestionIndex' }"
      class="btn shadow m-5"
    >
      クイズ一覧
    </router-link>
  </div>
</template>

<script>
import QuestionEditModal from '../question/components/QuestionEditModal'
import UserEditModal from './components/UserEditModal'

import { mapGetters, mapActions } from "vuex"

export default {
  name: 'UserIndex',
  components: {
    QuestionEditModal,
    UserEditModal
  },
  data() {
    return {
      questionEdit: {},
      isVisibleQuestionEditModal: false,
      isVisibleUserEditModal: false,
    }
  },
  computed: {
    ...mapGetters("users", ["authUser"]),
    ...mapGetters('questions', ['questions']),
    isAuthUserQuestions() {
      return this.questions.filter(question => {
        return question.user_id == this.authUser.id
      })
    }
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
    },
  },
  created() {
    this.fetchQuestions();
  }
}
</script>