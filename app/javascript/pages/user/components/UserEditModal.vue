<template>
  <transition name="fade">
    <div id="user-edit-modal">
      <div class="modal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-header">
              <h5>ユーザー編集</h5>
            </div>
            <div class="modal-body">
              <div class="form-group mb-3">
                <label
                  for="name"
                  class="form-label"
                >ユーザー名</label>
                <input
                  id="name"
                  v-model="user.name"
                  type="text"
                  class="form-control"
                  placeholder="username"
                >
              </div>
              <div class="form-group mb-3">
                <label
                  for="email"
                  class="form-label"
                >メールアドレス</label>
                <input
                  id="email"
                  v-model="user.email"
                  type="email"
                  class="form-control"
                  placeholder="test@example.com"
                >
              </div>
              <div class="form-group mb-3">
                <label
                  for="password"
                  class="form-label"
                >パスワード</label>
                <input
                  id="password"
                  v-model="user.password"
                  type="password"
                  class="form-control"
                  placeholder="password"
                >
              </div>
              <div class="form-group mb-3">
                <label
                  for="password_confirmation"
                  class="form-label"
                >パスワード（確認）</label>
                <input
                  id="password_confirmation"
                  v-model="user.password_confirmation"
                  type="password"
                  class="form-control"
                  placeholder="password"
                >
              </div>
            </div>
            <div class="modal-footer mt-3">
              <button
                type="submit"
                class="btn btn-secondary shadow"
                @click="handleUpdateUser"
              >
                更新する
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
    </div>
  </transition>
</template>

<script>
export default {
  name: "UserEditModal",
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    handleCloseModal() {
      this.$emit('close-modal');
    },
    handleUpdateUser() {
      this.$emit('update-user', this.user)
    }
  }
}
</script>

<style scoped>

.modal {
  display: block;
}

</style>