<template>
  <transition name="fade">
    <div>
      <div class="overlay">
        <div
          class="modal base"
          role="dialog"
        >
          <div
            class="modal-dialog"
            role="document"
          >
            <p>このジャンルは{{ questions.length }}問あります。</p>
            <div
              class="modal-content boxes"
            >
              <template
                v-if="!startFlg"
              >
                <div class="modal-body d-flex flex-column justify-content-around p-2 m-2">
                  <button
                    class="btn btn-warning p-2 m-2"
                    @click="startFlg = true"
                  >
                    クイズスタート
                  </button>
                  <button
                    class="btn btn-light p-2 m-2"
                    @click="closeModal"
                  >
                    閉じる
                  </button>
                </div>
              </template>
              <template v-else>
                <div class="modal-header">
                  <h5 class="modal-title">
                    Q.{{ questions[index].title }}
                  </h5>
                </div>
                <div class="modal-body">
                  <div
                    class="d-flex flex-column"
                    @click="judgeAnswer"
                  >
                    <button
                      id="choice1"
                      class="btn btn-info m-2"
                    >
                      {{ questions[index].choice1 }}
                    </button>
                    <button
                      id="choice2"
                      class="btn btn-info m-2"
                    >
                      {{ questions[index].choice2 }}
                    </button>
                    <button
                      id="choice3"
                      class="btn btn-info m-2"
                    >
                      {{ questions[index].choice3 }}
                    </button>
                    <button
                      id="choice4"
                      class="btn btn-info m-2"
                    >
                      {{ questions[index].choice4 }}
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
                    解説：{{ questions[index].explanation }}
                  </p>
                </div>
                <div class="modal-footer">
                  <button
                    v-if="answered"
                    class="btn btn-warning"
                    @click="nextQuestion"
                  >
                    次へ
                  </button>
                  <button
                    class="btn btn-secondary"
                    @click="closeModal"
                  >
                    閉じる
                  </button>
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
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
      index: 0,
      result: ''
    }
  },
  methods: {
    nextQuestion() {
      this.answered = false;
      this.result = '';
      this.index++;
    },
    closeModal() {
      this.$emit('close-modal');
    },
    judgeAnswer(e) {
      this.answered = true;
      if (this.questions[this.index].answer == e.target.id) {
        this.result = '🙆‍♂️🙆🙆‍♂️🙆🙆‍♂️🙆🙆‍♂️ 正解 🙆‍♂️🙆🙆‍♂️🙆🙆‍♂️🙆🙆‍♂️';
      } else {
        this.result = '🙅‍♂️🙅🙅‍♂️🙅🙅‍♂️🙅🙅‍♂️ 不正解 🙅‍♂️🙅🙅‍♂️🙅🙅‍♂️🙅🙅‍♂️';
      }
    }
  }
}
</script>

<style scoped>
.base {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0, 0.5);
}
/* 表示/非表示はvueで制御するので最初から表示状態にする */
 .modal {
  display: block;
}

/* vueのtransitionを使わないなら不要 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>