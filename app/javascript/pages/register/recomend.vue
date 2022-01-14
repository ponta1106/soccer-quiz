<template>
  <div id="user-recomend-modal">
    <div class="modal">
      <div class="modal-dialog modal-lg modal-dialog-centered ">
        <div class="modal-content">
          <div class="modal-header">
            <div class="container">
              <p>ユーザー登録しませんか？</p>
            </div>
          </div>
          <div class="modal-body">
            <div class="container">
              <p>ユーザー登録するとクイズを作成できます。</p>
                <router-link
                :to="{ name: 'RegisterIndex' }"
              >
                <button
                  class="btn btn-dark shadow col-12 mb-2"
                >
                  ユーザー登録する
                </button>
              </router-link>
              <button
                class="btn btn-light shadow col-12"
                @click="handleCloseModal"
              >
                やめておく
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
  name: 'UserRecomendModal',
  methods: {
    handleCloseModal() {
      this.$emit('close-modal');
    },
  }
}
</script>

<style scoped>

  .modal {
    display: block;
  }

</style>