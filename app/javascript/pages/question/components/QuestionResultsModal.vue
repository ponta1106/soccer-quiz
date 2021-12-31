<template>
  <div id="question-result-modal">
    <div class="modal">
      <div class="modal-dialog modal-lg modal-dialog-centered ">
        <div
          class="modal-content"
        >
          <div class="modal-header">
            <div class="container text-center">
              <img
                src="../../../assets/images/hamada.png"
                alt="show-results"
                style="width: 300px;"
              >
            </div>
          </div>
          <div class="modal-body text-center">
            <h3>{{ score }}/{{ numberOfQuestions }} 問正解</h3>
            <template
              v-if="score == numberOfQuestions"
            >
              <p>すごい！ 全問正解です！</p>
            </template>
            <template
              v-else
            >
              <p>おしい！ また挑戦してね！</p>
            </template>
          </div>
          <div class="modal-footer">
            <button
              class="btn shadow col-4"
              @click="closeModal"
            >
              終了
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="modal-backdrop show" />
  </div>
</template>

<script>
export default {
  name: 'QuestionResultsModal',
  props: {
    questionResults: {
      type: Array,
      required: true
    },
  },
  data() {
    return {
      correct: false,
    }
  },
  computed: {
    // 問題数を返します。
    numberOfQuestions() {
      return this.questionResults.length
    },
    // 正解の個数を返します。
    score() {
      return this.questionResults.filter(result => {
        return result == 'correct';
      }).length;
    }
  },
  methods: {
    closeModal() {
      this.$emit('close-question-results-modal');
    },
    saveAndCloseModal() {
      this.$emit('close-question-results-modal');
    }
  }
}
</script>

<style scoped>

  .modal {
    display: block;
  }

</style>