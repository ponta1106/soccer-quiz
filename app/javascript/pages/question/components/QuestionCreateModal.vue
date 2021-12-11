<template>
  <div id="question-create-modal">
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <div class="modal-header">
              <h5>クイズ作成画面</h5>
            </div>
            <div class="form-group mt-3">
              <label for="title">問題文</label>
              <input
                id="title"
                v-model="question.title"
                type="text"
                class="form-control"
              >
            </div>
            <div class="form-group mt-3">
              <label for="choice1">選択肢１</label>
              <input
                id="choice1"
                v-model="question.choice1"
                type="text"
                class="form-control"
              >
            </div>
            <div class="form-group mt-3">
              <label for="choice2">選択肢２</label>
              <input
                id="choice2"
                v-model="question.choice2"
                type="text"
                class="form-control"
              >
            </div>
            <div class="form-group mt-3">
              <label for="choice3">選択肢３</label>
              <input
                id="choice3"
                v-model="question.choice3"
                type="text"
                class="form-control"
              >
            </div>
            <div class="form-group mt-3">
              <label for="choice4">選択肢４</label>
              <input
                id="choice4"
                v-model="question.choice4"
                type="text"
                class="form-control"
              >
            </div>
            <div class="form-group mt-3">
              <label for="answer">答え</label>
              <select
                id="answer"
                v-model="question.answer"
                name="answer"
              >
                <option value="choice1">
                  choice1
                </option>
                <option value="choice2">
                  choice2
                </option>
                <option value="choice3">
                  choice3
                </option>
                <option value="choice4">
                  choice4
                </option>
              </select>
            </div>
            <div class="form-group mt-3">
              <label for="category">クイズのカテゴリー</label>
              <select
                id="category"
                v-model="question.category"
                name="category"
              >
                <option value="champions_league">
                  champions_league
                </option>
                <option value="serieA">
                  serieA
                </option>
                <option value="premier_league">
                  premier_league
                </option>
              </select>
            </div>
            <div class="form-group mt-3">
              <label for="description">説明文</label>
              <textarea
                id="description"
                v-model="question.explanation"
                class="form-control"
                rows="5"
              />
            </div>
            <div class="d-flex modal-footer justify-content-between mt-3">
              <button
                class="btn btn-success"
                @click="handleCreateQuestion"
              >
                追加
              </button>
              <button
                class="btn btn-secondary"
                @click="handleCloseModal"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show" />
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
        category: 0,
        choice1: '',
        choice2: '',
        choice3: '',
        choice4: ''
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