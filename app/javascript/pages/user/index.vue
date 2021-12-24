<template>
  <div class="container col-8 text-center">
    <div
      class="rounded shadow m-3 p-3"
    >
      <h5>ユーザー詳細画面</h5>
      <p>{{ authUser.name }}</p>
      <p>{{ authUser.email }}</p>
      <button
      class="btn btn-success"
      @click="handleShowUserEditModal(authUser)"
      >ユーザーを編集</button>
      <transition name="fade">
        <UserEditModal
          v-if="isVisibleUserEditModal"
          :user="userEdit"
          @close-modal="handleCloseUserEditModal"
          @update-user="handleUpdateUser"
        />
      </transition>
    </div>
    <div
      class="rounded shadow m-3 p-3"
      v-for="question in authUser_questions"
      :key="question.id"
    >
      <h5>{{ authUser.name }}さんが作成した問題一覧</h5>
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
      userEdit: {},
      isVisibleQuestionEditModal: false,
      isVisibleUserEditModal: false,
    }
  },
  computed: {
    ...mapGetters("users", ["authUser", "users"]),
    ...mapGetters('questions', ['questions']),
    authUser_questions() {
      return this.questions.filter(question => {
        return question.user_id == this.authUser.id
      })
    },
    // current_user() {
    //   return this.users.filter(user => {
    //     return user.id == this.authUser.id
    //   })
    // },
  },
  methods: {
    ...mapActions("users", [
      'updateUser',
      'fetchUsers'
      ]),
    ...mapActions('questions',[
      'fetchQuestions',
      'updateQuestion'
      ]),
    handleCloseUserEditModal() {
      this.isVisibleUserEditModal = false;
    },
    handleCloseQuestionEditModal() {
      this.isVisibleQuestionEditModal = false;
    },
    handleShowUserEditModal(user) {
      this.userEdit = Object.assign({}, user);
      this.isVisibleUserEditModal = true;
    },
    handleShowQuestionEditModal(question) {
      this.questionEdit = Object.assign({}, question);
      this.isVisibleQuestionEditModal = true;
    },
    async handleUpdateUser(user) {
      try {
      await this.updateUser(user);
      this.handleCloseUserEditModal();
      } catch (error) {
        console.log(error);
      }
    },
    async handleUpdateQuestion(question) {
      try {
      await this.updateQuestion(question);
      this.handleCloseQuestionEditModal();
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.fetchUsers();
    this.fetchQuestions();
  }
}
</script>