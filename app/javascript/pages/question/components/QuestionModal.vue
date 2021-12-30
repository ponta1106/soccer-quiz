<template>
  <div id="question-modal">
    <div class="modal">
      <div class="modal-dialog modal-lg modal-dialog-centered">
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
                v-if="!answered"
                class="d-flex flex-column"
                @click="judgeAnswer"
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
              <h2
                class="p-3 m-2"
                :style="{ backgroundColor: activeColor }"
              >
                {{ result }}
              </h2>
              <template
                v-if="!correct_answer"
              >
              </template>
              <p class="p-3 m-2 bg-light">
                {{ questions[currentQuestionIndex].explanation }}
              </p>
            </div>
            <div class="modal-footer">
              <template
                v-if="question_results.length == questions.length"
              >
                <div class="col-4">
                  <button
                    class="btn btn-success shadow col-12"
                    @click="handleShowQuestionResultsModal"
                  >
                    結果発表
                  </button>
                </div>
              </template>
              <template
                v-else
              >
                <div class="text-center col-12 mb-4">
                  {{ currentQuestionIndex + 1 }}問 / 全{{ questions.length }}問
                </div>
                <div class="col-4">
                  <button
                    v-if="answered"
                    class="btn btn-secondary shadow col-12"
                    @click="nextQuestion"
                  >
                    次へ
                  </button>
                </div>
              </template>
              <div class="col-4">
                <button
                  class="btn shadow col-12"
                  @click="handleShowQuestionConfirmationModal"
                >
                  閉じる
                </button>
              </div>
            </div>
            <transition name="fade">
              <QuestionConfirmationModal
                v-if="isVisibleQuestionConfirmationModal"
                @close-all-modal="closeAllModal"
                @close-question-confirmation-modal="closeQuestionConfirmationModal"
              />
              <QuestionResultsModal
                v-if="isVisibleQuestionResultsModal"
                :question-results="question_results"
                @close-question-results-modal="handleCloseQuestionResultsModal"
              />
            </transition>
          </template>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show" />
  </div>
</template>

<script>
import QuestionResultsModal from './QuestionResultsModal.vue'
import QuestionConfirmationModal from './QuestionConfirmationModal.vue'

export default {
  name: 'QuestionModal',
  components: {
    QuestionResultsModal,
    QuestionConfirmationModal
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
      activeColor: 'pink',
      correct_answer: true,
      currentQuestionIndex: 0,
      isVisibleQuestionResultsModal: false,
      isVisibleQuestionConfirmationModal: false,
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
    handleShowQuestionConfirmationModal() {
      this.isVisibleQuestionConfirmationModal = true;
    },
    closeModal() {
      this.$emit('close-modal');
    },
    closeAllModal() {
      this.$emit('close-modal');
    },
    closeQuestionConfirmationModal() {
      this.isVisibleQuestionConfirmationModal = false;
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
        this.activeColor = 'pink';
        this.correct_answer = true;
        this.question_results.push('correct');
      } else {
        this.result = '🙅‍♂️🙅‍♀️ 不正解 🙅‍♂️🙅‍♀️';
        this.activeColor = 'skyblue';
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

</style>