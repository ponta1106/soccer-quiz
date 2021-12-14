<template>
  <transition name="fade">
    <div id="question-modal">
      <div class="modal">
        <div class="modal-dialog modal-lg modal-dialog-centered ">
          <div
            class="modal-content"
          >
            <template
              v-if="!startFlg"
            >
              <div class="modal-body d-flex flex-column justify-content-around p-2 m-2">
                <button
                  class="btn btn-secondary shadow p-2 m-2"
                  @click="startFlg = true"
                >
                  クイズスタート
                </button>
                <button
                  class="btn btn-light shadow p-2 m-2"
                  @click="closeModal"
                >
                  閉じる
                </button>
              </div>
            </template>
            <template v-else>
              <div class="modal-header">
                <h5 class="modal-title">
                  Q.{{ questions[currentQuestionIndex].title }}
                </h5>
              </div>
              <div class="modal-body">
                <div
                  class="d-flex flex-column"
                  @click="judgeAnswer"
                  v-if="!answered"
                >
                  <button
                    id="choice1"
                    class="btn btn-light shadow m-2"
                  >
                    {{ questions[currentQuestionIndex].choice1 }}
                  </button>
                  <button
                    id="choice2"
                    class="btn btn-light shadow m-2"
                  >
                    {{ questions[currentQuestionIndex].choice2 }}
                  </button>
                  <button
                    id="choice3"
                    class="btn btn-light shadow m-2"
                  >
                    {{ questions[currentQuestionIndex].choice3 }}
                  </button>
                  <button
                    id="choice4"
                    class="btn btn-light shadow m-2"
                  >
                    {{ questions[currentQuestionIndex].choice4 }}
                  </button>
                </div>
              </div>
              <div
                v-if="answered"
                class="modal-body container text-center"
              >
                <h5 style="font-size: 32px;">
                  {{ result }}
                </h5>
                <template
                  v-if="!correct_answer"
                >
                  <img
                    src="../../../assets/images/hirayama.png"
                    alt="show-results"
                    style="width: 300px;"
                  >
                </template>
                <p class="p-3 bg-light">
                  解説：{{ questions[currentQuestionIndex].explanation }}
                </p>
              </div>
              <div class="modal-footer">
                <template
                  v-if="question_results.length == questions.length"
                >
                  <button
                    class="btn btn-success shadow"
                    @click="handleShowQuestionResultsModal"
                  >
                    結果発表
                  </button>
                </template>
                <template
                  v-else
                >
                  <button
                    v-if="answered"
                    class="btn btn-secondary shadow"
                    @click="nextQuestion"
                  >
                    次へ
                  </button>
                </template>
                <button
                  class="btn shadow"
                  @click="closeModal"
                >
                  閉じる
                </button>
                <QuestionResultsModal
                  v-if="isVisibleQuestionResultsModal"
                  :question_results="question_results"
                  @close-question-results-modal="handleCloseQuestionResultsModal"
                ></QuestionResultsModal>
              </div>
            </template>
          </div>
        </div>
      </div>
      <div class="modal-backdrop show" />
    </div>
  </transition>
</template>

<script>
import QuestionResultsModal from './QuestionResultsModal.vue'

export default {
  name: 'QuestionModal',
  components: {
    QuestionResultsModal
  },
  props: {
    questions: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      result: '',
      modal: false,
      startFlg: false,
      answered: false,
      question_results: [],
      correct_answer: true,
      currentQuestionIndex: 0,
      isVisibleQuestionResultsModal: false,
    }
  },
  computed: {
    numberOfQuestions() {
      return this.questions.length;
    }
  },
  methods: {
    nextQuestion() {
      this.result = '';
      this.answered = false;
      this.currentQuestionIndex++;
    },
    closeModal() {
      this.$emit('close-modal');
    },
    handleCloseQuestionResultsModal() {
      this.isVisibleQuestionResultsModal = false;
      this.closeModal();
    },
    handleShowQuestionResultsModal() {
      this.isVisibleQuestionResultsModal = true;
    },
    judgeAnswer(e) {
      this.answered = true;
      if (this.questions[this.currentQuestionIndex].answer == e.target.id) {
        this.result = '🙆‍♂️🙆‍♀️ 正解 🙆‍♂️🙆‍♀️';
        this.correct_answer = true;
        this.question_results.push('correct');
      } else {
        this.result = '🙅‍♂️🙅‍♀️ 不正解 🙅‍♂️🙅‍♀️';
        this.correct_answer = false;
        this.question_results.push('incorrect');
      }
    }
  }
}
</script>

<style scoped>

 .modal {
  display: block;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
