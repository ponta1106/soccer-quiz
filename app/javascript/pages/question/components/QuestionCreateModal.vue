<template>
  <div id="question-create-modal">
    <ValidationObserver v-slot="{ handleSubmit }">
      <div class="modal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5>クイズ作成画面</h5>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="left-section col-xl">
                  <div class="form-group mt-3">
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label for="title">問題文</label>
                      <input
                        id="title"
                        type="text"
                        name="問題文"
                        class="form-control"
                        v-model="question.title"
                      >
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group mt-3">
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label for="choice1">選択肢１</label>
                      <input
                        id="choice1"
                        type="text"
                        name="選択肢１"
                        class="form-control"
                        v-model="question.choice1"
                      >
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group mt-3">
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label for="choice2">選択肢２</label>
                      <input
                        id="choice2"
                        v-model="question.choice2"
                        type="text"
                        class="form-control"
                        name="選択肢２"
                      >
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group mt-3">
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label for="choice3">選択肢３</label>
                      <input
                        id="choice3"
                        type="text"
                        name="選択肢３"
                        class="form-control"
                        v-model="question.choice3"
                      >
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group mt-3">
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label for="choice4">選択肢４</label>
                      <input
                        id="choice4"
                        type="text"
                        name="選択肢４"
                        class="form-control"
                        v-model="question.choice4"
                      >
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>
                <div class="right-section col-xl">
                  <div class="form-group mt-3">
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label for="answer">答えの選択肢</label>
                      <select
                        id="answer"
                        name="答えの選択肢"
                        v-model="question.answer"
                      >
                        <option value="choice1">
                          選択肢1
                        </option>
                        <option value="choice2">
                          選択肢2
                        </option>
                        <option value="choice3">
                          選択肢3
                        </option>
                        <option value="choice4">
                          選択肢4
                        </option>
                      </select>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group mt-3">
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label for="category">クイズのカテゴリー</label>
                      <select
                        id="category"
                        name="クイズのカテゴリー"
                        v-model="question.category"
                      >
                        <option value="champions_league">
                          チャンピオンズリーグ
                        </option>
                        <option value="serieA">
                          セリエA
                        </option>
                        <option value="premier_league">
                          プレミアリーグ
                        </option>
                        <option value="la_liga">
                          ラリーガ
                        </option>
                        <option value="others">
                          その他
                        </option>
                      </select>
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                  <div class="form-group mt-3">
                    <ValidationProvider
                      v-slot="{ errors }"
                      rules="required"
                    >
                      <label for="explanation">説明文</label>
                      <textarea
                        id="explanation"
                        name="説明文"
                        class="form-control"
                        rows="5"
                        v-model="question.explanation"
                      />
                      <span class="text-danger">{{ errors[0] }}</span>
                    </ValidationProvider>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex modal-footer justify-content-between mt-3">
              <button
                class="btn btn-secondary shadow"
                @click="handleSubmit(handleCreateQuestion)"
              >
                追加
              </button>
              <button
                class="btn shadow"
                @click="handleCloseModal"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-backdrop show" />
    </ValidationObserver>
  </div>
</template>

<script>
export default {
  name: 'QuestionCreateModal',
  data() {
    return {
      question: {
        title: '',
        explanation: '',
        answer: '',
        category: '',
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: '',
        user_id: 1,
      }
    }
  },
  methods: {
    handleCloseModal() {
      this.$emit('close-modal');
    },
    handleCreateQuestion() {
      this.$emit('create-question', this.question)
    }
  }
}
</script>

<style scoped>

 .modal {
  display: block;
}


</style>
