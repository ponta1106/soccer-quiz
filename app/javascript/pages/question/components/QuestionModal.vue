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
                class="modal-body"
              >
                <h5 class="text-center">
                  {{ result }}
                </h5>
                <p class="p-3 bg-light">
                  解説：{{ questions[currentQuestionIndex].explanation }}
                </p>
              </div>
              <div class="modal-footer">
                <button
                  v-if="answered"
                  class="btn btn-secondary shadow"
                  @click="nextQuestion"
                >
                  次へ
                </button>
                <button
                  class="btn shadow"
                  @click="closeModal"
                >
                  閉じる
                </button>
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
export default {
  name: 'QuestionModal',
  props: {
    questions: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      startFlg: false,
      modal: false,
      answered: false,
      currentQuestionIndex: 0,
      result: ''
    }
  },
  methods: {
    nextQuestion() {
      this.answered = false;
      this.result = '';
      this.currentQuestionIndex++;
    },
    closeModal() {
      this.$emit('close-modal');
    },
    judgeAnswer(e) {
      this.answered = true;
      if (this.questions[this.currentQuestionIndex].answer == e.target.id) {
        this.result = '🙆‍♂️🙆🙆‍♂️🙆🙆‍♂️🙆🙆‍♂️ 正解 🙆‍♂️🙆🙆‍♂️🙆🙆‍♂️🙆🙆‍♂️';
      } else {
        this.result = '🙅‍♂️🙅🙅‍♂️🙅🙅‍♂️🙅🙅‍♂️ 不正解 🙅‍♂️🙅🙅‍♂️🙅🙅‍♂️🙅🙅‍♂️';
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
