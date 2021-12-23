<template>
  <transition name="fade">
    <div id="question-edit-modal">
      <div class="modal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-body">
              <div class="modal-header">
                <h5>クイズ編集画面</h5>
              </div>
              <div class="row">
                <div class="left-section col-md m-2">
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
                </div>
                <div class="right-section col-md m-2">
                  <div class="form-group mt-3">
                    <label for="answer">答えの選択肢</label>
                    <select
                      id="answer"
                      v-model="question.answer"
                      name="answer"
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
                </div>
              </div>
              <div class="d-flex modal-footer justify-content-between mt-3">
                <button
                  class="btn btn-secondary shadow"
                  @click="handleUpdateQuestion"
                >
                  更新
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
      </div>
      <div class="modal-backdrop show" />
    </div>
  </transition>
</template>

<script>
export default {
  name: "QuestionEditModal",
  props: {
    question: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleCloseModal() {
      this.$emit('close-modal');
    },
    handleUpdateQuestion() {
      this.$emit('update-question', this.question)
    }
  }
}
</script>

<style scoped>

.modal {
  display: block;
}

</style>