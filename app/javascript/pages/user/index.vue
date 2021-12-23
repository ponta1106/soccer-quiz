<template>
  <div class="container col-8 text-center">
    <div
      class="rounded shadow m-3 p-3"
    >
      <h4>ユーザー詳細画面</h4>
      <p>{{ authUser.name }}</p>
      <p>{{ authUser.email }}</p>
    </div>
    <div>
      <h4>{{ authUser.name }}さんが作成した問題一覧</h4>
    </div>
    <div
      class="rounded shadow m-3 p-3"
      v-for="question in authUser_questions"
      :key="question.id"
    >
      <p>{{ question.title }}</p>
      <button
      class="btn btn-success"
      @click="handleShowQuestionEditModal(question)"
      >クイズを編集</button>
      <transition name="fade">
        <QuestionEditModal
          v-if="isVisibleQuestionEditModal"
          :question="questionEdit"
          @close-modal="handleCloseQuestionEditModal"
          @update-question="handleUpdateQuestion"
        />
      </transition>
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
import QuestionEditModal from './components/QuestionEditModal'
import { mapGetters, mapActions } from "vuex"

export default {
  name: 'UserIndex',
  components: {
    QuestionEditModal
  },
  data() {
    return {
      questionEdit: {},
      isVisibleQuestionEditModal: false,
    }
  },
  computed: {
    ...mapGetters("users", ["users", "authUser"]),
    ...mapGetters('questions', ['questions']),
    authUser_questions() {
      return this.questions.filter(question => {
        return question.user_id == this.authUser.id
      })
    }
  },
  methods: {
    ...mapActions("users", ["fetchUsers"]),
    ...mapActions('questions',[
      'fetchQuestions',
      'updateQuestion'
      ]),
    handleShowQuestionEditModal(question) {
      this.isVisibleQuestionEditModal = true;
      this.questionEdit = question;
    },
    handleCloseQuestionEditModal() {
      this.isVisibleQuestionEditModal = false;
    },
    handleShowQuestionEditModal(question) {
      this.questionEdit = Object.assign({}, question);
      this.isVisibleQuestionEditModal = true;
    },
    async handleUpdateQuestion(question) {
      try {
      await this.updateQuestion(question);
      this.handleCloseQuestionEditModal();
      } catch (error) {
        console.log(error);
      }
    }
  },
  created() {
    this.fetchUsers();
    this.fetchQuestions();
  },
}
</script>