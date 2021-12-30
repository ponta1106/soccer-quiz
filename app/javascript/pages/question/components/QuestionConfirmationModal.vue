<template>
  <div id="question-confirmation-modal">
    <div class="modal">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body text-center">
            <p>クイズを終了しますか？</p>
            <button
              class="btn btn shadow p-2 m-2 col-4"
              @click="closeAllModal"
            >
              はい
            </button>
            <button
              class="btn shadow p-2 m-2 col-4"
              @click="closeQuestionConfirmationModal"
            >
              いいえ
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
  methods: {
    closeAllModal() {
      this.$emit('close-all-modal');
    },
    closeQuestionConfirmationModal() {
      this.$emit('close-question-confirmation-modal');
    }
  }
}
</script>

<style scoped>

 .modal {
  display: block;
}

</style>